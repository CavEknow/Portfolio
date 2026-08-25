const menu=document.querySelector(".menu"),links=document.querySelector(".nav-links");
menu?.addEventListener("click",()=>{links.classList.toggle("open");menu.classList.toggle("active")});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const el=document.querySelector(a.getAttribute("href"));if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth"})}}));
window.addEventListener("scroll",()=>{document.querySelector(".nav-wrap")?.classList.toggle("scrolled",scrollY>20)});
