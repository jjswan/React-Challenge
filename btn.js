const btn = document.querySelector(".plus-btn");

function plus(){
  btn.innerText = parseInt(btn.innerText) + 1;
}

btn.addEventListener("click", plus);