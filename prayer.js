document.getElementById("prayer").innerHTML=`<div class="card">
<button onclick="load()">Namoz</button>
<div id="t"></div>
</div>`;

window.load=async()=>{
let r=await fetch("https://api.aladhan.com/v1/timingsByCity?city=Tashkent&country=Uzbekistan");
let d=await r.json();
let tm=d.data.timings;
t.innerHTML=`Fajr:${tm.Fajr}<br>Dhuhr:${tm.Dhuhr}<br>Asr:${tm.Asr}<br>Maghrib:${tm.Maghrib}<br>Isha:${tm.Isha}`;
};
