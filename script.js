const gifi = ["2s4zrw72", "56h685d2", "AngryOnThePig", "2p8syp67", "23ycyjba", "4u9r4naa", "43mvbc33", "4n3tb6my", "ysd56ktr"],
  base = "https://tinyurl.com/";
let re = 0, i, u;

let pl = {};

function preloadImage(url)
{
    var img=new Image();
    img.src=base.concat(url);
  return img;
}

for(let x of gifi){
  pl[x] = preloadImage(x);
}
const _a = document.getElementById("li");
  const click = ()=>{
  console.log("It Lives!");
  if(re!=0){
    document.body.removeChild(re);
  }
  i = gifi[Math.floor(Math.random()*gifi.length)];
  u = base.concat(i);
  _a.innerText="Id: ".concat(i);
  _a.href=u;
  console.log(u);
  re=pl[i];
  document.body.append(re);
};

let timer = false, interv = null;
const btn1=document.getElementById("rn"),
  btn2 = document.getElementById("timed");

btn2.onclick = ()=>{
  if(timer){
    if(interv != null){
      clearInterval(interv);
    }
  }else{
    interv = setInterval(click, 800);
  }
  timer=!timer;
  btn1.disabled = timer;
  btn2.innerText = (timer?"Disable":"Enable") + " Timed";
}
btn1.onclick = ()=>{
  if(timer) return;
  click();
};

click();
