// Your code here
var questionsArr = [
      {
        question: 'JavaScript is super fun to learn? Click OK for True, Cancel for False.',
        answer: true
      },
      {
        question: 'The Earth is flatter than paper? Click OK for True, Cancel for False.',
        answer: false
      }, 
      {
        question: 'Study hard and you will succeed? Click OK for True, Cancel for False.',
        answer: true
      }, 
      {
        question: 'DaVinci believed that simplicity is the ultimate sophistication? Click OK for True, Cancel for False.',
        answer: true
      }, 
      {
        question: 'E.T. is a friendly alien that wants to phone home? Click OK for True, Cancel for False.',
        answer: true
      }, 
      {
        question: 'Texas is known as the lone star state? Click OK for True, Cancel for False.',
        answer: true
      }, 
      {
        question: 'Python is a type of snake? (tricky one) Click OK for True, Cancel for False.',
        answer: true
      }, 
      {
        question: 'jQuery makes writing JavaScript a lot easier? Click OK for True, Cancel for False.',
        answer: true
      }, 
      {
        question: 'Java is an informal term for coffee? Click OK for True, Cancel for False.',
        answer: true
      },
];

function runQuiz () {
    var score = 0;
    var wrongAnswer = 0;
    
       var i;
       for (var i = 0; i < questionsArr.length; i++) {

        var userAnswer = confirm(questionsArr[i].question);
        
        if (userAnswer === questionsArr[i].answer) {
            score++;
        }
        else {
            wrongAnswer = confirm('Try again! The correct answer is: ' + questionsArr[i].answer + '. Click OK to continue.');
        }
    }

    var percentage = (score / questionsArr.length) * 100;
    var scorePercentage = Math.round(percentage);
    alert('Thanks for playing! You scored!: ' + scorePercentage + '%'
        + '\nYou answered ' + score + ' questions correctly out of ' + questionsArr.length + '.'
        + '\nCorrect answers: ' + score + '.'
        + '\nWrong answers: ' + (questionsArr.length - score) + '.'
    );
}