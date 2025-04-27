document.querySelectorAll('.buy-btn').forEach(button => {
button.addEventListener('click', () => {
const popup = document.createElement('div');
popup.className = 'popup';
popup.textContent = 'Добавлено в корзину!';
document.body.appendChild(popup);
setTimeout(() => { popup.remove(); }, 2000);
});
});