const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const quoteForm = document.getElementById("quoteForm");
const formNote = document.getElementById("formNote");

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !phone || !service || !message) {
    formNote.textContent = "Please complete all fields.";
    return;
  }

  const text =
    `Hello Busywork Construction and Welding.%0A%0A` +
    `Name: ${encodeURIComponent(name)}%0A` +
    `Phone: ${encodeURIComponent(phone)}%0A` +
    `Service: ${encodeURIComponent(service)}%0A` +
    `Project details: ${encodeURIComponent(message)}`;

  window.open(`https://wa.me/27729558993?text=${text}`, "_blank");
  formNote.textContent = "Opening WhatsApp...";
});
