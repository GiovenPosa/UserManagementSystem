import React, {useState} from 'react';

function SignupForm() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSignup = async () => {
    const response = await fetch('http://localhost:3001/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (response.ok) {
      alert('Signup successful!');
    } else {
      alert('Signup failed: ' + data.message);
    }
  };
  return (
    <div>
      <h2>Sign Up</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default SignupForm;