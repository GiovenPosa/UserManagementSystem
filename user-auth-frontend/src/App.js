import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

function App() {
  return (
   <div style={{ padding: '2rem' }}>
    <h1> Travel App </h1>
    <SignupForm />
    <hr />
    <LoginForm />
   </div>
  );
}

export default App;
