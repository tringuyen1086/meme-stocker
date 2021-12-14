
// Wallstreetbets API
const url = 'https://tradestie.com/api/v1/apps/reddit';


fetch(url)

  .then(function (response) {
    return response.json();
  })

  /*.then(function (data) {
    sortList(data);
  })*/

  /*.then(function (data) {
    console.log(data)
  })*/

  .then(function (data) {
    appenddata(data);
  })

  .catch(function (error) {
    console.log(error);
  });

/* function sortList() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("mstocks");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: 
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsById("<mstocks>");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      // start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should
      switch place with the current item: 
      
      if (Number(b[i].innerHTML) > Number(b[i + 1].innerHTML)) {
        /* if next item is numerically
        lower than current item, mark as a switch
        and break the loop: 
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: 
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true; 
    }
  }
}*/

function appenddata(data) {
  var mainContainer = document.getElementById("mstocks");
  for (var i = 0; i < 10; i++) {
    var div = document.createElement("div");    
    div.innerHTML = data[i].ticker + data[i].sentiment_score;
    mainContainer.appendChild(div);
  }
}