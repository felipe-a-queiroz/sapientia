import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { loginUser } from '../../api';
import './LoginPage.css';

import Input from '../../components/forms/Input';

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
            console.log('Login response:', data);
            if (data.token && data.role) {
                login(data.token, data.role);
                navigate(from, { replace: true });
            } else {
                setError('Token ou dados do usuário não recebidos da API.');
            }
        } catch (err) {
            setError(
                err.message || 'Falha no login. Verifique suas credenciais.'
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="LoginPage-center">
            <div className="AuthCard">
                <h1 className="AuthCard-title">Sapientia</h1>
                <p className="AuthCard-desc">Acesse sua conta para continuar</p>
                <form className="LoginForm" onSubmit={handleSubmit}>
                    <Input
                        id="username"
                        label="Usuário"
                        placeholder="Digite seu usuário"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        disabled={isLoading}
                        required
                        autoComplete="username"
                    />
                    <Input
                        id="password"
                        label="Senha"
                        placeholder="Digite sua senha"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading}
                        required
                        autoComplete="current-password"
                    />
                    {error && <p className="LoginForm-error">{error}</p>}
                    <button
                        type="submit"
                        className="LoginForm-button"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Entrando...' : 'Entrar'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
