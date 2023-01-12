// property card slider

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// end of property card slider

// menu show and hide

var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style;
  navLinks.style.right = "-20rem";
}

// slider

const btnContainer1 = document.querySelector("#toggle_btn-container1");
const viewMoreBtn1 = document.querySelector("#viewMore1");
const viewLessBtn1 = document.querySelector("#viewLess1");

const propertyList1 = document.querySelector("#propertiesList1");

function expandHeight() {
  propertyList1.style.cssText =
    "height: unset; overflow-x: unset; overflow-y: unset; row-gap: 2rem; margin-bottom: 8rem";

  viewMoreBtn1.style.display = "none";

  viewLessBtn1.style.display = "unset";

  btnContainer1.style.cssText =
    "margin: 0; justify-content: center; bottom: -6.5rem";
}

function shrinkHeight() {
  propertyList1.style.cssText =
    "height: 61rem; overflow-y: hidden; overflow-x: hidden; row-gap: 15rem background-color: red; color: red";

  viewLessBtn1.style.display = "none";

  viewMoreBtn1.style.display = "block";

  btnContainer1.style.cssText =
    "margin: 0; justify-content: center; bottom: 1rem";
}

// 2
const btnContainer2 = document.querySelector("#toggle_btn-container2");
const viewMoreBtn2 = document.querySelector("#viewMore2");
const viewLessBtn2 = document.querySelector("#viewLess2");

const propertyList2 = document.querySelector("#propertiesList2");

function expandHeight2() {
  propertyList2.style.cssText =
    "height: unset; overflow-x: unset; overflow-y: unset; row-gap: 2rem; margin-bottom: 8rem";

  viewMoreBtn2.style.display = "none";

  viewLessBtn2.style.display = "unset";

  btnContainer2.style.cssText =
    "margin: 0; justify-content: center; bottom: -6.5rem";
}

function shrinkHeight2() {
  propertyList2.style.cssText =
    "height: 61rem; overflow-y: hidden; overflow-x: hidden; row-gap: 15rem background-color: red; color: red";

  viewLessBtn2.style.display = "none";

  viewMoreBtn2.style.display = "block";

  btnContainer2.style.cssText =
    "margin: 0; justify-content: center; bottom: 1rem";
}

// 3
const btnContainer3 = document.querySelector("#toggle_btn-container3");
const viewMoreBtn3 = document.querySelector("#viewMore3");
const viewLessBtn3 = document.querySelector("#viewLess3");

const propertyList3 = document.querySelector("#propertiesList3");

function expandHeight3() {
  propertyList3.style.cssText =
    "height: unset; overflow-x: unset; overflow-y: unset; row-gap: 2rem; margin-bottom: 8rem";

  viewMoreBtn3.style.display = "none";

  viewLessBtn3.style.display = "unset";

  btnContainer3.style.cssText =
    "margin: 0; justify-content: center; bottom: -6.5rem";
}

function shrinkHeight3() {
  propertyList3.style.cssText =
    "height: 61rem; overflow-y: hidden; overflow-x: hidden; row-gap: 15rem background-color: red; color: red";

  viewLessBtn3.style.display = "none";

  viewMoreBtn3.style.display = "block";

  btnContainer3.style.cssText =
    "margin: 0; justify-content: center; bottom: 1rem";
}

// 4
const btnContainer4 = document.querySelector("#toggle_btn-container4");
const viewMoreBtn4 = document.querySelector("#viewMore4");
const viewLessBtn4 = document.querySelector("#viewLess4");

const propertyList4 = document.querySelector("#propertiesList4");

function expandHeight4() {
  propertyList4.style.cssText =
    "height: unset; overflow-x: unset; overflow-y: unset; row-gap: 2rem; margin-bottom: 8rem";

  viewMoreBtn4.style.display = "none";

  viewLessBtn4.style.display = "unset";

  btnContainer4.style.cssText =
    "margin: 0; justify-content: center; bottom: -6.5rem";
}

function shrinkHeight4() {
  propertyList4.style.cssText =
    "height: 61rem; overflow-y: hidden; overflow-x: hidden; row-gap: 15rem background-color: red; color: red";

  viewLessBtn4.style.display = "none";

  viewMoreBtn4.style.display = "block";

  btnContainer4.style.cssText =
    "margin: 0; justify-content: center; bottom: 1rem";
}

// 5
const btnContainer5 = document.querySelector("#toggle_btn-container5");
const viewMoreBtn5 = document.querySelector("#viewMore5");
const viewLessBtn5 = document.querySelector("#viewLess5");

const propertyList5 = document.querySelector("#propertiesList5");

function expandHeight5() {
  propertyList5.style.cssText =
    "height: unset; overflow-x: unset; overflow-y: unset; row-gap: 2rem; margin-bottom: 8rem";

  viewMoreBtn5.style.display = "none";

  viewLessBtn5.style.display = "unset";

  btnContainer5.style.cssText =
    "margin: 0; justify-content: center; bottom: -6.5rem";
}

function shrinkHeight5() {
  propertyList5.style.cssText =
    "height: 61rem; overflow-y: hidden; overflow-x: hidden; row-gap: 15rem background-color: red; color: red";

  viewLessBtn5.style.display = "none";

  viewMoreBtn5.style.display = "block";

  btnContainer5.style.cssText =
    "margin: 0; justify-content: center; bottom: 1rem";
}

// for scroll up
const scrollUpBtn = document.querySelector(".scroll_up--container");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollUpBtn.classList.add("active");
  } else {
    scrollUpBtn.classList.remove("active");
  }
});
