RegisterNetEvent('esx_status:load')
AddEventHandler('esx_status:load', function(status)
	TriggerEvent('esx_status:loaded')
	for i=1, #Status, 1 do
		for j=1, #status, 1 do
			if Status[i].name == status[j].name then
				Status[i].set(status[j].val)
			end
		end
	end

	Citizen.CreateThread(function()
		while true do
			for i=1, #Status, 1 do
				Status[i].onTick()
			end

			SendNUIMessage({
				update = true,
				status = GetStatusData()
			})

			TriggerEvent('ks_hud:onTick', GetStatusData(true))
			Citizen.Wait(Config.TickTime)
		end
	end)
end)