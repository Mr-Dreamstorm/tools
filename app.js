import './prayer.js';
import './qr.js';
import './tools.js';
import './media.js';
import './games.js';

const sections=[
{id:"prayer",name:"🕌 Namoz"},
{id:"qr",name:"📱 QR"},
{id:"tools",name:"🧰 Tools"},
{id:"media",name:"🎬 Media"},
{id:"games",name:"🎮 Games"}
];

nav.innerHTML=sections.map(s=>`<button onclick="show('${s.id}')">${s.name}</button>`).join("");

window.show=id=>{
document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
document.getElementById(id).classList.add("active");
};
