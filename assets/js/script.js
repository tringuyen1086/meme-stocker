var openmodal = document.querySelectorAll('.modal-open')
for (var i = 0; i < openmodal.length; i++) {
  openmodal[i].addEventListener('click', function(event){
   event.preventDefault()
   toggleModal()
   fmpApi()
  })
}

const overlay = document.querySelector('.modal-overlay')
overlay.addEventListener('click', toggleModal)

var closemodal = document.querySelectorAll('.modal-close')
for (var i = 0; i < closemodal.length; i++) {
  closemodal[i].addEventListener('click', toggleModal)
}

document.onkeydown = function(evt) {
  evt = evt || window.event
  var isEscape = false
  if ("key" in evt) {
   isEscape = (evt.key === "Escape" || evt.key === "Esc")
  } else {
   isEscape = (evt.keyCode === 27)
  }
  if (isEscape && document.body.classList.contains('modal-active')) {
   toggleModal()
  }
};


function toggleModal () {
  const body = document.querySelector('body')
  const modal = document.querySelector('.modal')
  modal.classList.toggle('opacity-0')
  modal.classList.toggle('pointer-events-none')
  body.classList.toggle('modal-active')
}

// Wallstreetbets API
const url = 'https://tradestie.com/api/v1/apps/reddit';

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

// FMP API call
function fmpApi(){
var ticker = document.getElementById('tickersymbol').value;
var nething = "AAPL";
var requestUrl = 'https://financialmodelingprep.com/api/v3/profile/'+ ticker +'?apikey=203f41c2d13b0a556884a3a115113e59';
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
    console.log("$" + stonkData[0].price)
    console.log(stonkData[0].website)
    var header =document.getElementById("modal-header").innerHTML = stonkData[0].companyName
    const objectArray = Object.entries(stonkData[0]);
    
    // objectArray.forEach(([key, value]) => {
    //   console.log(key); // 'one'
    //   console.log(value); // 1
    // });
    var modalBody = document.getElementById("modal-body")
    const iterator = objectArray.values();
    for (x=0;x<10;x++){
      console.log(objectArray[x])
      var p = document.createElement('p');
      p.innerHTML = objectArray[x];
      modalBody.appendChild(p)
    }
    
  });
}
