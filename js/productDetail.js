const prevBtn = document.querySelector(".carousel .btn-prev");
const nextBtn = document.querySelector(".carousel .btn-next");
const carouselSlider = document.querySelector(".carousel .carousel__img-list");
const carouselList = document.querySelectorAll(
  ".carousel .carousel__img-list img"
);
const carouselFeature = document.querySelector(".carousel__img-feature");

const carouselOrderSign = document.querySelectorAll(
  ".carousel__img-order span"
);

// Get the width of one specific img
const firstImg = carouselSlider.querySelectorAll(".carousel__img")[0];
const imgWidth = firstImg.width;

const firstIndex = 0;
const lastIndex = carouselList.length - 1;

let currentSign = 0;
const firstSign = 0;
const lastSign = lastIndex - 2;

let current = 1;

carouselSlider.style.transform = `translateX(${-imgWidth * current})`;

console.log(carouselOrderSign);

nextBtn.addEventListener("click", () => {
  current = current + 1;
  currentSign = currentSign + 1;

  carouselOrderSign.forEach((orderSpan, idx) => {
    if (idx == currentSign) {
      orderSpan.classList.add("highlight");
    } else {
      orderSpan.classList.remove("highlight");
    }
  });

  carouselSlider.style.transition = "transform .4s ease-in-out";
  const distance = -1 * imgWidth * current;
  carouselSlider.style.transform = `translateX(${distance}px)`;
});

prevBtn.addEventListener("click", () => {
  current = current - 1;
  currentSign = currentSign - 1;

  carouselOrderSign.forEach((orderSpan, idx) => {
    if (idx == currentSign) {
      orderSpan.classList.add("highlight");
    } else {
      orderSpan.classList.remove("highlight");
    }
  });

  console.log("current: ", current);
  carouselSlider.style.transition = "transform .4s ease-in-out";
  const distance = -1 * imgWidth * current;
  carouselSlider.style.transform = `translateX(${distance}px)`;
});

carouselSlider.addEventListener("transitionend", () => {
  const currentId = carouselList[current].getAttribute("id");
  if (currentId == "lastClone") {
    currentSign = lastSign;
    carouselOrderSign.forEach((orderSpan, idx) => {
      if (idx == currentSign) {
        orderSpan.classList.add("highlight");
      } else {
        orderSpan.classList.remove("highlight");
      }
    });

    carouselSlider.style.transition = "none";
    current = lastIndex - 1;
    const distance = -1 * imgWidth * current;
    carouselSlider.style.transform = `translateX(${distance}px)`;
  }
  if (currentId == "firstClone") {
    currentSign = firstSign;
    carouselOrderSign.forEach((orderSpan, idx) => {
      if (idx == currentSign) {
        orderSpan.classList.add("highlight");
      } else {
        orderSpan.classList.remove("highlight");
      }
    });

    carouselSlider.style.transition = "none";
    current = lastIndex - current + 1;
    const distance = -1 * imgWidth * current;
    carouselSlider.style.transform = `translateX(${distance}px)`;
  }
});

carouselFeature.style.overflowX = "hidden";
