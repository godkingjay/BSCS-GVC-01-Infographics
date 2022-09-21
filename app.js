window.addEventListener('scroll', function() {
	var scrollIn = document.querySelectorAll('.s1');

  //  Partial
  //  pos.top < window.innerHeight && pos.bottom >= 0

  // Full
  // pos.top >= 0 && pos.bottom <= window.innerHeight

  scrollIn.forEach((e) => {
    const pos = e.getBoundingClientRect();

    if(pos.top >= 0 && pos.bottom/1.5 <= window.innerHeight) {
      e.classList.add('scroll-in');
      console.log('visible');
    }
  });
});