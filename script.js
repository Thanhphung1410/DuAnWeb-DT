const adressbtn = document.querySelector("#adress-form");
const adresscolse = document.querySelector("#adress-close");
// console.log(adressbtn);
adressbtn.addEventListener("click", function () {
  document.querySelector(".adress-from").style.display = "flex";
});
adresscolse.addEventListener("click", function () {
  document.querySelector(".adress-from").style.display = "none";
});
