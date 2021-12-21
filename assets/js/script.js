// open modal for any ticker symbol given
function openModal(tickerSymbol) {
  fmpApi(tickerSymbol);
}
var openmodal = document.querySelector('.modal-open')
openmodal.addEventListener('click', function(event){
  event.preventDefault();
  // call open modal with symbol from the search input textbox
  var text = document.getElementById('tickersymbol').value.trim()
    openModal(text);
})
const overlay = document.querySelector('.modal-overlay');
overlay.addEventListener('click', toggleModal);
var closemodal = document.querySelectorAll('.modal-close');
for (var i = 0; i < closemodal.length; i++) {
  closemodal[i].addEventListener('click', toggleModal);
}
document.onkeydown = function(evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
   isEscape = (evt.key === "Escape" || evt.key === "Esc");
  } else {
   isEscape = (evt.keyCode === 27);
  }
  if (isEscape && document.body.classList.contains('modal-active')) {
   toggleModal();
  }
};
function toggleModal () {
  const body = document.querySelector('body');
  const modal = document.querySelector('.modal');
  modal.classList.toggle('opacity-0');
  modal.classList.toggle('pointer-events-none');
  body.classList.toggle('modal-active');
  clearModal();
}
// Wallstreetbets API
function redditTopTen () {
  const url = 'https://cors-proxy-blah.herokuapp.com/get-json/?url=http://tradestie.com/api/v1/apps/reddit';
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
    mainContainer.innerHTML = "";
    for (var i = 0; i < 10; i++) {
      // this is required because of javascript callback insanity
      let sym = sortdata[i].ticker;
      // turn this into an anchor for clicky experience
      var div = document.createElement("a");    
      div.href = "";
      div.onclick = (ev) => {
        // dont actually do anything but run openModal using the ticker symobol clicked on
        ev.preventDefault();
        openModal(sym);
      }
      div.innerHTML = sym;
      
      var div2 = document.createElement("div");   
      div2.innerHTML = sortdata[i].sentiment_score;
      mainContainer.appendChild(div);
      mainContainer.appendChild(div2);
    }
  }
}
// FMP API call 
function fmpApi(tickerSymbol){
  // added this so that we can pass in the ticker symbol instead of only using what's in the search input textbox
  clearModal();
  toggleModal();
  var modalBody = document.getElementById("modal-body");
  if (tickerSymbol.length > 0) {
    var requestUrl = 'https://financialmodelingprep.com/api/v3/profile/'+ tickerSymbol +'?apikey=203f41c2d13b0a556884a3a115113e59';
  fetch(requestUrl)
    .then(function (response) { 
      return response.json(); // response.json being chained to the then below
    })
    .then(function (stonkData) {
      console.log('Your stonk');
      console.log(stonkData);
      if (stonkData.length > 0) {
          document.getElementById("modal-header").innerHTML = stonkData[0].companyName;
        const objectArray = Object.entries(stonkData[0]);
        for (x = 0; x < 10; x ++) {
          console.log(objectArray[x]);
          var label = document.createElement('div');
          var stonkValue = document.createElement('div');
          label.innerHTML = objectArray[x][0];
          stonkValue.innerHTML = objectArray[x][1];
          modalBody.appendChild(label);
          modalBody.appendChild(stonkValue);
        }
        storeTickers();
        }
        else {
          invalidTickerSymbol(modalBody);
        }
    });
  } 
  else {
    invalidTickerSymbol(modalBody);
  }
}
function invalidTickerSymbol(modalBody) {
  var label = document.createElement('div');
    label.innerHTML = "Invalid Ticker Symbol";
    modalBody.appendChild(label);
    document.getElementById('tickersymbol').value = "";
}
// Clear Modal
function clearModal() {
  document.getElementById("modal-body").innerHTML = "";
  document.getElementById("modal-header").innerHTML = "";
}
// store search to local storage 
function storeTickers(){
 var symbol = document.getElementById('tickersymbol').value;
 window.localStorage.setItem('ticker', symbol);
}

function loadLastTicker() {
  let lastTicker = localStorage.getItem("ticker");
  if (lastTicker) {
    document.getElementById('tickersymbol').value = lastTicker;
  }
}

loadLastTicker();
redditTopTen();
setInterval(redditTopTen, 1000 * 60 * 15); // run this auto-refresh every 15 minutes