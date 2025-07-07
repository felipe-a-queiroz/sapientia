import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

/**
 * Este componente verifica se o usuário está autenticado.
 * - Se estiver, renderiza o componente filho (a página protegida).
 * - Se não estiver, redireciona para a página de login, guardando a
 *   página que o usuário tentou acessar para redirecioná-lo de volta após o login.
 */
export function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

