import { Header } from './Header';
import { LoginForm } from './Login';
import { ModalWindow } from './Modal';
import { SignupForm } from './SignupForm';
import { Body } from './Body';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header>
        <ModalWindow text='Регистрация'>
          {{ modalTrigger:
            (<button key='modalTrigger' className='App-header-button'>
              Регистрация
            </button>),
            modalContent: <SignupForm key='modalContent'/>
          }}
        </ModalWindow>
        <ModalWindow text='Вход'>
        {{ modalTrigger:
            (<button key='modalTrigger' className='App-header-button'>
              Вход
            </button>),
            modalContent: <LoginForm key='modalContent'/>
          }}
        </ModalWindow>
      </Header>
      <Body/>
    </div>
  );
}

export default App;
