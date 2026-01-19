const btns = document.querySelectorAll(".show-hide-btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (element) => {
    const parentEl = element.currentTarget.parentElement.parentElement;
    parentEl.classList.toggle("show");

    const article = document.querySelectorAll(".main-qa-container");
    article.forEach((el) => {
      if (el !== parentEl) {
        el.classList.remove("show");

        const prevBtn = el.querySelector(".btn-img");
        prevBtn.src = "images/icon-plus.svg";
      }
    });
    if (parentEl.classList.contains("show")) {
      btn.querySelector(".btn-img").src = "images/icon-minus.svg";
    } else {
      btn.querySelector(".btn-img").src = "images/icon-plus.svg";
    }
  });
});
