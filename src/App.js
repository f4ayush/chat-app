
import './App.css';
import { ChatEngine } from 'react-chat-engine'
import Chatfeed from './components/Chatfeed';
import LoginForm from './components/LoginForm';
function App() {
  if (!localStorage.getItem('username')) return <LoginForm />

  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="57588c20-e26d-4c5f-b650-df6c937cd628"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppState) => <Chatfeed {...chatAppState} />}

      />
    </div>
  );
}

export default App;
