
const todaydate=document.querySelector('.today-date')
let gethour=new Date();
let hour = gethour.getHours()
let persianmonths =["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"];
let persianday =["شنبه","یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه","یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنجشنبه","جمعه"]
let getpersiandate =(parssdate)=>{
  let newdate=moment(parssdate);
  let dateweek=new Date();
  let month=persianmonths[newdate.jMonth()];
  let day=newdate.jDate();
  let dayweek=persianday[dateweek.getUTCDay()+1];
  let td= ` ${dayweek} ${new Intl.NumberFormat('fa-IR').format(day)} ${month} `;
  todaydate.innerHTML=td;
}
getpersiandate()



const imgcart =document.querySelector('.img-weather')
const tdarage=document.querySelector('.today-deg');
const tvazehava=document.querySelector('.today-vaz');
const tmin=document.querySelector('.today-min');
const tmax=document.querySelector('.today-max');

async function getApicart(){
  let weatherdata=await fetch('https://api.dastyar.io/express/weather?lat=35.67194277&lng=51.42434403');
  let objdata=await weatherdata.json()
   let api1 =objdata[0];
  tdarage.innerHTML=new Intl.NumberFormat('fa-IR').format(Math.round(api1.current))+'°';
  
  tmin.innerHTML= `${new Intl.NumberFormat('fa-IR').format(Math.round(api1.min))}°  حداقل`;
  tmax.innerHTML= `${new Intl.NumberFormat('fa-IR').format(Math.round(api1.max))}°  حداکثر`;
  
  if(hour>7 && hour<=18){
  if(api1.weather.main==="Clear"){
    imgcart.src="img/image weather/sun.png";
    tvazehava.textContent='آسمان صاف';
  }else if(api1.weather.main==="Clouds"){
    imgcart.src="img/image weather/cloud_sun.png";
    tvazehava.textContent='هوای ابری';
  }else if(api1.weather.main==="Rain"){
    imgcart.src="img/image weather/sun_cloud_rain.png";
    tvazehava.textContent='باران ملایم';
  }else if(api1.weather.main==="Snow"){
    imgcart.src="img/image weather/suncloudsnow.png";
    tvazehava.textContent='بارش برف';
  }
}else{
  if(api1.weather.main==="Clear"){
    imgcart.src="img/image weather/moon.png";
    tvazehava.textContent='آسمان صاف';
  }else if(api1.weather.main==="Clouds"){
    imgcart.src="img/image weather/cloud_moon.png";
    tvazehava.textContent='هوای ابری';
  }else if(api1.weather.main==="Rain"){
    imgcart.src="img/image weather/moon_cloud_rain.png";
    tvazehava.textContent='باران ملایم';
  }else if(api1.weather.main==="Snow"){
    imgcart.src="img/image weather/mooncloudsnow.png";
    tvazehava.textContent='بارش برف';
  }
}
}
getApicart()


const liday=document.querySelector('.LIday');
const liicon=document.querySelector('.LIicon');
const limax=document.querySelector('.LImax');
const limin=document.querySelector('.LImin');
const listLI=document.querySelector('ul');

for(let i = 1;i<=5;i++){
  let paragraph=document.createElement('li')
  listLI.appendChild(paragraph)
  async function getApilist(){
  let arrynum=await fetch('https://api.dastyar.io/express/weather?lat=35.67194277&lng=51.42434403');
  let objarry=await arrynum.json()
  let apiAll=objarry[i]
  let futuredate=new Date()
  let dayfuture=persianday[futuredate.getUTCDay()+i+1];
  
  if(apiAll.weather.main==="Clear"){
    paragraph.innerHTML=`<div class="dady-LIlist"><div class="LIlist-min-max"><span class="LImin" dir="rtl">${ new Intl.NumberFormat('fa-IR').format(Math.round(apiAll.min))}° حداقل</span><span class="LImax" dir="rtl">${ new Intl.NumberFormat('fa-IR').format(Math.round(apiAll.max))}° حداکثر</span></div><div class="LIlist-icon-day"><img src="./img/image weather/sun.png" class="LIicon"/><span class="LIday">${dayfuture}</span></div></div>`
  }else if(apiAll.weather.main==="Clouds"){
    paragraph.innerHTML=`<div class="dady-LIlist"><div class="LIlist-min-max"><span class="LImin" dir="rtl">${ new Intl.NumberFormat('fa-IR').format(Math.round(apiAll.min))}° حداقل</span><span class="LImax" dir="rtl">${ new Intl.NumberFormat('fa-IR').format(Math.round(apiAll.max))}° حداکثر</span></div><div class="LIlist-icon-day"><img src="./img/image weather/cloud_sun.png" class="LIicon"/><span class="LIday">${dayfuture}</span></div></div>`
  }else if(apiAll.weather.main==="Rain"){
    paragraph.innerHTML=`<div class="dady-LIlist"><div class="LIlist-min-max"><span class="LImin" dir="rtl">${ new Intl.NumberFormat('fa-IR').format(Math.round(apiAll.min))}° حداقل</span><span class="LImax" dir="rtl">${ new Intl.NumberFormat('fa-IR').format(Math.round(apiAll.max))}° حداکثر</span></div><div class="LIlist-icon-day"><img src="./img/image weather/sun_cloud_rain.png" class="LIicon"/><span class="LIday">${dayfuture}</span></div></div>`
  }else if(apiAll.weather.main==="Snow"){
    paragraph.innerHTML=`<div class="dady-LIlist"><div class="LIlist-min-max"><span class="LImin" dir="rtl">${ new Intl.NumberFormat('fa-IR').format(Math.round(apiAll.min))}° حداقل</span><span class="LImax" dir="rtl">${ new Intl.NumberFormat('fa-IR').format(Math.round(apiAll.max))}° حداکثر</span></div><div class="LIlist-icon-day"><img src="./img/image weather/sun_cloud_snow.png" class="LIicon"/><span class="LIday">${dayfuture}</span></div></div>`
  };

  }
  getApilist()
}
const forecastlist =document.querySelector('.list-forecast')
function changebackg(){
  if(hour>7 && hour<=18){
   document.body.style.background=' linear-gradient(#0B7DA1 ,#33AADD ,#2DC8EA )';
   forecastlist.style.backgroundColor='#FFFFFF0D';
  }else{
    document.body.style.background=' linear-gradient(#08244F ,#134CB5 ,#0B42AB )';
    forecastlist.style.backgroundColor='rgba(0,16,38,.3)';
}
}
changebackg()

