import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = useCallback(async () => {
        try {
            // A função de logout do contexto deve cuidar da chamada à API e da limpeza do armazenamento
            await logout();
            // Redireciona para a página de login após o logout bem-sucedido
            navigate('/login');
        } catch (error) {
            console.error('Falha ao processar o logout:', error);
            // Opcional: Adicionar feedback ao usuário sobre o erro.
            // Mesmo que a chamada à API falhe, é uma boa prática deslogar o usuário no cliente.
            navigate('/login');
        }
    }, [logout, navigate]);

    return (
        <header className="app-header">
            <nav className="header-nav">
                <Link
                    to="/"
                    className="header-logo-link"
                    aria-label="Página inicial do Sapientia"
                >
                    <h1 className="header-title">Sapientia</h1>
                </Link>
                <button
                    onClick={handleLogout}
                    className="header-logout-button"
                    aria-label="Sair da sua conta"
                >
                    Sair
                </button>
            </nav>
        </header>
    );
};

export default Header;
