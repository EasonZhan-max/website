const btn=document.querySelector('#themeToggle');
const saved=localStorage.getItem('theme');
if(saved==='dark'){document.body.classList.add('dark');}
if(btn){btn.textContent=''; btn.setAttribute('aria-label','切换深色浅色模式');}
btn?.addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  const dark=document.body.classList.contains('dark');
  localStorage.setItem('theme',dark?'dark':'light');
  btn.textContent='';
});
