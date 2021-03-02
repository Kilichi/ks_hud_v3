// Main Functions

$(function() {
    
    $('body').animate({'bottom':'-200'})

    window.addEventListener('message', function(event)
        {

            loadStatus = function(){
            
                $('.hunger').css({'width':event.data.hunger+'%'})
                $('.water').css({'width':event.data.water+'%'})
            
                var finalHealt = event.data.healt - 100
            
                if (finalHealt > 50)
                {
                    $('.healt').css({'width':finalHealt +'%','background-color':'green'})
                }
                else
                {
                    
                    if (finalHealt < 50)
                    {
                        $('.healt').css({'width':finalHealt +'%','background-color':'red'})
                    }

                }
            
                $('.armour').css({'width':event.data.armour+'%'})
            
            }
            
            if (event.data.hud)
            {

                loadStatus()
                
                if (event.data.veh)
                {
                    $('body').animate({'left':'300','bottom':'20'},250)
                }
                else
                {
                    $('body').animate({'left':'0',"bottom":'0'},250)
                }
            
                if (event.data.hideVip)
                {
                    console.log('Hola')
                    $("#vip").animate({"opacity":'0'})
                }
                else
                {
                    $("#vip").animate({"opacity":'1'})
                }

            }
            else
            {
            
                $('body').animate({'bottom':'-200'})
            
            }

        }
    );

});

// END Main functions