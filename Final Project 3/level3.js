(function makeDiv(){
    
    var divsize = ((Math.random()*100) + 50).toFixed();
    var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
    $newdiv = $('button').css({
        'width':divsize+'55px',
        'height':divsize+'17px',
        'background-color': color
    });

    var posx = (Math.random() * ($(document).width('500px') - divsize)).toFixed();
    var posy = (Math.random() * ($(document).height('500px') - divsize)).toFixed();

    $newdiv.css({
        'position':'absolute',
        'left':posx+'400px',
        'top':posy+'50px',
        'display':'none'
    }).appendTo( 'body' ).fadeIn(100).delay(1000).fadeOut(500, function(){
      $(this).remove();
      makeDiv(); 
    }); 
})()