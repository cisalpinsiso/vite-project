import { useState } from "react"

function Quizz() {
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);

    const questions = [
      {
          id: 1,
          question: 'React c\'est quoi ?',
          options: ['Un groupe de punk auvergnat', 'Un perso de FF7', 'Un framework Javascript', 'Un sport d\'équipe'],
          answer: 'Un framework Javascript'
      },
      {
          id: 2,
          question: 'Comment on gère le state en React ?',
          options: ['State ?', 'Avec PHP', 'avec useState()', 'plutot this.state'],
          answer: 'avec useState()'
      },
      {
          id: 3,
          question: 'On aime React ?',
          options: ['React ?', 'C\'est mieux que JS e fait', 'Par moment', 'Oui !'],
          answer: 'Oui !'
      }
  ] 

  let question = questions[questionNumber];

  return (
    <>
      <h1>Quizz</h1>
      {questions.length > questionNumber ? 
        <> 
          Question {questionNumber}/{questions.length}
          <h3>{question.question}</h3>
          <div>
            {
              question.options.map((option, index) => (
                <button onClick={() => {
                  if (questions[questionNumber].answer === questions[questionNumber].options[index]) {
                    setScore(score + 1)
                  }

                  setQuestionNumber(questionNumber + 1)
                }}>{option}</button>
              ))
            }
          </div>
        </>
      :
        <>
          <h2>Fin du quizz tu as eu {score}/{questions.length}</h2>
          <button onClick={() => {
            setScore(0);
            setQuestionNumber(0);
          }}>Recommencer</button>
        </>
      }
    </>
  )
}

export default Quizz
