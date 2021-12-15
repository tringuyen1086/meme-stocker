
// Wallstreetbets API
// const url = 'https://tradestie.com/api/v1/apps/reddit';

<<<<<<< HEAD

// fetch(url)

//   .then(function (response) {
//     return response.json();
//   })

//   .then(function (data) {
//     appenddata(data);
//   })

//   .catch(function (error) {
//     console.log(error);
//   });

// function appenddata(data) {
//   var mainContainer = document.getElementById("mstocks");
//   for (var i = 0; i < 10; i++) {
//     var div = document.createElement("div");    
//     div.innerHTML = data[i].ticker + data[i].sentiment_score;
//     mainContainer.appendChild(div);
//   }
// }

function sortList() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("mstocks");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("<ul>");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      // start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should
      switch place with the current item: */
      
      if (Number(b[i].innerHTML) > Number(b[i + 1].innerHTML)) {
        /* if next item is numerically
        lower than current item, mark as a switch
        and break the loop: */
        shouldSwitch = true;
        break;
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark the switch as done: */
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
      }  switching = true;
    }
  }
}



// market stack api 

var nething = "AAPL";

var ticker = document.getElementById('tickersymbol').value;

var requestUrl = 'https://financialmodelingprep.com/api/v3/profile/MSFT?apikey=203f41c2d13b0a556884a3a115113e59';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (stonkData) {
    console.log('Your stonk');
    console.log(stonkData);
    console.log(stonkData[0].companyName);
    console.log(stonkData[0].ceo);
    console.log(stonkData[0].symbol)
    // console.log(stonkData.data[0].symbol);
  });

  console.log(ticker)
=======
// Make request to URL
fetch(url)

  .then(function (response) {
    return response.json();
})
  // Call appenddata function
  .then(function (data) {
    appenddata(data);
  })

  // Catch any errors that may occur
  .catch(function (error) {
    console.log(error);
  });

// Sort data by Sentiment Score
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

  // Dynamically fill divs with JSON data
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
// Add Yahoo API link
function yahoolink() {
  document.getElementById("mstocks").innerHTML = (url)}
>>>>>>> e3f8374805a0512543870fc5623cdfb96d2464e0
