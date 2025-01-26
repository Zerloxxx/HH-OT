const startButton = document.getElementById('start-test');
const testQuestions = document.getElementById('test-questions');
const questions = document.querySelectorAll('.test-question');
let currentQuestion = 0;

startButton.addEventListener('click', () => {
  startButton.style.display = 'none';
  testQuestions.style.display = 'block';
  showQuestion(currentQuestion);
});

function showQuestion(index) {
  questions.forEach((q, i) => {
    q.classList.toggle('active', i === index);
  });
}

questions.forEach((question, index) => {
  const buttons = question.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (index < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
      } else {
        alert('Тест завершён! Вот подходящие вакансии.');
        testQuestions.style.display = 'none';
        document.querySelector('.jobs-list').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
