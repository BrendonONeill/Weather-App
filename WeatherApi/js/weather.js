

const apiKey = "api here"
let name  = "London"




async function weatherapi()
{
    let capital = capitalInput()
    let web1 = "https://api.openweathermap.org/geo/1.0/direct?q="+capital+"&limit=1&appid="+apiKey
    const response1 = await fetch(web1)
    const locationData = await response1.json()
    let lat = locationData[0].lat.toFixed(4)
    let lon = locationData[0].lon.toFixed(4)
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
        
        x++
    }
    console.log(webData)
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
        weatherImg = "rain.png";
      break;
    case "Clear":
        weatherImg = "sun.png";
      break;
    case "Few clouds":
        weatherImg = "fewClouds.png";
      break;
    case "Scattered clouds":
        weatherImg = "scatteredClouds.png";
      break;
    case "Clouds":
        weatherImg = "brokenClouds.png";
      break;
    case "Shower rain":
        weatherImg = "shower.png";
      break;
    case "Thunderstorm":
        weatherImg = "thunder.png";
        break;
    case "Snow":
        weatherImg= "snow.png";
        break;
    case "Mist":
        weatherImg = "mist.png";
        break;
  }
  return weatherImg;
}
document.getElementById("submit").addEventListener("click", weatherapi);


