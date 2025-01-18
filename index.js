// Получение данных из <title> и <meta>
const pageUrl = encodeURIComponent(window.location.href);
const pageTitle = encodeURIComponent(document.title);
const metaDescriptionTag = document.querySelector('meta[name="description"]');
const pageDescription = metaDescriptionTag ? encodeURIComponent(metaDescriptionTag.content) : '';

// Открытие нового окна
function openShareWindow(url) {
    const width = 600;
    const height = 400;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    window.open(url, '_blank', `width=${width},height=${height},left=${left},top=${top}`);
}

// Модальное окно
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const modalClose = document.getElementById('modal-close');

// Открытие модального окна
function openModal(message) {
    modalMessage.textContent = message;
    modal.style.display = 'flex';
}

// Закрытие модального окна
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

// События для кнопок
document.getElementById('share-vk').addEventListener('click', () => {
    const vkUrl = `https://vk.com/share.php?url=${pageUrl}&title=${pageTitle}&description=${pageDescription}`;
    openShareWindow(vkUrl);
});

document.getElementById('share-telegram').addEventListener('click', () => {
    const telegramUrl = `https://t.me/share/url?url=${pageUrl}&text=${pageTitle}`;
    openShareWindow(telegramUrl);
});

document.getElementById('share-whatsapp').addEventListener('click', () => {
    const whatsappUrl = `https://wa.me/?text=${pageTitle}%20${pageUrl}`;
    openShareWindow(whatsappUrl);
});

document.getElementById('share-x').addEventListener('click', () => {
    const xUrl = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
    openShareWindow(xUrl);
});

document.getElementById('share-viber').addEventListener('click', () => {
    const viberUrl = `viber://forward?text=${pageTitle}%20${pageUrl}`;
    openShareWindow(viberUrl);
});

document.getElementById('share-instagram').addEventListener('click', () => {
    openModal("Instagram не поддерживает прямую функцию шаринга через URL. Попробуйте вручную поделиться ссылкой!");
});

// Копирование ссылки
document.getElementById('copy-link').addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href)
        .then(() => openModal("Ссылка успешно скопирована в буфер обмена!"))
        .catch(err => openModal("Ошибка при копировании: " + err));
});