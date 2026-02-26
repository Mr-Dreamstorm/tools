document.getElementById("tools").innerHTML=`<div class="card">
<textarea id="txt"></textarea>
<button onclick="caesar()">Caesar</button>
<button onclick="rev()">Reverse</button>
<div id="out"></div>
</div>`;

window.caesar=()=>{out.innerText=txt.value.split('').map(c=>String.fromCharCode(c.charCodeAt(0)+3)).join('')};
window.rev=()=>out.innerText=txt.value.split('').reverse().join('');
