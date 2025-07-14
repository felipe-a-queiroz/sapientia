import { useState, useEffect } from 'react';
import MainLayout from '../../components/layout';
import Input from '../../components/forms/Input'; // Reutilizando o componente de Input
import './ProfilePage.css';

const ProfilePage = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Estados para o formulário de edição
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ username: '', email: '' });
    const [updateLoading, setUpdateLoading] = useState(false);
    const [updateError, setUpdateError] = useState('');
    const [updateSuccess, setUpdateSuccess] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            // O token é pego do localStorage, onde o AuthContext o armazena.
            const token = localStorage.getItem('authToken');
            if (!token) {
                setError('Usuário não autenticado.');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Falha ao carregar o perfil do usuário.');
                }

                const data = await response.json();
                setProfile(data);
                setFormData(data.user); // Preenche o formulário com os dados recebidos
            } catch (err) {
                setError(err.message);
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
        setUpdateError('');
        setUpdateSuccess('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUpdateLoading(true);
        setUpdateError('');
        setUpdateSuccess('');

        const token = localStorage.getItem('authToken');

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/profile`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Falha ao atualizar o perfil.');
            }

            setProfile(result); // Atualiza o perfil com os novos dados da API
            setFormData(result.user);
            setIsEditing(false);
            setUpdateSuccess('Perfil atualizado com sucesso!');
        } catch (err) {
            setUpdateError(err.message);
        } finally {
            setUpdateLoading(false);
        }
    };

    return (
        <MainLayout>
            <div className="profile-page">
                <h1>Perfil do Usuário</h1>
                {loading && <p>Carregando perfil...</p>}
                {error && <p className="error-message">Erro: {error}</p>}
                {updateSuccess && <p className="success-message">{updateSuccess}</p>}

                {profile && (
                    !isEditing ? (
                        <div className="profile-details">
                            <p>
                                <strong>Nome de usuário:</strong> {profile.user.username}
                            </p>
                            <p>
                                <strong>Email:</strong> {profile.user.email}
                            </p>
                            <button onClick={() => setIsEditing(true)} className="edit-button">
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
                            {updateError && <p className="error-message">{updateError}</p>}
                            <div className="form-actions">
                                <button type="submit" disabled={updateLoading} className="save-button">
                                    {updateLoading ? 'Salvando...' : 'Salvar Alterações'}
                                </button>
                                <button type="button" onClick={handleCancelEdit} disabled={updateLoading} className="cancel-button">
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    )
                )}
            </div>
        </MainLayout>
    );
};

export default ProfilePage;
