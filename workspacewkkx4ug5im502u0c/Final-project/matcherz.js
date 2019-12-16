$('.color2').click(
    function(){
      alert("Wrong!");
      var color= $('.color3').css("background-color");
      console.log(color);
      $('body').css("background-color",color);
    }
); 

$('.color5').click(
    function(){
      alert("Right! Next Level!");
      var color= $('.color2').css("background-color");
      console.log(color);
      $('body').css("background-color",color);
    }
    ); 
   