let slideIndex = 1;  // Inicializa o índice do slide com 1, indicando que o primeiro slide deve ser exibido inicialmente.
showSlides(slideIndex);  // Chama a função showSlides para exibir o slide inicial.
// Controles de próximo/anterior
function plusSlides(n) {
    showSlides(slideIndex += n);  // Ajusta o slideIndex incrementando ou decrementando (dependendo do valor de n) e chama showSlides com o novo índice.
}
// Controles de imagem em miniatura (thumbnail)
function currentSlide(n) {
    showSlides(slideIndex = n);  // Define slideIndex para o valor de n e chama showSlides para exibir o slide correspondente.
}
// Função principal que exibe o slide baseado no índice fornecido
function showSlides(n) {
    let i; /*variável */
    let slides = document.getElementsByClassName("mySlides");  // Obtém todos os elementos com a classe "mySlides" (os slides).

    if (n > slides.length) { // Se o índice for maior que o número de slides, reinicia para o primeiro slide
        slideIndex = 1;
    }
    
    if (n < 1) { // Se o índice for menor que 1, ajusta para o último slide
        slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {// Esconde todos os slides
        slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block"; // Exibe o slide atual (baseado em slideIndex)
}