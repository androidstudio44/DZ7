document.addEventListener('DOMContentLoaded', function() {
    var answerButtons = document.getElementsByClassName('answer-button');
  
    for (var i = 0; i < answerButtons.length; i++) {
      answerButtons[i].addEventListener('click', function() {
        var answer = this.nextElementSibling;
        if (answer.style.display === 'none') {
          answer.style.display = 'block';
          this.textContent = 'Скрыть ответ';
        } else {
          answer.style.display = 'none';
          this.textContent = 'Показать ответ';
        }
      });
    }
  });
  