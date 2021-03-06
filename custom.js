
var screenWidth = document.body.offsetWidth;

function createDucks(count) {

var delay = 0;
var hitCount = 0;
var missCount = 0;

for(var i = 0; i < count; i++) {
   var duck = $('<img src="ducky.jpg">');
   duck.css({
         position: 'absolute',
         left: 0,
         top: '35%',
         width: 50 + 200 * Math.random(i * 100) + 'px'
      });
      delay += 900;

      duck.appendTo('.duck');
      duck.hide().delay(delay).show(1).animate({
         'left': screenWidth
         }, {
         duration: 3000,
         easing: "linear",
         complete: function() {
          $(this).remove();
          missCount++;
         }
      });

      duck.click(function() {
         var audioElement = document.createElement('audio');

         audioElement.setAttribute('src', 'Quack Quack-SoundBible.com-620056916.mp3');
         audioElement.play();
         $(this).remove();
         hitCount++;
      });
   }
}

$(document).ready(function() {
   createDucks(30);

   console.log(hitCount, missCount);
});
