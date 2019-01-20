var btn = document.querySelector(".search-hotel-btn");
var popup = document.querySelector(".search-form");
var arrival = document.getElementById("arrival-date");
var departure = document.getElementById("departure-date");
var adults = document.getElementById("adults");
var kids = document.getElementById("kids");
popup.classList.add("modal-close")
btn.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
    popup.classList.remove("modal-error");   
});
popup.addEventListener("submit", function (evt) {
    if (!arrival.value || !departure.value || !adults.value || !kids.value) {
      evt.preventDefault();
      popup.classList.add("modal-error");
    }
  });  