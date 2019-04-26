
const keysound = () =>{
  window.addEventListener('keydown', function(e) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`kbd[data-key="${e.keyCode}"]`);
      const icon = document.querySelector(`i[data-key="${e.keyCode}"]`)
      const ripple = document.querySelector(".rip");
      if (!audio) return;
      audio.currentTime = 0;
      audio.play();
      key.classList.add("playing");
      ripple.classList.add("lds-ripple");
      icon.classList.add("playing_i");
        setTimeout(function(){
          ripple.classList.remove("lds-ripple");
        }, 10000);
    })
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
    e.target.classList.remove('playing_i');

  }
  const keys = Array.from(document.querySelectorAll('kbd'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', keysound);

}
keysound();
