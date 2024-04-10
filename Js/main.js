//Navbar toggle
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', function () {
        menuToggle.classList.toggle('active');
        navList.classList.toggle('active');
    });
});

//Search trip
document.addEventListener("DOMContentLoaded", function () {
    var searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", searchRides);
  });
  
  // function for search
  function searchRides() {
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var date = document.getElementById("date").value;
  
    // Text validations
    if (from === "") {
      alert("Please enter Starting location.");
      return;
    }
  
    if (to === "") {
      alert("Please enter destination.");
      return;
    }
  
    // Date validation
    var currentDate = new Date();
    var selectedDate = new Date(date);
  
    if (selectedDate < currentDate) {
      alert("Please choose a future date.");
      return;
    }
  
    // Dummy data for results
    var results = [
      {
        name: "John",
        time: "9:00 AM",
        cost: "$10",
        contact: "123-456-7890",
        image: "img/male.jpg",
      },
      {
        name: "Sarah",
        time: "10:30 AM",
        cost: "$8",
        contact: "987-654-3210",
        image: "img/female.jpg",
      },
      {
        name: "Aman",
        time: "11:30 AM",
        cost: "$15",
        contact: "935-656-9812",
        image: "img/male.jpg",
      },
      {
        name: "Ashley",
        time: "3:30 PM",
        cost: "$30",
        contact: "514-853-3419",
        image: "img/female.jpg",
      },
      {
        name: "Mat",
        time: "5:30 PM",
        cost: "$25",
        contact: "437-081-0361",
        image: "img/male.jpg",
      },
      {
        name: "Kim",
        time: "7:30 PM",
        cost: "$22",
        contact: "437-119-0618",
        image: "img/female.jpg",
      },
    ];
  
    // Clear previous results
    var resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";
  
    for (var i = 0; i < results.length; i++) {
      var resultBox = document.createElement("div");
      resultBox.className = "result-box";
  
      var avatarImg = document.createElement("img");
      avatarImg.src = results[i].image;
      avatarImg.alt = results[i].name;
      resultBox.appendChild(avatarImg);
  
      var detailsText = document.createElement("p");
      detailsText.textContent = `${results[i].name} - ${results[i].time}`;
      resultBox.appendChild(detailsText);
  
      var costText = document.createElement("p");
      costText.textContent = `Cost: ${results[i].cost}`;
      resultBox.appendChild(costText);
  
      var contactText = document.createElement("p");
      contactText.textContent = `Contact: ${results[i].contact}`;
      resultBox.appendChild(contactText);
  
      resultsContainer.appendChild(resultBox);
    }
  }
  