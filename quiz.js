document.addEventListener("DOMContentLoaded", () => {
  const feedback = document.getElementById("feedback")
  const answer = document.getElementById("submit-answer")
  console.log('hello')

  const checkAnswer = function checkAnswer() {
    // Function body
    let correctAnswer = 4
    
    let userAnswer = document.querySelector('input[name="quiz"]')
    userAnswer = userAnswer.value

    if (userAnswer === correctAnswer) {
      feedback.textContent = "Correct! Well done."
    }
    else {
      feedback.textContent = "That's incorrect. Try again!"
    }  
  }
  
  answer.addEventListener("click", checkAnswer)
});