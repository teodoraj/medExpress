import logo from './assets/logo.svg';
import QuestionSlider from './components/QuestionSlider';
import './App.scss'

function App() {
  return (
    <div className='AppWrapper'>
      <header className='Header'>
        <a href='#'>
          <img src={logo} className='LogoImage' alt='HeliosX logo' />
        </a>
      </header>
      <main className='ContentWrapper'>
        <div className='SliderContent'>
          <h2 className='SliderContent-title'>Consultation Questionaire</h2>
        <QuestionSlider />
        </div>
      </main>
      <footer className='Footer'>
        <div className='Footer-content'>
        <p>Footer column content here</p>
          <ul className='Footer-list'>
            <li><a href='/about'>About us</a></li>
            <li><a href='/careers'>Careers</a></li>
          </ul>

        </div>
        <div className='Footer-content'>
          <p>Footer another column here</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
