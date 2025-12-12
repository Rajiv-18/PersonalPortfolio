// Mobile nav toggle
const nav = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');
navToggle.addEventListener('click', ()=>{
  const visible = nav.style.display === 'block';
  nav.style.display = visible ? '' : 'block';
});

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      if(window.innerWidth<=700) nav.style.display='';
    }
  })
});

// Simple contact handler: opens mailto with form contents as fallback
function handleContact(e){
  e.preventDefault();
  const form = e.currentTarget;
  const data = new FormData(form);
  const name = data.get('name');
  const email = data.get('email');
  const message = data.get('message');
  const subject = encodeURIComponent(`Message from ${name} via Portfolio`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:itzrajiv18@gmail.com?subject=${subject}&body=${body}`;
}

// Rotating text animation
;(function(){
  const phrases = [
    'building apps',
    'solving problems',
    'working on projects',
    'learning Salesforce',
    'integrating CRM systems',
    'exploring marketing technology'
  ];
  const el = document.getElementById('rotating-text');
  if(!el) return;
  let idx = 0;
  function showNext(){
    el.classList.remove('fade-in');
    el.classList.add('fade-out');
    setTimeout(()=>{
      el.textContent = phrases[idx];
      el.classList.remove('fade-out');
      el.classList.add('fade-in');
      idx = (idx + 1) % phrases.length;
    }, 300);
  }
  // initial display
  el.textContent = phrases[0];
  el.classList.add('fade-in');
  setInterval(showNext, 2200);
})();
