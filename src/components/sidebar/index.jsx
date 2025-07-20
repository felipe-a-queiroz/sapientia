import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Sidebar.css';

const Sidebar = () => {
    const { user } = useAuth();

    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                <ul>
                    <li className="sidebar-item">
                        <Link to="/profile" className="sidebar-link">
                            Meu Perfil
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/settings" className="sidebar-link">
                            Configurações
                        </Link>
                    </li>
                    {/* Links que só aparecem para administradores */}
                    {user?.role === 'admin' && (
                        <li className="sidebar-item">
                            <Link to="/admin/users" className="sidebar-link">
                                Gerenciar Usuários
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
