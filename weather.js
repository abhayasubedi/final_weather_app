//search

let county = document.getElementById("search_input");
county.value = `Austin`;
let place = county.value;
let but = document.getElementById("search");
but.addEventListener("click", () => {
    place = county.value;
    fetchdata();
})
document.getElementById("search_input").addEventListener("keydown",(e)=>{
  if (e.key=="Enter"){
    place = county.value;
    fetchdata();
  }
})

// let submit = document.getElementById("form-submit");
// loginForm.addEventListener("submit", () => {
//   place = county.value;
//   fetchdata();
//   fetchHistory();
// });



//fetch data
function fetchdata(){
fetch(`http://localhost/weather/index.php?place=${place}`)
.then(a => a.json())
.then(data => {
  
    const condi = data.condi
    const temp = data.temp;
    const country = data.country;
    const wind = data.wind;
    const humi = data.humi;

//date
const dateElement = document.getElementById('date');
const currentDate = new Date();
dateElement.textContent = `Date: ${currentDate.toDateString()}`;

//temperature
const tempElement = document.getElementById("tem");
localStorage.setItem('temp',`${temp}`);
tempElement.textContent = `${localStorage.temp}°C`;

//country
const cityElement = document.getElementById("city");
localStorage.setItem('country',`${country}`);
cityElement.textContent = country;

//humidity
const humidityElement = document.getElementById("humidity");
localStorage.setItem('humi',`Humidity:&nbsp;&nbsp;${humi}&nbsp;%`);
humidityElement.innerHTML = `${localStorage.humi}`;

//windspeed
const windElement = document.getElementById("wind");
localStorage.setItem('wind',`Windspeed:&nbsp;&nbsp;${wind}&nbsp;m/s`);
windElement.innerHTML = `${localStorage.wind}`;

//condition
const condiElement = document.getElementById("condi");
localStorage.setItem('condi',`${condi}`);
condiElement.innerHTML = `${localStorage.condi}`;
console.log(data.icon);

//icon
const iconCode = data.icon;
let iconUrl;

if (iconCode === "01d" || iconCode === "01n") {
  iconUrl = "images used/sunny.png";
} else if (iconCode === "02d" || iconCode === "02n" || iconCode === "03d" || iconCode === "03n") {
  iconUrl = "images used/partlycloud.png";
} else if (iconCode === "04d" || iconCode === "04n") {
  iconUrl = "images used/clouds.png";
} else if (iconCode === "09d" || iconCode === "09n" || iconCode === "10d" || iconCode === "10n") {
  iconUrl = "images used/rainy.png";
} else if (iconCode === "11d" || iconCode === "11n") {
  iconUrl = "images used/rainWithLightning.png";
} else if (iconCode === "13d" || iconCode === "13n") {
  iconUrl = "images used/snowfall.png";
} else if (iconCode === "50d" || iconCode === "50n") {
  iconUrl = "images used/windy.png";
} else {
  iconUrl = "images used/rainbow.png";
}

// const condiImage = document.getElementById("condi_image");
// condiImage.src = iconUrl;
fetchHistory();
})
}

function fetchHistory(){
  let table = document.getElementById("table");
  table.innerHTML = `
    <tr class="top-head">
      <td>Name</td>
      <td>Date</td>
      <td>Temperature</td>
      <td>condition</td>
      <td>Humidity</td>
    </tr>`;
    // console.log("From history: ");
  fetch(`http://localhost/weather/history.php?place=${place}`)
  .then(a => a.json())
  .then(data => {
    console.log(data);
    data.forEach(weather => {
      console.log(weather);
      // setting the secondary weather data in the local storage
      localStorage.setItem('country-table',`${weather.country}`);
      localStorage.setItem('Date-table',`${weather.Date}`);
      localStorage.setItem('temp-table',`${weather.temp}`);
      localStorage.setItem('condi-table',`${weather.condi}`);
      localStorage.setItem('humi-table',`${weather.humi}`);

      // getting the secondary weather data from the local storage
      let country = localStorage.getItem('country-table');
      let Date = localStorage.getItem('Date-table');
      let temp = localStorage.getItem('temp-table');
      let condi = localStorage.getItem('condi-table');
      let humi = localStorage.getItem('humi-table');

      tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${country}</td>
        <td>${Date}</td>
        <td>${temp}</td>
        <td>${condi}</td>
        <td>${humi}</td>
      `;
      table.appendChild(tr);
    });
  })
}


fetchdata();