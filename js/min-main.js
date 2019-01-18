var btn=document.querySelector(".search-hotel-btn");var popup=document.querySelector(".search-form")
popup.classList.add("modal-close")
btn.addEventListener("click",function(evt){evt.preventDefault();popup.classList.toggle("modal-show")})