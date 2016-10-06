$(document).ready(function(){

var  $truck =  $('#truck');
var  $berry =  $('#berry');
var  $pear = $('#pear');
var distance = 600;
var dropf =100;

//Berry falling
//     setInterval(function(){
//       $berry.animate({top: '+500'}, 1000);
// });


function truckmove(e){
// //move right
   $truck.css('left', distance + 'px');
   if(e.keyCode == 39) {
          distance = distance + 200;
           $truck.css('left', distance + 'px');
       } else if (e.keyCode == 37) {
      distance = distance - 200;
      $truck.css('left', distance + 'px');
       } else {
        distance = 600
        }
 }
 $(document).keydown(truckmove);

//Berry falling
//var  timerId =0;
    //timerId = setInterval(function(){
      //$berry.animate({top: '+500'}, 2000);
      // function($truck, $berry) {
      //   $(this).remove();

      // if ($berry.offset().left >= $trunk.offset().left){
          // alert("this is the berry left" + $berry.offset().left);
          // alert("this is the truck left x" + $truck.offset().left);
          // alert("this is the berry top" + $berry.offset().top);
          // alert("this is the trunk top y" + $truck.offset().top);
    // if $berry.offset().top = 450{
    //   clearInterval(timerId);
    // }
// });
//});
var collided = false;
function dropfruit() {

 if  (Math.floor(Math.random()*10) < 5) {
     $fruit =$berry
 } else {
    $fruit = $pear;
 }

 $fruit.css('top', '50px');
 $fruit.animate({top: '+500'}, {duration: 2000, queue: false, complete: function() {
          //alert("this is the berry left" + $berry.offset().left);
          //alert("this is the truck left x" + $truck.offset().left);
          //alert("this is the berry top" + $berry.offset().top);
          //alert("this is the trunk top y" + $truck.offset().top);
          collided = collision($truck, $fruit);
          if (collided == true) {
            // return;
          }
          dropfruit();
}})
}

alert('blah blah blahx');
dropfruit();
function collision($truck, $fruit){

 var x1 = $truck.offset().left;
 var y1 = $truck.offset().top;
 var x2 = $fruit.offset().left;
 var y2 = $fruit.offset().top;

console.log(x1,x2);
if ((x1 == x2) && (y1 < y2)){
   console.log('collide');
   return true;
}
return false;
}



// $(function() {
//   setInterval(ponyTrot, 1);

// for (i=1, i<5, i++){
//  setTimeout(function(){
  // setTimeout(function() {
//          $berry.css('top', dropf + 'px');
          // dropf = dropf + 50;
 //       },1000);
//  // });
// }
});
