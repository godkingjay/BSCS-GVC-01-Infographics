window.addEventListener('scroll', function() {
	var scrollIn = document.querySelectorAll('.s1');

  scrollIn.forEach((e) => {
    const pos = e.getBoundingClientRect();

    if(pos.top >= 0 && pos.bottom <= window.innerHeight) {
      e.classList.add('scroll-in');
      console.log('visible');
    }
  });
});