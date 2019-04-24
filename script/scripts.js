
const keysound = () =>{
  window.addEventListener('keydown', function(e) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
      const ripple = document.querySelector(".rip");
      if (!audio) return;
      audio.currentTime = 0;
      audio.play();
      ripple.classList.add("lds-ripple");
      audio.currentTime = 0;

        setTimeout(function(){
          ripple.classList.remove("lds-ripple");
        }, 10000);
    })
}
keysound();
