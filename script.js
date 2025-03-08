// Получаем элементы
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const form = document.getElementById("contactForm");

// Открываем модальное окно
openModal.addEventListener("click", () => {
    modal.style.display = "block";
});

// Закрываем модальное окно
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Закрываем при клике вне окна
window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";


        }
    });

// Обрабатываем отправку формы
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    if (name && phone) {
        alert(`Спасибо, ${name}! Мы скоро свяжемся с вами.`);
        modal.style.display = "none";
        form.reset();
    }
});
