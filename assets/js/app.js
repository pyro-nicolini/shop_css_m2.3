window.addEventListener('scroll', () => {
    const parallaxBg = document.querySelector('.parallax-bg');
    const scrollY = window.scrollY;
    parallaxBg.style.transform = `translateY(${scrollY * 0.4}px)`;
  });

const video = document.querySelector('.video-background');
video.playbackRate = 0.8;
   