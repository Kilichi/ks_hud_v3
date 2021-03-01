<font style="font-weight:bold;">
    KS HUD V3
</font>

<br>
<br>

<font style="font-weight:bold;">
    Preview
</font>

<br>
<br>

<img src=https://i.imgur.com/v5ndrs2.png>

<br>
<br>


<font style="font-weight:bold; margin.bottom:20px;">
    Instalation
</font>
<br>
<br>

    Change [esx_status/client/main.lua]

    TriggerEvent('esx_status:onTick', GetStatusData(true))

    to

    TriggerEvent('ks_hud:onTick', GetStatusData(true))


<img src="https://i.imgur.com/cHjqnZa.png">