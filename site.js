
(function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.appendChild(document.createTextNode(new Date().getFullYear()));
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuBtn && mobileMenu){
    menuBtn.addEventListener('click', ()=> {
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      menuBtn.setAttribute('aria-expanded', String(!isOpen));
    });
  }
  // Keep desktop dropdown open while hovering
  const menu = document.getElementById('divisionsMenu');
  if (menu){
    const panel = menu.querySelector('div[role="menu"]');
    const btn = menu.querySelector('button');
    menu.addEventListener('mouseenter', ()=>{ panel.classList.remove('hidden'); btn.setAttribute('aria-expanded','true'); });
    menu.addEventListener('mouseleave', ()=>{ panel.classList.add('hidden'); btn.setAttribute('aria-expanded','false'); });
    // Allow clicking the button to toggle as well
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      panel.classList.toggle('hidden');
      const expanded = panel.classList.contains('hidden') ? 'false' : 'true';
      btn.setAttribute('aria-expanded', expanded);
    });
  }
  // Video fallback
  const v = document.getElementById('heroVideo');
  const hero = document.querySelector('.hero');
  if (v && hero){
    v.play().catch(()=>{
      hero.classList.add('hero-fallback');
      v.style.display = 'none';
    });
    v.addEventListener('error', ()=>{
      hero.classList.add('hero-fallback');
      v.style.display = 'none';
    });
  }
})();
