const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;
(function loadTheme() {
  const saved = localStorage.getItem("theme") || "dark";
  html.setAttribute("data-bs-theme", saved);
  themeToggle.textContent = saved === "light" ? "🌙" : "☀️";
})();
themeToggle.addEventListener("click", () => {
  const current = html.getAttribute("data-bs-theme");
  const next = current === "light" ? "dark" : "light";
  html.setAttribute("data-bs-theme", next);
  localStorage.setItem("theme", next);
  themeToggle.textContent = next === "light" ? "🌙" : "☀️";
});

const sections=document.querySelectorAll("section"),navLinks=document.querySelectorAll(".nav-link");
window.addEventListener("scroll",()=>{
  let cur="";
  sections.forEach(s=>{if(scrollY>=s.offsetTop-100)cur=s.id});
  navLinks.forEach(a=>{a.classList.toggle("active",a.getAttribute("href").includes(cur))});
});

const reveals=document.querySelectorAll(".reveal");
const revealScroll=()=>{reveals.forEach(el=>{const t=el.getBoundingClientRect().top;if(t<window.innerHeight-100)el.classList.add("visible")})};
window.addEventListener("scroll",revealScroll);revealScroll();
