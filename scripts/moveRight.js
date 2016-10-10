$(document).ready(function(){

var  $truck =  $('#truck');
var  $strawberry = $('#strawberry');
var  $berry =  $('#berry');
var  $pear = $('#pear');
var  $apple = $('#apple');
var  distance = 600;
var  timerCount = 0;
var  playgame = true;
var  gotFruit = 0;
var  caughtFruit = 0;
var  missedFruit = 0;
var  level = 1;
var  levels = { 1: 2000, 2: 1500, 3: 1000, 4: 700 }

var currentDiver = $('#player');

var queryString = window.location.search.split('=')[1];
var player = queryString.split('&');
// alert(player);
$('#player').text(player);

// currentDiver.text(window.location.search.split('=')[1]);
// currentDiver.text(currentDiver.split('='));
// // alert("Hi" + currentDiver + "ready to play");


function truckmove(e){
// //move right
   $truck.css('left', distance + 'px');
   if(e.keyCode == 39) {
          distance = distance + 150;
           $truck.css('left', distance + 'px');
       } else if (e.keyCode == 37) {
      distance = distance - 150;
      $truck.css('left', distance + 'px');
       } else {
        distance = 600
        }
 }

 $(document).keydown(truckmove);


// testing getting field

//file:///Users/adyfong/code/wdi/lab/project-1-game/index.html?fname=Mike&lname=Smith


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

// while (playgame){

function dropfruit(howfast) {

// if (playgame){
 // if  (Math.floor(Math.random()*10) < 5) {
 //     // $fruit =$berry;
 //     // console.log('It is berry')
 //      $fruit =$apple;
 //     console.log('It is apple')
 // } else {
 //    $fruit = $pear;
 //    console.log('It is pear')
 // }

switch (Math.floor(Math.random()*10)) {
    case 0:
    case 1:
    case 2:
        $fruit = $strawberry;
        break;
    case 3:
    case 4:
        $fruit = $berry;
        break;
    case 5:
    case 6:
        $fruit = $pear;;
        break;
    case 7:
    case 8:
        $fruit = $apple;
        break;
  }


 // timerCount = setTimeout(gameOver, 60000);
 //if ($(berry).is(":visible") == false) {
  $strawberry.css('top', '50px');
  $strawberry.attr('visiblity', 'visible')

  $apple.css('top', '50px');
  $apple.attr('visiblity', 'visible')

  $berry.css('top', '50px');
  $berry.attr('visiblity', 'visible')
 //}
 //if ($(pear).is(":visible") == false) {
   $pear.css('top', '50px');
   $pear.attr('visiblity', 'visible')
 //}
 $fruit.stop().animate({top: '+500'}, {duration: howfast, complete: function() {
         $fruit.attr('visiblity', 'hidden');
           // $fruit.remove();
          gotFruit = gotFruit + 1;
          $('#getFruit').text(gotFruit);
          if (gotFruit > 15) {
            playgame = false;
            level = level + 1;
            alert('Great Job! Press Start for Level!!!' + level )
          }

          collided = collision($truck, $fruit);
          // $(this).remove();
          if (collided == true) {
            caughtFruit = caughtFruit + 1;
            $('#catchFruit').text(caughtFruit);
          } else {
            missedFruit = missedFruit + 1;
            $('#missFruit').text(missedFruit);
          }

          if (missedFruit > 2) {
            playgame = false;
          }

          if (playgame == false) {
            return
          }

// function gameOver() {
//          playgame = 0;
//          clearTimeout(timerCount);
//          timerCount = 0;
//          }

          // id(score === 50){
          //   end function
          // }else {}
            dropfruit(howfast);
}});
}


//Closing dropfruit
$('#button1').click(callPlay);
function callPlay(){
  if (level > 4) {
    alert('Congratulations! You win!!!')
    return
  }
  playgame = true;
  gotFruit = 0;
  caughtFruit = 0;
  missedFruit = 0;
  $('#missFruit').text(missedFruit);
  // alert('Starting Level ' + level)
  dropfruit(levels[level]);
}


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

// };  while Loop
});

