import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import MainLayout from '../../components/layout';
import Input from '../../components/forms/Input';
import './ProfilePage.css';
import 'react-toastify/dist/ReactToastify.css';
import { getProfile, updateProfile } from '../../api';
import { useAuth } from '../../contexts/AuthContext';

const ProfilePage = () => {
    const { updateUser } = useAuth();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    // Estados para o formulário de edição
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ username: '', email: '' });
    const [updateLoading, setUpdateLoading] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            setLoading(true);
            try {
                const data = await getProfile();
                setProfile(data);
                setFormData(data.user);
            } catch (err) {
                toast.error(
                    err.message || 'Falha ao carregar o perfil do usuário.'
                );
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setFormData(profile.user); // Restaura os dados originais
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUpdateLoading(true);
        try {
            const result = await updateProfile(formData);

            // Atualiza o estado local da página
            setProfile(result);
            setFormData(result.user);

            // Atualiza o estado global do usuário na aplicação.
            // O Header e qualquer outro componente que use `useAuth` será re-renderizado.
            updateUser(result.user);

            setIsEditing(false);
            toast.success('Perfil atualizado com sucesso!');
        } catch (err) {
            toast.error(err.message);
        } finally {
            setUpdateLoading(false);
        }
    };

    return (
        <MainLayout>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
            />
            <div className="profile-page">
                <h1>Perfil do Usuário</h1>
                {loading && <p>Carregando perfil...</p>}

                {profile &&
                    (!isEditing ? (
                        <div className="profile-details">
                            <p>
                                <strong>Nome de usuário:</strong>{' '}
                                {profile.user.username}
                            </p>
                            <p>
                                <strong>Email:</strong> {profile.user.email}
                            </p>
                            <button
                                onClick={() => setIsEditing(true)}
                                className="edit-button"
                            >
                                Editar Perfil
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="profile-form">
                            <Input
                                label="Nome de usuário"
                                id="username"
                                name="username"
                                type="text"
                                value={formData.username}
                                onChange={handleInputChange}
                                disabled={updateLoading}
                            />
                            <Input
                                label="Email"
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                disabled={updateLoading}
                            />
                            <div className="form-actions">
                                <button
                                    type="submit"
                                    disabled={updateLoading}
                                    className="save-button"
                                >
                                    {updateLoading
                                        ? 'Salvando...'
                                        : 'Salvar Alterações'}
                                </button>
                                <button
                                    type="button"
                                    onClick={handleCancelEdit}
                                    disabled={updateLoading}
                                    className="cancel-button"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    ))}
            </div>
        </MainLayout>
    );
};

export default ProfilePage;
