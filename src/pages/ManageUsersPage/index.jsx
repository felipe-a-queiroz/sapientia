import { useState, useEffect } from 'react';
import './ManageUsersPage.css';

import MainLayout from '../../components/layout';
import UserTable from '../../components/userTable';
import UserModal from '../../components/UserModal';
import { getUsers, deleteUser, createUser, updateUser } from '../../api'; 

function ManageUsersPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(null);

    const fetchUsers = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getUsers();
                setUsers(data);
            } catch (err) {
                setError('Falha ao carregar usuários. Tente novamente mais tarde.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleAddUser = () => {
        setEditingUser(null); 
        setIsModalOpen(true);
    };

    const handleEditUser = (user) => {
        setEditingUser(user); 
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingUser(null);
    };

    const handleSaveUser = async (userData) => {
        try {
            if (editingUser) {
                await updateUser(editingUser.id, userData);
            } else {
                await createUser(userData);
            }
            handleCloseModal();
            fetchUsers(); 
        } catch (err) {
            console.error("Falha ao salvar usuário:", err);
            fetchUsers(); 
            setError('Erro ao salvar usuário. Tente novamente mais tarde.');
        }
    };

    const handleDeleteUser = async (userId) => {
        if (window.confirm('Tem certeza que deseja excluir este usuário?')) {
            try {
                await deleteUser(userId);
                setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
                alert('Usuário excluído com sucesso.');
            } catch (error) {
                setError('Erro ao excluir usuário. Tente novamente mais tarde.');
                console.error(error);
            }
        }
    };

    return (
        <MainLayout>
            <h1>Gerenciar Usuários</h1>
            <button onClick={handleAddUser} className="btn btn-primary add-user-button">
                + Adicionar Usuário    
            </button>
            {loading && <p>Carregando usuários...</p>}
            {error && <p className="error-message">{error}</p>}
            {!loading && !error && (
                <UserTable
                    users={users}
                    onEdit={handleEditUser}
                    onDelete={handleDeleteUser}
                />
            )}

            {isModalOpen && (
                <UserModal
                    user={editingUser}
                    onClose={handleCloseModal}
                    onSave={handleSaveUser}
                />
            )}
        </MainLayout>
    );
}
export default ManageUsersPage;
