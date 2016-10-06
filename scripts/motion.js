
// $(document).ready(function(){


var  $truck =  $('#truck');
var distance = 200;

function truckmove(e){

// var code = e.keyCode || e.which;
// // // // moves the truck left
   if(e.which == 37) {
    console.log('hi');
    // if ($truck < 1200){
      // $trunk.css('left', distance + 'px');
      $('#truck').animate({marginLeft: "+=70px"}, 500);
       console.log('2');
     };


  if(e.which == 39) {
//   if ($trunk < 1200){
     $('#truck').animate({marginRight: "+=70px"}, 500);
    }
  }

}

// document.onkeydown = truckmove;




 $('body').keydown(truckmove);


// //moves truck to right - learning jawascript
// if(e.keyCode == 39) {
//   if ($trunk < 1200){
//        $trunk.css('left', distance + 200 + 'px');
 // }
//  }
// }
// });
// $(document).keydown(truckmove(e));


// });



// console.log("READY 2 ROCK");

// function walkingPony(){
//   var $pony = $('#pony');
//   var distance = 1200;
//   setInterval(function(){
//     $pony.css('left', distance + 'px');
//     if (distance < -300) {
//       distance = 1200;
//     } else {
//       distance -= 5;
//     }
//   }, 100);
// };

// $(document).ready(function(){
//   walkingPony();
// })

