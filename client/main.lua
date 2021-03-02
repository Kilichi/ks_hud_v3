Config = {}
Config['Hud'] = true
hideVip = false

ESX = nil
Citizen.CreateThread(function()
    while ESX == nil do
        TriggerEvent("esx:getSharedObject",function(core)
            ESX = core
        end)
    end
end)

RegisterNetEvent("esx_status:onTick")
AddEventHandler("esx_status:onTick", function(status)
    TriggerEvent('esx_status:getStatus', 'hunger', function(status)
        hunger = status.val / 10000
    end)
    TriggerEvent('esx_status:getStatus', 'thirst', function(status)
        water = status.val / 10000
    end)
end)

local veh = false

Citizen.CreateThread(function()
    while true do
        s = 1000 

        if IsPedSittingInAnyVehicle(PlayerPedId()) then
            DisplayRadar(true)
            veh = true
        else
            DisplayRadar(false)
            veh = false
        end

        if IsPauseMenuActive() then
            Config['Hud'] = false
        else
            Config['Hud'] = true
        end

        SendNUIMessage({
            veh = veh,
            hud = Config['Hud'],
            hunger = hunger,
            water = water,
            healt = GetEntityHealth(GetPlayerPed(-1)),
            armour = GetPedArmour(GetPlayerPed()),
        })


        Citizen.Wait(s)
    end    
end)