window.addEventListener('scroll', function() {
	var scrollIn = document.querySelectorAll('.s1');

  scrollIn.forEach((e) => {
    const pos = e.getBoundingClientRect();

    if(pos.top < window.innerHeight && pos.bottom >= 0) {
      e.classList.add('scroll-in');
      console.log('visible');
    }
  });
});