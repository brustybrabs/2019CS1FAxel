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

    var randX = Math.floor((Math.random() * screenWidth) + 1);
    var randY = Math.floor((Math.random()* screenHeight) + 1);

    $('body').append("<div id='box"+i+"' class='submit' style='top:" + randY + "px;left:" + randX + "px;'>click</div>");
    /*TweenMax.to(i,1.2,{x:400,y:200,ease:Sine.easeOut});*/
    
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