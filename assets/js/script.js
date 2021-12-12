
// Fetch API Wallstreetbets

fetch("https://tradestie.com/api/v1/apps/reddit").then(function (response) {
	
// The API call was successful!
	return response.json();
}).then(function (data) {
	
  // This is the JSON from our response
	console.log(data);
}).catch(function (err) {
	
  // There was an error
	console.warn('Something went wrong.', err);
});