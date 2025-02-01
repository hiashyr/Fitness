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

    function validateForm() {
        const teamNameInput = document.getElementById('team-name');
        const teamMembersInput = document.getElementById('team-members');
        const teamNameError = document.getElementById('team-name-error');
        const teamMembersError = document.getElementById('team-members-error');
        const regex = /^[A-Za-zА-Яа-я\s,]+$/; // Разрешаем буквы, пробелы и запятые
    
        let isValid = true;
    
        // Валидация названия команды
        if (!regex.test(teamNameInput.value)) {
            teamNameError.textContent = 'Можно вводить только буквы и пробелы.';
            teamNameError.style.display = 'block';
            isValid = false;
        } else {
            teamNameError.textContent = '';
            teamNameError.style.display = 'none';
        }
    
        // Валидация имен участников
        if (!regex.test(teamMembersInput.value)) {
            teamMembersError.textContent = 'Можно вводить только буквы, пробелы и запятые.';
            teamMembersError.style.display = 'block';
            isValid = false;
        } else {
            teamMembersError.textContent = '';
            teamMembersError.style.display = 'none';
        }
    
        // Если форма валидна, можно отправить данные
        if (isValid) {
            alert('Форма успешно отправлена!');
            // Здесь можно добавить код для отправки данных на сервер
        }
    }