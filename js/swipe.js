function swipeGesturesInit(){
  var aboutme = document.getElementById('aboutme');
  var projects = document.getElementById('projects');
  var touch = false;
  var lastPos = 0;
  aboutme.addEventListener('touchstart', swipeInit, false);
  aboutme.addEventListener('touchmove', swipeEvent, false);
  aboutme.addEventListener('touchend', swipeEnd, false);
  aboutme.addEventListener('mouseleave', swipeEnd, false);
  function swipeInit(event){
    touch = true;
    lastPos = event.x;
  }
  function swipeEvent(event){
    console.log(touch);
    if (touch){
      var currentPos = event.x;
      var x = parseInt(window.getComputedStyle(aboutme).transform.split(',')[4]);
      var newX = x + (currentPos- lastPos);
      aboutme.style.transition = '';
      aboutme.style.transform = "translate("+ newX + "px, 0)";
      lastPos = currentPos;
    }
  }
  function swipeEnd(event){
    touch = false;
  }
}
