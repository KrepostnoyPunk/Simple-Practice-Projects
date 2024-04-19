const weatherIcon=document.querySelector('.weather-icon')
const searchValue=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');
const APIkey='dbc0615db3857f6302e156cf9b2baa75';
const APIurl='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';


async function checkWeather(city){
    const response=await fetch(APIurl + city + `&appid=${APIkey}`);
    if(response.status==404){
        document.querySelector('.error').style.display='block'
        document.querySelector('.weather').style.display='none';
    } else{
        let data=await response.json()
    // console.log(data);

        document.querySelector('.location').innerHTML=data.name;
        document.querySelector('.temperature').innerHTML=data.main.temp + '°C';
        document.querySelector('.humidity').innerHTML=data.main.humidity + '%';
        document.querySelector('.wind').innerHTML=data.wind.speed + 'm/s';

        if(data.weather[0].main=='Rain'){
            weatherIcon.src='images/rain.png'
        } else if(data.weather[0].main=='Clouds'){
            weatherIcon.src='images/clouds.png'
        } else if(data.weather[0].main=='Clear'){
            weatherIcon.src='images/clear.png'
        } else if(data.weather[0].main=='Drizzle'){
            weatherIcon.src='images/drizzle.png'
        } else if(data.weather[0].main=='Snow'){
            weatherIcon.src='images/snow.png'
        } else if(data.weather[0].main=='Mist'){
            weatherIcon.src='images/mist.png'
        }

        document.querySelector('.weather').style.display='block';
        document.querySelector('.error').style.display='none'
    }
}

searchValue.addEventListener('keyup', (event)=>{
    if(event.code==='Enter'){
        checkWeather(searchValue.value)
    }
})

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchValue.value)
})