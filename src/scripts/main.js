const modal = document.getElementById("form-filter");
const openModalBtn = document.getElementById("filter-button");
// const closeModalBtn = document.querySelector(".close");

// Открываем модальное окно при клике на кнопку
openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// Закрываем модальное окно при клике вне его области
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});