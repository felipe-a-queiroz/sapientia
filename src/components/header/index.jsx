import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { logoutUser } from '../../api';
import { Menu, X } from 'lucide-react'; // Ícones para o menu móvel


const Header = () => {
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    try {
      await logoutUser();
      localStorage.removeItem('authToken');
      navigate('/login');
    } catch (error) {
      console.error('Falha ao fazer logout:', error);
      // Opcional: Adicionar feedback para o usuário em caso de erro no logout
    }
  }, [navigate]);

  return (
    <header>
      <div>
        <Link to="/" aria-label="Página inicial">
          <h1>Sapientia</h1>
        </Link>

        
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition-colors duration-200 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-red-400"
            aria-label="Logout"
          >
            Logout
          </button>
      </div>
    </header>
  );
};

export default Header;