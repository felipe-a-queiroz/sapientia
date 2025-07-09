import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { loginUser } from '../../api';
import AuthCard from '../../components/Login/AuthCard';
import LoginForm from '../../components/Login/LoginForm';
import './LoginPage.css'; 


function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const data = await loginUser({ username, password });
      if (data.token) {
        login(data.token);
        navigate(from, { replace: true });
      } else {
        setError('Token não recebido da API.');
      }
    } catch (err) {
      setError(err.message || 'Falha no login. Verifique suas credenciais.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="LoginPage-center">
      <AuthCard>
        <h1 className="AuthCard-title">Sapientia</h1>
        <p className="AuthCard-desc">Acesse sua conta para continuar</p>
        <LoginForm
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          error={error}
          isLoading={isLoading}
          onSubmit={handleSubmit}
        />
      </AuthCard>
    </div>
  );
}

export default LoginPage;
