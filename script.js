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
    
    document.addEventListener('DOMContentLoaded', function() {
        const cookieNotification = document.querySelector('.cookie-notification');
        const acceptButton = document.getElementById('acceptCookies');
    
        // Проверяем, была ли уже принята cookie
        if (!Cookies.get('cookiesAccepted')) {
            cookieNotification.style.display = 'flex'; // Показываем плашку
        }
    
        // Обработчик для кнопки "Принять"
        if (acceptButton) {
            acceptButton.addEventListener('click', function() {
                // Скрываем плашку
                cookieNotification.style.display = 'none';
                // Устанавливаем cookie на 30 дней
                Cookies.set('cookiesAccepted', 'true', { expires: 30 });
            });
        }
    });
