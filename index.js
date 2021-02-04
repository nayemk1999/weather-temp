const inputLocation = document.getElementById("inputLocation");
const searchBtn = document.getElementById("searchBtn");
const temp = document.getElementById("temp");
const locationName = document.getElementById("locationName");
const desp = document.getElementById("desp");


searchBtn.addEventListener("click", function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputLocation.value+'&appid=4b15203144c83135f278cd7862eb4beb')
    .then(response => response.json())
    .then(data => {
        const nameValue = data['name'];
        const descriptionValue = data['weather'][0]['description'];
        const tempValue = data['clouds']['all'];
        locationName.innerHTML = nameValue;
        temp.innerHTML = tempValue +  '° C';
        desp.innerHTML = descriptionValue;

    })
    .catch(error => alert("Wrong City ! Please try again."))
})