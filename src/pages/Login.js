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
    <section className="section-login">
      <h4 className="section-title">Login</h4>
      <form className="login-form" onSubmit={handleSubmit}>
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
        <button type="submit" className="login-btn">
          submit
        </button>
      </form>
    </section>
  );
};

export default Login;
