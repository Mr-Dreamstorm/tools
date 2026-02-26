document.getElementById("games").innerHTML=`<div class="card">
<h3>TicTacToe HARD</h3>
<div id="b"></div>
<button onclick="newG()">New</button>
<div id="s"></div>
</div>`;

let arr=Array(9).fill("");
function draw(){b.innerHTML=arr.map((v,i)=>`<button onclick="mv(${i})">${v||'-'}</button>`).join("")}
draw();

window.newG=()=>{arr=Array(9).fill("");draw();s.innerText=""};

window.mv=i=>{
if(arr[i])return;
arr[i]='X';
if(win('X')){s.innerText="Win";draw();return;}
ai();
draw();
};

function ai(){
for(let i=0;i<9;i++){if(!arr[i]){arr[i]='O';break;}}
if(win('O'))s.innerText="AI";
}

function win(p){
let w=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
return w.some(a=>a.every(i=>arr[i]==p));
}
