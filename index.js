
(function(){
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.card').forEach(c => c.classList.add('reveal'));
    return;
  }
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.card').forEach(c => c.classList.add('reveal'));
    return;
  }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('reveal');
        io.unobserve(e.target);
      }
    });
  }, {threshold:0.15});
  document.querySelectorAll('.card').forEach(c=>io.observe(c));
})();

