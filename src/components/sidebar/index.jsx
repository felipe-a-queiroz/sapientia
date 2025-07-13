import { Link } from 'react-router-dom';
import './Sidebar.css';

let links = [
    { name: 'Meu Perfil', path: '/profile' },
    { name: 'Configurações', path: '/settings' },
    { name: 'Gerenciar Usuários', path: '/admin/users' },
    { name: 'Relatórios', path: '/admin/reports' },
];

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                <ul>
                    {links.map((link) => (
                        <li key={link.path} className="sidebar-item">
                            <Link to={link.path} className="sidebar-link">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
