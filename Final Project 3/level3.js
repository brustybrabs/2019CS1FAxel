var ScreenWidth = $(document).width();

var X = Math.floor((Math.random() * ScreenWidth) + 1); 

var ScreenHeight = $(document).height();

var randY = Math.floor((Math.random()* ScreenHeight)+1); 

$newdiv = $('button').css({
    'white': color,})

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