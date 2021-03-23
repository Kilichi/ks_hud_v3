// Main Functions

$(function() {
    
    $('body').animate({'bottom':'-200'})

    window.addEventListener('message', function(event)
        {
            function loadStatus(){
            
                $('.hunger').css({'width':event.data.hunger+'%'})
                $('.water').css({'width':event.data.thirst+'%'})
            
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
            }
            
            if (event.data.showHud)
            {

                loadStatus()

                if (event.data.inVehicle)
                {
                    $('body').animate({'left':'300','bottom':'20'},250)
                    $('.bar').css({"display":"block","width":"100px"},200)
                }
                else
                {
                    $('.bar').css({"display":"inline-block","width":"75px"},200)
                    $('body').animate({'left':'0',"bottom":'0',"display":"inline-block"},250)
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