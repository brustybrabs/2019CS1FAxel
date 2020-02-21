var screenWidth = $(document).width();  //lower cased the variable name
var screenHeight = $(document).height();

/*$newdiv = $('button').css({
    'white': color,})*/

/* the code below adds one div to the webpage */

/*for(var i=0; i<screenHeight.length; i++){
   
}*/



var randX = Math.floor((Math.random() * screenWidth) + 1); //changed it to randX for consitency
var randY = Math.floor((Math.random()* screenHeight) + 1); 
//TweenMax.to(??,1.2,{x:400,y:200,ease:Sine.easeOut});

$('body').append("<div id='correct' class='randBox' style='top:" + randY + "px;left:" + randX + "px;'>click</div>");



for(var i=0;i<100;i++){

    var randX = ((Math.random() * screenWidth) + 1);
    var randY = ((Math.random()* screenHeight) + 1);
    var currID = "box"+i;
    var delay = ((Math.random()*2)+1);
    var delay2 = ((Math.random()*4)+1);
    var delay3= ((Math.random()*6)+1);
    var delay4= ((Math.random()*8)+1);
    var delay5 = ((Math.random()*10)+1);

    console.log(currID);

    $('body').append("<div id='"+currID+"' class='submit' style='top:" + randY + "px;left:" + randX + "px;'>click</div>");
    
    TweenMax.to("#"+currID, 2,{x:400, y:200, delay:delay, ease:Sine.easeOut});
    TweenMax.to("#"+currID, 2, {x:400, y:600, delay:delay2, ease:Sine.easeOut});
    TweenMax.to("#"+currID, 2, {x:-100, y:-200, delay:delay3, ease:Sine.easeOut});
    TweenMax.to("#"+currID, 2, {x:300, y:400, delay:delay4, ease:Sine.easeOut});
    TweenMax.to("#"+currID, 2, {x:-600, y:600, delay:delay5, ease:Sine.easeOut});


    /*TweenMax.to('i',1.2,{x:520, delay:.15, ease:Sine.easeOut});
    TweenMax.to("#car2",1,{rotation:-90, delay:1, ease:Sine.easeOut});*/


};


   
$('.randBox').click(
     function(){
      var color= $(this).css('background-color', 'red');
      console.log(color);
      $('body').css('background-color','blue');var color= $(this).css('background-color', 'red');
      console.log(color);
      $('body').css('background-color','blue');
      alert("You Win!");
    
    }
); 


/*function orderElems(){ // let's talk about what this function is doing
 var elems = [], tempElem, pn, args = orderElems.arguments;
 
 for( var i = 0, len = args.length; i < len; i++ )
  ( pn = ( elems[ i ] = tempElem = document.getElementById( args[ i ] ) ).parentNode).removeChild( tempElem );
  
 for( var i = len - 1, idx, tmp; i > -1; i-- ){ 
  while( ( idx = Math.floor( Math.random() * len ) ) == i )
  ;
  tmp = elems[ i ];
  elems[ i ] = elems[ idx ];
  elems[ idx ] = tmp;
 } 
 
 for( var i = 0; i < len; i++ )
  pn.appendChild( elems[ i ] );
}

orderElems( 'box1', 'box2', 'box3' );*/