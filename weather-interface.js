$(document).ready(function() {
  $('#weatherLocation').click(function(event) {
    event.preventDefault();
    let city = $('#location').val();
    $('#location').val();

    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fb76f2e360b81525ceec6aa2cea98a48`;

    request.open("GET", url, true);
    request.onreadystatechange = function() {
      console.log(this.readyState);
      console.log(this.status);
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        console.log("Can we get this far?");
        getElements(response);
      }
    }
    request.send();



    const getElements = function(response) {
      $('.show-humidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.show-temp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }
  });
});
// This comment is for my commit number 2
