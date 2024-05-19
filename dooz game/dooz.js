const allicon=document.querySelector('.home-icons');
const icons=document.querySelectorAll(".icon");
const resetbtn=document.querySelector('.refresh');
const datacells=document.querySelectorAll('[data-cell]');
const winnumx=document.querySelector('.win-number-x');
const winnumo=document.querySelector('.win-number-o');
const homeX=document.querySelector('.home-X');
const homeO=document.querySelector('.home-O');
const showwinner=document.querySelector('.home-winner');
const winmarker=document.querySelector('.mark-winner');
const wonboxclose=document.querySelector('.close-won-box');
const youguste=document.querySelector('.YG');
const winplayer=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let options=["","","","","","","","",""];
let turnplayer= `<i class="x xtop fa-solid fa-xmark"></i>`;
let running= false;
let winX= Number(winnumx.textContent);
let winO= Number(winnumo.textContent);
let iconwinner=document.createElement('span')
inigame()
function inigame(){
    icons.forEach(cell=>{
        cell.addEventListener('click',iconsclicked)
    })
    wonboxclose.addEventListener('click',closeBox);
    resetbtn.addEventListener('click',restartgame);
    running =true;
}

function iconsclicked(){
  const cellindex=this.getAttribute("data-cell");
 
  if(options[cellindex] != "" || !running){
    return
  }
  function checkwinner(){
    let roundwon = false;

    for(let i=0;i<winplayer.length;i++){
        const condition=winplayer[i];
        const cellA=options[condition[0]];
        const cellB=options[condition[1]];
        const cellC=options[condition[2]];
         if(cellA == "" || cellB == "" || cellC == "") {
            continue;
         }
         if(cellA == cellB && cellB == cellC){
           roundwon=true;
           showwinner.style.display='flex';
             if(datacells[condition[0]].firstChild.classList[0]=='x'){
               datacells[condition[0]].style.backgroundColor='#31c4be';
               datacells[condition[1]].style.backgroundColor='#31c4be';
               datacells[condition[2]].style.backgroundColor='#31c4be';
               datacells[condition[0]].firstChild.style.color='#253e4b';
               datacells[condition[1]].firstChild.style.color='#253e4b';
               datacells[condition[2]].firstChild.style.color='#253e4b';
               winX+=1;
               winnumx.textContent=winX;
               winmarker.firstChild.style.color='#31c4be'
               winmarker.appendChild(iconwinner);
               iconwinner.innerHTML=`<i class="winmarkx xtop fa-solid fa-xmark"></i>`;
               youguste.innerHTML=`YOU WON!`;
             } else{
               datacells[condition[0]].style.backgroundColor='#f2b237';
               datacells[condition[1]].style.backgroundColor='#f2b237';
               datacells[condition[2]].style.backgroundColor='#f2b237';
               datacells[condition[0]].firstChild.style.color='#253e4b';
               datacells[condition[1]].firstChild.style.color='#253e4b';
               datacells[condition[2]].firstChild.style.color='#253e4b';
               winO+=1;
               winnumo.textContent=winO;
               winmarker.firstChild.style.color='#f2b237';
               winmarker.appendChild(iconwinner);
               iconwinner.innerHTML=`<i class="winmarko otop fa-regular fa-circle"></i>`;
               youguste.innerHTML=`GUEST WON!`;
             }     
           break;
         }

    }
    if(roundwon){
       running=false;
    }else if(!options.includes("")){
       running=false;
    }else{
       changeplayer();
    }
   }
  updateicons(this,cellindex);
  checkwinner()
}
function updateicons(cell,index){
options[index] =turnplayer;
cell.innerHTML=turnplayer;
}
function changeplayer(){
  turnplayer=(turnplayer==`<i class="x xtop fa-solid fa-xmark"></i>`) ? `<i class="o otop fa-regular fa-circle"></i>` : `<i class="x xtop fa-solid fa-xmark"></i>` ;
  if(turnplayer==`<i class="x xtop fa-solid fa-xmark"></i>`){
   homeX.classList.add("glowX");
   homeO.classList.remove("glowO");
  }else{
   homeO.classList.add("glowO");
   homeX.classList.remove("glowX");
  }
}
function closeBox(){
  showwinner.style.display='none';
  turnplayer=`<i class="x xtop fa-solid fa-xmark"></i>`;
  options=["","","","","","","","",""];
  icons.forEach(cell=>cell.innerHTML="");
  running=true;
  homeX.classList.add("glowX");
  homeO.classList.remove("glowO");
  datacells[0].style.backgroundColor='#253e4b';
  datacells[1].style.backgroundColor='#253e4b';
  datacells[2].style.backgroundColor='#253e4b';
  datacells[3].style.backgroundColor='#253e4b';
  datacells[4].style.backgroundColor='#253e4b';
  datacells[5].style.backgroundColor='#253e4b';
  datacells[6].style.backgroundColor='#253e4b';
  datacells[7].style.backgroundColor='#253e4b';
  datacells[8].style.backgroundColor='#253e4b';
}
function restartgame(){
   turnplayer=`<i class="x xtop fa-solid fa-xmark"></i>`;
   options=["","","","","","","","",""];
   icons.forEach(cell=>cell.innerHTML="");
   running=true;
   homeX.classList.add("glowX");
   homeO.classList.remove("glowO");
   datacells[0].style.backgroundColor='#253e4b';
   datacells[1].style.backgroundColor='#253e4b';
   datacells[2].style.backgroundColor='#253e4b';
   datacells[3].style.backgroundColor='#253e4b';
   datacells[4].style.backgroundColor='#253e4b';
   datacells[5].style.backgroundColor='#253e4b';
   datacells[6].style.backgroundColor='#253e4b';
   datacells[7].style.backgroundColor='#253e4b';
   datacells[8].style.backgroundColor='#253e4b';
  }