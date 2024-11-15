window.addEventListener('scroll', () => {
    const parallaxBg = document.querySelector('.parallax-bg');
    const scrollY = window.scrollY;
    parallaxBg.style.transform = `translateY(${scrollY * 0.4}px)`;
  });

