window.addEventListener('scroll', function() {

  //  Partial
  //  pos.top < window.innerHeight && pos.bottom >= 0

  // Full
  // pos.top >= 0 && pos.bottom <= window.innerHeight

  const fade1 = document.querySelectorAll('.fade-1');

  fade1.forEach((e) => {
    const pos = e.getBoundingClientRect();

    if(pos.top >= 0 && pos.bottom/1.5 <= window.innerHeight) {
      e.classList.remove('fade-1');
    }
  });

  const s1A = document.querySelectorAll('.s1-a');

  s1A.forEach((e) => {
    const pos = e.getBoundingClientRect();

    if(pos.top >= 0 && pos.bottom/3 <= window.innerHeight) {
      e.classList.remove('s1-a');
    }
  });

  const s1B = document.querySelectorAll('.s1-b');

  s1B.forEach((e) => {
    const pos = e.getBoundingClientRect();

    if(pos.top >= 0 && pos.bottom/2 <= window.innerHeight) {
      e.classList.remove('s1-b');
    }
  });

  const s2A = document.querySelectorAll('.s2-a');

  s2A.forEach((e) => {
    const pos = e.getBoundingClientRect();

    if(pos.top >= 0 && pos.bottom/1.5 <= window.innerHeight) {
      e.classList.remove('s2-a');
    }
  });

  const s2B = document.querySelectorAll('.s2-b');

  s2B.forEach((e) => {
    const pos = e.getBoundingClientRect();

    if(pos.top >= 0 && pos.bottom/1.5 <= window.innerHeight) {
      e.classList.remove('s2-b');
    }
  });
});