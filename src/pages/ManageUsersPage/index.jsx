import './ManageUsersPage.css';

import MainLayout from '../../components/layout';
function ManageUsersPage() {
    return (
        <MainLayout>
            <h1>Gerenciar Usuários</h1>
            <p>
                Esta página permite que você gerencie os usuários do sistema.
                Você pode adicionar, editar ou remover usuários conforme
                necessário.
            </p>
        </MainLayout>
    );
}
export default ManageUsersPage;
