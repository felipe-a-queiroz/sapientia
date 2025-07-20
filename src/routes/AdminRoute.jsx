import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

/**
 * Este componente protege rotas que são exclusivas para administradores.
 * - Se o usuário não estiver autenticado, redireciona para /login.
 * - Se estiver autenticado mas não for 'admin', redireciona para a página inicial.
 * - Se for um administrador autenticado, renderiza o conteúdo da rota.
 */
export function AdminRoute() {
    const { user, isAuthenticated } = useAuth();
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Se o usuário está logado, mas não é admin, redireciona para a home.
    // O <Outlet /> renderiza as rotas filhas (ex: /admin/users) se o usuário for admin.
    return user?.role === 'admin' ? <Outlet /> : <Navigate to="/" replace />;
}
