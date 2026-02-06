const adressbtn = document.querySelector("#adress-form");
const adresscolse = document.querySelector("#adress-close");
let index = 0;
// console.log(adressbtn);
adressbtn.addEventListener("click", function () {
  document.querySelector(".adress-from").style.display = "flex";
});
adresscolse.addEventListener("click", function () {
  document.querySelector(".adress-from").style.display = "none";
});
// slider
const rightbtn = document.querySelector(".fa-chevron-right.next");
const leftbtn = document.querySelector(".fa-chevron-left.prev");
rightbtn.addEventListener("click", function () {
  index = index + 1;
  if (index > tmp.length - 1) {
    index = 0;
  }
  document.querySelector(".slider-content-left-top").style.right =
    index * 100 + "%";
});
leftbtn.addEventListener("click", function () {
  index = index - 1;
  if (index <= 0) {
    index = tmp.length - 1;
  }
  document.querySelector(".slider-content-left-top").style.right =
    index * 100 + "%";
});
const tmp = document.querySelectorAll(".slider-content-left-top img");
console.log(tmp.length);
// login
const loginBtn = document.querySelector("#login-btn");
const loginForm = document.querySelector(".login-form");
const loginClose = document.querySelector("#login-close");

loginBtn.addEventListener("click", function () {
  loginForm.style.display = "flex";
});

loginClose.addEventListener("click", function () {
  loginForm.style.display = "none";
});

document.querySelector("#login-submit").addEventListener("click", function () {
  const user = document.querySelector("#username").value;
  const pass = document.querySelector("#password").value;
  const msg = document.querySelector("#login-msg");

  if (user === "admin" && pass === "123456") {
    msg.style.color = "green";
    msg.innerText = "Đăng nhập thành công";
    setTimeout(() => {
      loginForm.style.display = "none";
    }, 800);
  } else {
    msg.style.color = "red";
    msg.innerText = "Sai tài khoản hoặc mật khẩu";
  }
});
// slider 1
const imgNumberLi = document.querySelectorAll(".slider-content-left-bottom li");

imgNumberLi.forEach(function (img, index) {
  img.addEventListener("click", function () {
    removeactive();
    document.querySelector(".slider-content-left-top").style.right =
      index * 100 + "%";
    img.classList.add("active");
  });
});

function removeactive() {
  let imgactive = document.querySelector(".active");
  if (imgactive) {
    imgactive.classList.remove("active");
  }
}
// silder 2
// slider2
function imgAuto() {
  index = index + 1;
  if (index > tmp.length - 1) {
    index = 0;
  }
  removeactive();
  document.querySelector(".slider-content-left-top").style.right =
    index * 100 + "%";
  tmp[index].classList.add("active");
  // console.log(index)
}

setInterval(imgAuto, 5000);
