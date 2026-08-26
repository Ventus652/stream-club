document.querySelectorAll('.service-card').forEach(card => {
  card.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', async () => {
    const value = card.querySelector('.field strong').textContent;
    await navigator.clipboard.writeText(value);
    const label = button.textContent; button.textContent = 'Copié ✓';
    setTimeout(() => button.textContent = label, 1400);
  }));
});
