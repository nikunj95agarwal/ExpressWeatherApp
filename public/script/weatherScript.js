const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

const getInfo = async (event) => {
  event.preventDefault();
  if (searchInput.value === '') {
    cityName.innerText = "WEATHER";
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=a3d179677347c576b3674b4cc3cba3cd`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
// const cloud = <i class="fa-solid fa-cloud"></i>
      if (data.cod === 200) {
        temperature.innerText = `Temperature: ${((data.main.temp)/10).toFixed(2)} °C`;
        cityName.innerText = `${data.name} `;
      } else {
        // Handle API errors
        cityName.innerText = "WEATHER";
        temperature.innerText = "";
      }
    } catch (error) {
      // Handle fetch or parsing errors
      console.error("Error:", error);
      cityName.innerText = "WEATHER";
      temperature.innerText = "";
    }
  }
}

// Event listener for the search button
searchButton.addEventListener('click', getInfo);
