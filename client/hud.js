var Status = {
    hunger : 0,
    thirst : 0,
    showHud : IsPauseMenuActive(),
    healt : GetEntityHealth(GetPlayerPed(-1))
}

onNet('esx_status:onTick', () => {
    
    emit('esx_status:getStatus', 'hunger', (status) => {
        Status['hunger'] = status
    })

    emit('esx_status:getStatus', 'thirst', (status) => {
        Status['thirst'] = status
    })

    DisplayRadar(IsPedSittingInAnyVehicle(PlayerPedId()))

    SendNuiMessage(
        JSON.stringify({
            hunger : Status['hunger'],
            thirst : Status['thirst'],
            inVehicle : IsPedSittingInAnyVehicle(PlayerPedId()),
            showHud : !Status['showHud'],
            healt : Status['healt']
        })
    )

})