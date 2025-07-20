import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
    const navigate = useNavigate();
    const { user, isAuthenticated, logout } = useAuth();

    const handleLogout = useCallback(async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error('Falha ao processar o logout:', error);
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
                <div className="header-actions">
                    {isAuthenticated && user && (
                        <Link to="/profile" className="header-profile-link">
                            {user.username}
                        </Link>
                    )}
                    <button
                        onClick={handleLogout}
                        className="header-logout-button"
                        aria-label="Sair da sua conta"
                    >
                        Sair
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
