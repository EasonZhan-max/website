const btn=document.querySelector('#themeToggle');
const updateThemeIcon=()=>{
  if(!btn) return;
  const dark=document.body.classList.contains('dark');
  btn.innerHTML='<span class="theme-glyph" aria-hidden="true">'+(dark?'☀':'☾')+'</span>';
  btn.setAttribute('aria-label', dark ? '切换到浅色模式' : '切换到深色模式');
};
const saved=localStorage.getItem('theme');
if(saved==='dark'){document.body.classList.add('dark');}
updateThemeIcon();
btn?.addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  const dark=document.body.classList.contains('dark');
  localStorage.setItem('theme',dark?'dark':'light');
  updateThemeIcon();
});
