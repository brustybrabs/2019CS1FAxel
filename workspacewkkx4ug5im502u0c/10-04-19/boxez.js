$('.box1').click(
    function(){
      alert("GOALLLLLLLLLLLLLLLLLLLLL!");
      var color= $(this).css("background-color");
      console.log(color);
      $('body').css("background-color",color);
    }
); 
$('.box2').click(
    function(){
      alert("RED CARD");
       color= $(this).css("background-color");
      console.log(color);
      $('body').css("background-color",color);
    }
 )