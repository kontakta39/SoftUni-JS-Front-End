function solve() {
  let quizAnswers = document.querySelectorAll('.quiz-answer');
  let correctAnswersCount = 0;
  let answersCount = 0;
  let result = '';
  let resultsUl = document.getElementById('results');

  for (let answer of quizAnswers) {
      answer.addEventListener('click', () => {
          let clickedAnswer = answer.querySelector('.answer-text');
          if (clickedAnswer) {
              let answerText = clickedAnswer.textContent;
              switch (answerText) {
                  case 'onclick':
                  case 'JSON.stringify()':
                  case 'A programming API for HTML and XML documents':
                      correctAnswersCount++;
                      break;
              }
          }

          let currentStep = answer.parentNode.parentNode;
          let nextStep = currentStep.nextElementSibling;
          currentStep.style.display = 'none';

          if (answersCount < 2) {
          nextStep.style.display = 'block';
          }

          answersCount++;
          
          if (answersCount === 3) {
              // Show results when all questions have been answered
              if (correctAnswersCount === 3) {
                  result = 'You are recognized as top JavaScript fan!';
              } else {
                  result = `You have ${correctAnswersCount} right answers`;
              }

              let h1 = document.querySelector('#results h1');
              h1.textContent = result;
              resultsUl.style.display = 'block';
          }
      });
  }
}