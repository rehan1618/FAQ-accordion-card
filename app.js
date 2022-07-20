const faqs = document.querySelector('.faqs');

faqs.addEventListener('click', (e) => {
  let notClicked = Array.from(faqs.children).filter((element) => {
    if (e.target.parentElement !== element) {
      return element;
    }
  });
  for (let i = 0; i < notClicked.length; i++) {
    const element = notClicked[i];
    element.classList.remove('active');
  }

  if (e.target.className == 'question') {
    e.target.parentElement.classList.toggle('active');
  }
});
