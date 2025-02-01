    // Функция для плавного скролла наверх
    document.getElementById('scrollToTopBtn').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Плавный скролл
        });
    });

    // Показываем или скрываем кнопку в зависимости от прокрутки страницы
    window.addEventListener('scroll', function() {
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');
        if (window.scrollY > 300) { // Показываем кнопку, если прокрутка больше 300px
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });