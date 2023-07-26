let btn=document.querySelector('search');
let weatherApi='7190b0e5f8036fd3dd94da3e7ee4c35e';
let currentCity='';
let previousCity='';
let search=document.querySelector('#search');
let city=document.querySelector('city');
let temp1=document.querySelector('.temp1');
let icon1=document.querySelector('.icon1');
// var weatherConditions = (city) => {
search.addEventListener('click',function(){
    const apiKey='7190b0e5f8036fd3dd94da3e7ee4c35e';
    let city=document.querySelector('#city');

    if (city.value !=='') {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid='+apiKey)
    .then(response => {
      return response.json()
        }) .then(data => {
            console.log(data);
         let temp=data.main.temp;
        temp1.innerHTML=temp;
        let icon=data.weather[0].icon;
        let weatherIcon = "https://openweathermap.org/img/wn/"+icon+ "@2x.png";
        icon1.src=weatherIcon;
        let lat=data.coord.lat;
        let lon=data.coord.lon;
       fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&appid='+apiKey)
       .then(response => {
        return response.json()
    })  .then(data => {
        console.log(data);
        for (let i = 0; i < 5; i++) {
            let temp=data.list[i].main.temp;
            let tempDiv=document.querySelector('.temp'+(i+1));
        tempDiv.textContent=temp;
        let icon=data.list[i].weather[0].icon;
        let iconDiv=document.querySelector('.icon'+(i+1));
            iconDiv.src="https://openweathermap.org/img/wn/"+icon+".png";
          }

        })
    })
    }



})
    


