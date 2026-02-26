document.getElementById("qr").innerHTML=`<div class="card">
<input id="q"><input type="color" id="clr">
<button onclick="gen()">QR</button>
<div id="qrcode"></div>
<button onclick="downloadQR()">Download</button>
</div>`;

window.gen=()=>{
qrcode.innerHTML='';
new QRCode(qrcode,{text:q.value,width:200,height:200,colorDark:clr.value||"#000"});
};

window.downloadQR=()=>{
let img=qrcode.querySelector("img");
if(img){
let a=document.createElement("a");
a.href=img.src;
a.download="qr.png";
a.click();
}
};
