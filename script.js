const adressbtn = document.querySelector("#adress-form");
const adresscolse = document.querySelector("#adress-close");
// console.log(adressbtn);
adressbtn.addEventListener("click", function () {
  document.querySelector(".adress-from").style.display = "flex";
});
adresscolse.addEventListener("click", function () {
  document.querySelector(".adress-from").style.display = "none";
});
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
