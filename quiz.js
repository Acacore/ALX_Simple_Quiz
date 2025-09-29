document.addEventListener("DOMContentLoaded", () => {
  const feedback = document.getElementById("feedback")
  const answer = document.getElementById("submit-answer")
  let correctAnswer = 4


  function checkAnswer(x){
    if (x === correctAnswer) {
      feedback.textContent = "Correct! Well done."
    }
    else {
      feedback.textContent = "That's incorrect. Try again!"
    }  
  }

  answer.addEventListener("click", function () {
    const userAnswer = document.querySelector("input[name='quiz']:checked")

    if (!userAnswer) {
      feedback.textContent = "Please select and answer"
      return
    }
    checkAnswer(Number(userAnswer.value))
  }) 
  
});