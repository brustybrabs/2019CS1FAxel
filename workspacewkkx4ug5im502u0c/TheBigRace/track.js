init();

function init(){
    for(var r=0; r<9; r++)
        for(var c=0; c<4; c++){
            var color = (r+c)%2===0?' black': ' white';
            $('#finishLine').append("<div class='checker " + color + "'></div>");
        }
    startRace(1);
}

function startRace(){
    TweenMax.to("#car1",1.2,{x:480,ease:Sine.easeOut});
    TweenMax.to("#car1",1.2,{x:480, y:-300,delay:1.2, ease:Sine.easeOut}); TweenLite.to("#car1", 1.2, {rotation:180,x:480, y:-300,delay:1.2, ease:Sine.easeOut});
    TweenMax.to("#car1",1.2,{x:-115, y:-300,delay:2.5, ease:Sine.easeOut});
    TweenMax.to("#car1",1.2,{x:-115, y:60,delay:3.7, ease:Sine.easeOut}); TweenLite.to("#car1", 1.2, {rotation:360,x:-115, y:60 ,delay:3.7, ease:Sine.easeOut});
    TweenMax.to("#car1",1.2,{x:100,delay:4.9, ease:Sine.easeOut});

    TweenMax.to("#car2",1.2,{x:520, delay:.15, ease:Sine.easeOut});
    TweenMax.to("#car2",1,{rotation:-90, delay:1, ease:Sine.easeOut});
    TweenMax.to("#car2",1.2,{x:520, y:-290,delay:1.35, ease:Sine.easeOut});
    TweenMax.to("#car2",1,{rotation:-180, delay:2, ease:Sine.easeOut});
    TweenMax.to("#car2",1.2,{x:-70, y:-290,delay:2.55, ease:Sine.easeOut});
    TweenMax.to("#car2",1,{rotation:-270, delay:3.55, ease:Sine.easeOut});
    TweenMax.to("#car2",1.2,{x:-70, y:.40,delay:4.4, ease:Sine.easeOut});
    TweenMax.to("#car2",1,{rotation:-360, delay:5.4, ease:Sine.easeOut});
    TweenMax.to("#car2",1,{x:100,delay:6.3, ease:Sine.easeOut});
    
    TweenMax.to("#car3",1,{x:520, y:-5, delay:.025, ease:Sine.easeOut});
    TweenMax.to("#car3",1,{rotation:-90, delay:1.2, ease:Sine.easeOut});
    TweenMax.to("#car3",1,{x:500, y:-320,delay:2, ease:Sine.easeOut});
    TweenMax.to("#car3",1,{rotation:-180, delay:3, ease:Sine.easeOut});
    TweenMax.to("#car3",1.6,{x:-70, y:-320,delay:3.5, ease:Sine.easeOut});
    TweenMax.to("#car3",1,{rotation:-270, delay:3.9, ease:Sine.easeOut});
    TweenMax.to("#car3",1.6,{x:-50, y:60,delay:5.5, ease:Sine.easeOut});
    TweenMax.to("#car3",1.7,{x:-130,delay:6.2, ease:Sine.easeOut});
    TweenMax.to("#car3",1,{rotation:360, delay:6.2, ease:Sine.easeOut});
    

    }

 