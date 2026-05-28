const btn=document.querySelector('#themeToggle');
const saved=localStorage.getItem('theme');
if(saved==='dark'){document.body.classList.add('dark');btn.textContent='☀';}
btn?.addEventListener('click',()=>{document.body.classList.toggle('dark');const dark=document.body.classList.contains('dark');localStorage.setItem('theme',dark?'dark':'light');btn.textContent=dark?'☀':'☾';});
