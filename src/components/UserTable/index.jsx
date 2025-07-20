import './UserTable.css';

const UserTable = ({ users, onEdit, onDelete }) => {
    if (!users || users.length === 0) {
        return <p>Nenhum usuário encontrado.</p>;
    }

    return (
        <table className="user-table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                            <button onClick={() => onEdit(user)} className="action-button edit">Editar</button>
                            <button onClick={() => onDelete(user.id)} className="action-button delete">Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;
