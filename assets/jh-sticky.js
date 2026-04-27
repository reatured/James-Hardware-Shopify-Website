(function () {
  function init() {
    var sec = document.querySelector('.section-header');
    if (!sec) return;
    var threshold = 80;
    var ticking = false;
    function update() {
      ticking = false;
      if (window.pageYOffset > threshold) {
        sec.classList.add('jh-scrolled');
      } else {
        sec.classList.remove('jh-scrolled');
      }
    }
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
