document.querySelectorAll('.service-card').forEach(card => {
  const password = card.dataset.password;
  const secret = card.querySelector('[data-secret]');
  const toggle = card.querySelector('[data-toggle]');
  toggle.addEventListener('click', () => {
    const hidden = secret.textContent.startsWith('•');
    secret.textContent = hidden ? password : '••••••••••••';
    toggle.textContent = hidden ? 'Masquer' : 'Afficher';
  });
  card.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', async () => {
    const value = button.dataset.copy === 'password' ? password : card.querySelector('.field strong').textContent;
    await navigator.clipboard.writeText(value);
    const label = button.textContent; button.textContent = 'Copié ✓';
    setTimeout(() => button.textContent = label, 1400);
  }));
});
