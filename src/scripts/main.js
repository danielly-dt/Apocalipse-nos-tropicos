document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll('[data-faq-question]');

  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', function (e) {
      const item = e.target.parentNode;
      item.classList.toggle('faq__questions__item--is-open');
    });
  }

  console.log('JS carregou ✅');
});
