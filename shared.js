const planList = document.querySelector('.plan__list');
const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');

const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

planList?.addEventListener('click', ({ target: clickedElement }) => {
  if (!clickedElement.closest('.button')) return;
  openModal();
});

modal?.addEventListener('click', ({ target: clickedElement }) => {
  if (clickedElement.closest('.modal__action--positive')) return;
  if (clickedElement.closest('.modal__action--negative')) closeModal();
});

backdrop.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  closeModal();
});

function openModal() {
  [modal, backdrop].forEach(el => el?.classList.add('open'));
}

function closeModal() {
  console.log('Closing the modal..');
  [modal, backdrop].forEach(el => el?.classList.remove('open'));
}

toggleButton.addEventListener('click', e => {
  [mobileNav, backdrop].forEach(el => el?.classList.add('open'));
});
