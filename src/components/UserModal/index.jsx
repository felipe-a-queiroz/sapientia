import './UserModal.css';

const UserModal = ({ user, onClose, onSave }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = {
            username: formData.get('username'),
            email: formData.get('email'),
            role: formData.get('role'),
        };

        const password = formData.get('password');
        if (password) {
            userData.password = password;
        }

        onSave(userData);
    };
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose} aria-label="Fechar modal">&times;</button>
                <h2>{user ? 'Editar Usuário' : 'Adicionar Usuário'}</h2>
                <form onSubmit={handleSubmit} className="user-form">
                    <div className="form-group">
                        <label htmlFor="username">Nome de Usuário</label>
                        <input id="username" type="text" name="username" defaultValue={user?.username || ''} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email" defaultValue={user?.email || ''} required />
                    </div>

                    {!user && (
                        <div className="form-group">
                            <label htmlFor="password">Senha</label>
                            <input id="password" type="password" name="password" required />
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <select id="role" name="role" defaultValue={user?.role || 'user'}>
                            <option value="user">Usuário</option>
                            <option value="admin">Administrador</option>
                        </select>
                    </div>

                    <div className="modal-actions">
                        <button type="button" className="btn-secondary" onClick={onClose}>
                            Cancelar
                        </button>
                        <button type="submit" className="btn-primary">
                            {user ? 'Salvar Alterações' : 'Adicionar Usuário'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserModal;