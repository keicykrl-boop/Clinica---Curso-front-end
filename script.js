document.addEventListener("DOMContentLoaded", () => {

    // FORMULÁRIO
    const form = document.getElementById("form");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            let nome = document.getElementById("nome").value;
            alert("Obrigado, " + nome + "! Seu agendamento foi marcado");
        });
    }

    // CARROSSEL
    let index = 0;

    const slides = document.querySelector(".slides");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    if (slides && next && prev) {

        function showSlide(i) {
            const total = document.querySelectorAll(".slide").length;

            if (i >= total) index = 0;
            else if (i < 0) index = total - 1;
            else index = i;

            slides.style.transform = `translateX(-${index * 100}%)`;
        }

        next.onclick = () => showSlide(index + 1);
        prev.onclick = () => showSlide(index - 1);

        setInterval(() => {
            showSlide(index + 1);
        }, 4000);
    }

});