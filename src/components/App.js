import { Header } from './Header';
import { LoginForm } from './Login';
import { ModalWindow } from './Modal';
import { SignupForm } from './SignupForm';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header>
        <ModalWindow text='Регистрация'>
          <SignupForm/>
        </ModalWindow>
        <ModalWindow text='Вход'>
          <LoginForm/>
        </ModalWindow>
      </Header>
    </div>
  );
}

export default App;
