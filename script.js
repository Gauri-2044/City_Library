
let likes = document.querySelectorAll(".like");
let dislikes = document.querySelectorAll(".dislike");

let borrowForm = document.querySelector(".form-borrow");
let orderForm = document.querySelector(".form-order");
let borrowBtn = document.querySelector(".borrow-btn");
let orderBtn = document.querySelector(".order-btn");

function likedBook() {
  likes.forEach((like, index) => {
    like.addEventListener("click", () => {
      like.classList.add("d-none");
      if (dislikes[index]) {
        dislikes[index].classList.remove("d-none");
      }
    });

    dislikes[index]?.addEventListener("dblclick", () => {
      dislikes[index].classList.add("d-none");
      like.classList.remove("d-none");
    });
  });
}

function clickButton() {
  orderBtn.addEventListener("click", () => {
    orderForm.classList.remove("d-none");
    borrowForm.classList.add("d-none");
  });
  borrowBtn.addEventListener("click", () => {
    borrowForm.classList.remove("d-none");
    orderForm.classList.add("d-none");
  });
}

likedBook();
clickButton();
   
