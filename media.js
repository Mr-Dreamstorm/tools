document.getElementById("media").innerHTML=`<div class="card">
<h3>Audio Effects</h3>
<button onclick="rec()">Record</button>
<button onclick="speed()">Speed x2</button>
<audio id="a" controls></audio>
</div>`;

let mr,ch=[],audioBlob;

window.rec=async()=>{
if(!mr){
let s=await navigator.mediaDevices.getUserMedia({audio:true});
mr=new MediaRecorder(s);
mr.ondataavailable=e=>ch.push(e.data);
mr.onstop=()=>{
audioBlob=new Blob(ch);
a.src=URL.createObjectURL(audioBlob);
ch=[];
};
mr.start();
}else{mr.stop();mr=null;}
};

window.speed=()=>{
if(audioBlob){
let audio=new Audio(a.src);
audio.playbackRate=2;
audio.play();
}
};
