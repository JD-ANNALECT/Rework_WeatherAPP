const city = document.getElementById('city')
const btn = document.getElementById('btn')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b0bb3c72f8msh62d549f120a8e7ap10c60cjsna5e0d8e672b9',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
		.then(response => response.json())
		.then(data => {
			document.getElementById('title').innerHTML = '<h4> Data Loaded Sucessfully!!</h4>'
			document.getElementById('sub').innerHTML = `Data For ${city}`
			document.getElementById('temp').innerHTML = `Temp : ${data.temp} &#8451;`
			document.getElementById('min_temp').innerHTML = `Min Temperature is : ${data.min_temp} &#8451;`
			document.getElementById('max_temp').innerHTML = `Max Temperature is : ${data.max_temp} &#8451;`
			document.getElementById('feels_like').innerHTML = `Feels Like : ${data.feels_like} &#8451;`
		})
}

btn.onclick = () => {
	getWeather(city.value)
}

city.onclick = () => {
	city.value = ' '
	document.getElementById('title').innerHTML = '<h4>Search For Data....</h4>'
	document.getElementById('sub').innerHTML = ''
	document.getElementById('temp').innerHTML = ''
	document.getElementById('min_temp').innerHTML = ''
	document.getElementById('max_temp').innerHTML = ''
	document.getElementById('feels_like').innerHTML = ''
}


