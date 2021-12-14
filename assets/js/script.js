
// Wallstreetbets API
const url = 'https://tradestie.com/api/v1/apps/reddit';


fetch(url)

  .then(function (response) {
    return response.json();
})

  .then(function (data) {
    appenddata(data);
  })

  .catch(function (error) {
    console.log(error);
  });

function appenddata(data) {
  let sortdata = data.sort((firstEl, secondEl) => {
    if (firstEl.sentiment_score > secondEl.sentiment_score) {
        return -1;
    } else if (firstEl.sentiment_score < secondEl.sentiment_score) {
        return 1;
    } else {
        return 0;
    }
});

  var mainContainer = document.getElementById("mstocks");
  for (var i = 0; i < 10; i++) {
    var div = document.createElement("div");    
    div.innerHTML = sortdata[i].ticker
    var div2 = document.createElement("div");   
    div2.innerHTML = sortdata[i].sentiment_score;
    mainContainer.appendChild(div);
    mainContainer.appendChild(div2);
  }
}