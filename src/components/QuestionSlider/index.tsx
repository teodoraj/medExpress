import React, { useState, useMemo } from 'react';
import classNames from 'classnames';
import styles from './QuestionSlider.module.css';

type Answer = {
  question: string;
  answer: string;
};

const questions: string[] = [
  'Have you been previously evaluated for allergies?',
  'Are you on any special diets?',
  'Are your imunitisation up to date?',
  'Did you receive the influenza shot(flu) during the most recent or current flu season?',
  'Do you have any pets (cats, dogs, birds, gerbils, hamsters, etc)?',
];

const QuestionSlider: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleAnswer = (answer: string): void => {
    setAnswers((prevAnswer) => [
      ...prevAnswer,
      { question: questions[currentQuestion], answer },
    ]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setSubmitted(true);
      handleSubmit([
        ...answers,
        { question: questions[currentQuestion], answer },
      ]);
    }
  };
  const handleSubmit = (answers: Answer[]): void => {
    //submit the answers to the API
    console.log('Answers to submit', answers);
  };

  const questionsRemaining = useMemo(() => {
    return questions.length - currentQuestion;
  }, [questions, currentQuestion]);

  return (
    <div className={styles.QuestionSlider}>
      {!submitted ? (
        <>
          <em>
            Please answer {questionsRemaining}
            {questionsRemaining > 1 ? ` questions` : ` question`} to help our
            doctor to find best treatment for you
          </em>
          {questions.map((question: string, index: number) => (
            <div
              key={index}
              className={classNames(styles.Question, {
                [styles.Visible]: currentQuestion === index,
                [styles.Inactive]: currentQuestion !== index,
              })}
            >
              <p>{question}</p>
              <div className={styles.ButtonsWrapper}>
                <button
                  className={styles.AnswerButton}
                  onClick={() => handleAnswer('Yes')}
                >
                  Yes
                </button>
                <button
                  className={styles.AnswerButton}
                  onClick={() => handleAnswer('No')}
                >
                  No
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p>Thank you for submitting your answers</p>
      )}
    </div>
  );
};

export default QuestionSlider;
