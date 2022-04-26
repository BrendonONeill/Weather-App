

const apiKey = "API KEY"
let name  = "London"

function yourLocation()
{

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  lat =  position.coords.latitude.toFixed(4)
  lon =  position.coords.longitude.toFixed(4)
  return locationWeather(lon, lat)

}


async function weatherapi()
{
    let capital = capitalInput()
    let web1 = "https://api.openweathermap.org/geo/1.0/direct?q="+capital+"&limit=1&appid="+apiKey
    const response1 = await fetch(web1)
    const locationData = await response1.json()
    let lat = locationData[0].lat.toFixed(4)
    let lon = locationData[0].lon.toFixed(4)
    return locationWeather(lon , lat)
}



function capitalInput()
{
    const city = document.getElementById("city").value
    return city
}

function dateGetter(x)
{
const d = new Date();
let day = (x +d.getDay());

if(day > 6)
{
    day = day - 7
}
let weekDay;
switch (day) {
    case 0:
        weekDay = "Sunday";
      break;
    case 1:
        weekDay = "Monday";
      break;
    case 2:
        weekDay = "Tuesday";
      break;
    case 3:
        weekDay = "Wednesday";
      break;
    case 4:
        weekDay = "Thursday";
      break;
    case 5:
        weekDay = "Friday";
      break;
    case 6:
        weekDay = "Saturday";
  }
  return weekDay;
}


function weatherPicker(weatherType)
{
    let weatherImg;
switch (weatherType) {
    case "Rain":
        weatherImg = "../images/rain.png";
      break;
    case "Clear":
        weatherImg = "../images/sun.png";
      break;
    case "Few clouds":
        weatherImg = "../images/fewClouds.png";
      break;
    case "Scattered clouds":
        weatherImg = "../images/scatteredClouds.png";
      break;
    case "Clouds":
        weatherImg = "../images/brokenClouds.png";
      break;
    case "Shower rain":
        weatherImg = "../images/shower.png";
      break;
    case "Thunderstorm":
        weatherImg = "../images/thunder.png";
        break;
    case "Snow":
        weatherImg= "../images/snow.png";
        break;
    case "Mist":
        weatherImg = "../images/mist.png";
        break;
  }
  return weatherImg;
}

async function locationWeather(lon, lat)
{
  let web2 = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&cnt=5&appid="+apiKey
    const response = await fetch(web2)
    const webData = await response.json()
    document.getElementById("n").innerHTML = webData.city.name
    x = 0
    while(x < 5 )
    {
        console.log(x)
        var newDate = dateGetter(x)
        document.getElementById("d"+x.toString()).innerHTML = newDate
        let weatherType = webData.list[x].weather[0].main
        document.getElementById("w"+x.toString()).innerHTML = weatherType
        var  newWeatherImg = weatherPicker(weatherType)
        let convert = webData.list[x].main.temp
        document.getElementById("t"+x.toString()).innerHTML = Math.round(convert - 273.15)+ "&#8451;"
        console.log(newWeatherImg)
        document.getElementById("i"+x.toString()).src = newWeatherImg

        if(x == 0)
        {
           bgColour(weatherType)
        }
        
        x++
    }
    console.log(webData)
}


function bgColour(weatherType)
{

switch (weatherType) {
    case "Rain":
      document.getElementById("mainContainer").style.background = "linear-gradient(0deg, rgb(74, 101, 131) 0%, rgb(60, 83, 105) 100%)";
      document.getElementById("weather").style.backgroundImage = "url('https://images.unsplash.com/photo-1428592953211-077101b2021b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')";
      break;
    case "Clear":
      document.getElementById("mainContainer").style.background = "linear-gradient(0deg, rgb(155, 178, 203) 0%, rgb(240, 189, 68) 100%)";
      document.getElementById("weather").style.backgroundImage = "url('https://images.unsplash.com/photo-1620355058000-6d5d21504db3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')";
      break;
    case "Few clouds":
      document.getElementById("mainContainer").style.background = "linear-gradient(0deg, rgb(137, 198, 217) 0%, rgb(81, 178, 213) 100%)";
      document.getElementById("weather").style.backgroundImage = "url('https://images.unsplash.com/photo-1438382458652-54431bf59e01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGZldyUyMGNsb3Vkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')";
      break;
    case "Scattered clouds":
      document.getElementById("mainContainer").style.background = "linear-gradient(0deg, rgb(155, 178, 203) 0%, rgba(153, 179, 204,1) 100%)";
      document.getElementById("weather").style.backgroundImage = "url('https://images.unsplash.com/photo-1442323794357-25b2ec110967?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGZldyUyMGNsb3Vkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')";
      break;
    case "Clouds":
      document.getElementById("mainContainer").style.background = "linear-gradient(0deg, rgb(155, 178, 203) 0%, rgba(153, 179, 204,1) 100%)";
      document.getElementById("weather").style.backgroundImage = "url('https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNsb3VkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')";
      break;
    case "Shower rain":
      document.getElementById("mainContainer").style.background = "linear-gradient(0deg, rgb(99, 147, 164) 0%, rgb(98, 148, 154) 100%)";
      document.getElementById("weather").style.backgroundImage = "url('https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvd2VyJTIwcmFpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')";
      break;
    case "Thunderstorm":
      document.getElementById("mainContainer").style.background = "linear-gradient(0deg, rgb(61, 35, 120) 0%, rgb(39, 34, 60) 100%)";
      document.getElementById("weather").style.backgroundImage = "url('https://images.unsplash.com/photo-1508697014387-db70aad34f4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGh1bmRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')";
        break;
    case "Snow":
      document.getElementById("mainContainer").style.background = "linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(236, 255, 253) 100%)";
      document.getElementById("weather").style.backgroundImage = "url('https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNub3d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')";
        break;
    case "Mist":
      document.getElementById("mainContainer").style.background = "linear-gradient(0deg, rgb(191, 209, 217) 0%, rgb(165, 192, 194) 100%)";
      document.getElementById("weather").style.backgroundImage = "url('https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWlzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')";
        break;
  }
  return
}

document.getElementById("submit").addEventListener("click", weatherapi);
document.getElementById("yourLocation").addEventListener("click", yourLocation);
yourLocation()


