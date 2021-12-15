var openmodal = document.querySelectorAll('.modal-open')
for (var i = 0; i < openmodal.length; i++) {
  openmodal[i].addEventListener('click', function(event){
   event.preventDefault()
   toggleModal()
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
// const url = 'https://tradestie.com/api/v1/apps/reddit';


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