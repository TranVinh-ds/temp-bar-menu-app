import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Login = () => {
  const { name, email, setName, setEmail, setUser } = useGlobalContext();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error('please enter the corresponding value in the field!');
      return;
    }
    setUser(name);
    setName('');
    setEmail('');
    navigate('/dashboard');
  };
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h4
        style={{
          textAlign: 'center',
          marginBottom: '2rem',
          textTransform: 'capitalize',
          fontSize: '1.5rem',
        }}
      >
        login
      </h4>
      <div className="login-form-row">
        <label htmlFor="name" className="login-form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="login-form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="login-form-row">
        <label htmlFor="name" className="login-form-label">
          Email
        </label>
        <input
          id="name"
          type="email"
          className="login-form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="login-btn login-btn-block">
        submit
      </button>
    </form>
  );
};

export default Login;
