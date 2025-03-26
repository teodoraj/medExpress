# Consultation questionnaire


This task specifically relates to the "Consultation" phase of the user journey. We would like you to:
- Create a web page that asks 5 yes/no questions of the customer, gathering data that will later be reviewed by a doctor.
- The customer should answer each question individually before the next question is revealed.
- Upon the customer completing the last question:
  - Display a simple 'thank you' message to the customer.
  - Pass the collected data to a service/util class function that in a real situation would send the data to our API. For this task however, the function should simply console.log the data (or similar).
- You are required to use ReactJS for the exercise, but are free to use JavaScript or TypeScript, along with any other libraries you wish to include.
- The page should:
  - Be usable at both mobile and desktop screen resolutions.
  - Include a header containing one of our brand logos.
  - Include a footer that has two columns at desktop resolution.


## Getting started

```bash
$ npm i # Install the application
$ npm run dev # Run development
```

## To do plan:
- For this exercise I am going to use Vite template that provides a minumal setup for React app, is fast and easy to run.

- create the wrapper page that will include:
  - header - with logo
  - content - the slide with the questions
  - footer - that has two columns for desk resolution

- create a slide to handle the 5 questions
  - each slide is available after the current slide is answered
  - submit the questionaire after completing the last question - console.log
  - show thank you

- make the entire app responsive (mobile and desktop)


## To do next
 - create component for Question, AnswerButton
 - write unit tests

