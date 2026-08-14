// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false,
    );
  });
})();

//------loader------
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
      AOS.refresh(); // IMPORTANT for correct animation after load
    }, 500);
  }
});

//---------------- flash msg 4-5 seconds ---------------------

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const alerts = document.querySelectorAll(".alert");

    alerts.forEach((alert) => {
      alert.style.transition = "opacity 0.5s ease";
      alert.style.opacity = "0";

      setTimeout(() => {
        alert.remove();
      }, 500);
    });
  }, 3000); // 👈 3 seconds
});

//--------------weather--------------------
async function getWeather(id) {
  const res = await fetch(`/weather/${id}`);
  const data = await res.json();

  const box = document.getElementById("weather-box");

  if (data.error) {
    box.innerHTML = `<p>${data.error}</p>`;
    return;
  }

  box.innerHTML = `
    <h5>Weather in ${data.location}</h5>
    <p>🌡 Temperature: ${data.temp} °C</p>
    <p>🌥 Condition: ${data.weather}</p>
    <p>💧 Humidity: ${data.humidity}%</p>
  `;
}
