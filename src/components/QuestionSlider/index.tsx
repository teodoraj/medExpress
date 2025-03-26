import React, { useState, useMemo, useCallback, useEffect } from 'react';
import classNames from 'classnames';
import styles from './QuestionSlider.module.css';

type Answer = {
  question: string;
  answer: string;
};

const questions: string[] = [
  'Have you been previously evaluated for allergies?',
  'Are you on any special diets?',
  'Are your immunizations up to date?',
  'Did you receive the influenza shot (flu) during the most recent or current flu season?',
  'Do you have any pets (cats, dogs, birds, gerbils, hamsters, etc)?',
];

const QuestionSlider: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    setProgress((100 / questions.length) * currentQuestion);
  }, [currentQuestion]);

  const handleAnswer = useCallback(
    (answer: string): void => {
      setAnswers((prevAnswers) => [
        ...prevAnswers,
        { question: questions[currentQuestion], answer },
      ]);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      } else {
        setSubmitted(true);
        handleSubmit([
          ...answers,
          { question: questions[currentQuestion], answer },
        ]);
      }
    },
    [currentQuestion, answers]
  );

  const handleSubmit = (answers: Answer[]): void => {
    // Submit the answers to the API
    console.log('Answers to submit', answers);
  };

  const handleBack = useCallback(() => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
    setAnswers((prevAnswers) => prevAnswers.slice(0, -1));
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      handleAnswer(e.currentTarget.value);
    },
    [handleAnswer]
  );

  const renderQuestions = () => {
    return questions.map((question: string, index: number) => (
      <div
        key={index}
        className={classNames(styles.Question, {
          [styles.Active]: currentQuestion === index,
          [styles.Inactive]: currentQuestion !== index,
        })}
      >
        <p>{question}</p>
        <div className={styles.ButtonsWrapper}>
          <button
            value="Yes"
            className={styles.AnswerButton}
            onClick={handleClick}
          >
            Yes
          </button>
          <button
            value="No"
            className={styles.AnswerButton}
            onClick={handleClick}
          >
            No
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className={styles.QuestionSlider}>
      {!submitted ? (
        <>
          <div className={styles.ProgressBarWrapper}>
            <span className={styles.ProgressBarFill}
              style={{ width: `${progress}%` }}
            ></span>
          </div>
          {renderQuestions()}
          {currentQuestion !== 0 && (
            <button onClick={handleBack} className={styles.BackButton}>
              Previous question
            </button>
          )}
        </>
      ) : (
        <p>Thank you for submitting your answers</p>
      )}
    </div>
  );
};

export default QuestionSlider;