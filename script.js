const menuBtn=document.getElementById('menuBtn');
const mainNav=document.getElementById('mainNav');
if(menuBtn&&mainNav){menuBtn.addEventListener('click',()=>mainNav.classList.toggle('open'));}
const reveals=document.querySelectorAll('.reveal');
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}})},{threshold:.12});
reveals.forEach(el=>obs.observe(el));
const mapModal=document.getElementById('mapModal');
const mapFrame=document.getElementById('mapFrame');
const mapClose=document.getElementById('mapClose');
document.querySelectorAll('.map-open').forEach(btn=>{btn.addEventListener('click',()=>{const q=encodeURIComponent(btn.dataset.map||'Vũng Tàu');mapFrame.src=`https://www.google.com/maps?q=${q}&output=embed`;mapModal.classList.add('open');mapModal.setAttribute('aria-hidden','false');});});
function closeMap(){if(!mapModal)return;mapModal.classList.remove('open');mapModal.setAttribute('aria-hidden','true');mapFrame.src='';}
if(mapClose)mapClose.addEventListener('click',closeMap);
if(mapModal)mapModal.addEventListener('click',e=>{if(e.target===mapModal)closeMap();});
const consultClose=document.getElementById('consultClose');
const consultBox=document.getElementById('consultBox');
if(consultClose&&consultBox){consultClose.addEventListener('click',()=>{consultBox.style.display='none';});}
