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
          {{ modalTrigger:
            (<button key='modalTrigger'>
              Регистрация
            </button>),
            modalContent: <SignupForm key='modalContent'/>
          }}
        </ModalWindow>
        <ModalWindow text='Вход'>
        {{ modalTrigger:
            (<button key='modalTrigger'>
              Вход
            </button>),
            modalContent: <LoginForm key='modalContent'/>
          }}
        </ModalWindow>
      </Header>
    </div>
  );
}

export default App;
