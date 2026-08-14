/* WISHLIST HEART EFFECT AFTER REDIRECT */

const wishlistLink = document.getElementById("wishlistLink");

if (wishlistLink) {
  wishlistLink.addEventListener("click", () => {
    // save flag before redirect
    sessionStorage.setItem("showWishlistEffect", "true");
  });
}

/* SHOW EFFECT AFTER PAGE LOAD */

window.addEventListener("load", () => {
  const shouldShow = sessionStorage.getItem("showWishlistEffect");

  if (shouldShow === "true") {
    // remove flag
    sessionStorage.removeItem("showWishlistEffect");

    // create hearts continuously
    const interval = setInterval(() => {
      const heart = document.createElement("div");

      heart.classList.add("heart-drop");

      heart.innerHTML = "❤️";

      // random x position
      heart.style.left = Math.random() * window.innerWidth + "px";

      // random size
      heart.style.fontSize = 18 + Math.random() * 20 + "px";

      // random speed
      heart.style.animationDuration = 2 + Math.random() * 2 + "s";

      document.body.appendChild(heart);

      // remove later
      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, 120);

    // stop after 4 sec
    setTimeout(() => {
      clearInterval(interval);
    }, 4000);
  }
});
