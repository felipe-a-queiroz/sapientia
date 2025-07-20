import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './ManageUsersPage.css';
import 'react-toastify/dist/ReactToastify.css';

import MainLayout from '../../components/layout';
import UserTable from '../../components/UserTable';
import UserModal from '../../components/UserModal';
import ConfirmationModal from '../../components/ConfirmationModal';
import { getUsers, deleteUser, createUser, updateUser } from '../../api';

function ManageUsersPage() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(null);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const data = await getUsers();
            setUsers(data);
        } catch (err) {
            toast.error(
                'Falha ao carregar usuários. Tente novamente mais tarde.'
            );
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
                toast.success('Usuário atualizado com sucesso!');
            } else {
                await createUser(userData);
                toast.success('Usuário criado com sucesso!');
            }
            handleCloseModal();
            fetchUsers();
        } catch (err) {
            console.error('Falha ao salvar usuário:', err);
            const errorMessage =
                err.message || 'Erro ao salvar usuário. Tente novamente.';
            toast.error(errorMessage);
        }
    };

    const handleDeleteUser = async (userId) => {
        setUserToDelete(userId);
        setIsConfirmModalOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (!userToDelete) return;

        try {
            await deleteUser(userToDelete);
            setUsers((prevUsers) =>
                prevUsers.filter((user) => user.id !== userToDelete)
            );
            toast.success('Usuário excluído com sucesso.');
        } catch (error) {
            toast.error('Erro ao excluir usuário. Tente novamente mais tarde.');
            console.error(error);
        } finally {
            setIsConfirmModalOpen(false);
            setUserToDelete(null);
        }
    };

    return (
        <MainLayout>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
            />
            <h1>Gerenciar Usuários</h1>
            <button
                onClick={handleAddUser}
                className="btn btn-primary add-user-button"
            >
                + Adicionar Usuário
            </button>
            {loading && <p>Carregando usuários...</p>}
            {!loading && (
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

            <ConfirmationModal
                isOpen={isConfirmModalOpen}
                onClose={() => setIsConfirmModalOpen(false)}
                onConfirm={handleConfirmDelete}
                title="Confirmar Exclusão"
                message="Tem certeza que deseja excluir este usuário? Esta ação não pode ser desfeita."
            />
        </MainLayout>
    );
}
export default ManageUsersPage;
