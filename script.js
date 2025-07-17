const redNotif = document.querySelectorAll(".red-notif");
const countText = document.querySelector(".count");
const markAsRead = document.querySelector(".mark-as-read");

document.addEventListener("DOMContentLoaded", (e) => {
  let count = redNotif.length;
  countText.innerHTML = count;

  redNotif.forEach((redDot) => {
    const parent = redDot.closest(
      ".mark-div, .angela-div, .jacob-div, .nathan-div, .rizky-div, .kimberly-div, .anna-div"
    );
    if (parent) {
      parent.style.backgroundColor = "hsl(211, 68%, 94%)";
      parent.style.padding = "1rem";
      parent.style.borderRadius = "0.5rem";
    }
  });

  markAsRead.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("mark as read");
    redNotif.forEach((redDot) => {
      redDot.style.display = "none";
      const parent = redDot.closest(
        ".mark-div, .angela-div, .jacob-div, .nathan-div, .rizky-div, .kimberly-div, .anna-div"
      );
      if (parent) {
        parent.style.backgroundColor = "";
        parent.style.padding = "";
        parent.style.borderRadius = "";
      }
    });
    countText.innerHTML = 0;
  });
});
