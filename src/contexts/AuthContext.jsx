/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    // Inicializa o estado como nulo e carrega do localStorage via useEffect
    const [user, setUser] = useState(null);

    // Efeito para carregar o usuário do localStorage na montagem do componente
    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');
        const storedRole = localStorage.getItem('role');

        if (storedToken && storedRole) {
            // Aqui, você poderia adicionar uma verificação de expiração do token se necessário
            setUser(JSON.parse(storedRole));
        }
    }, []);

    /**
     * A função de login agora recebe o token e os dados do usuário da API.
     * Isso é mais eficiente, pois evita decodificar o token no frontend
     * e permite que a API controle quais dados do usuário são expostos.
     */
    const login = (token, userData) => {
        localStorage.setItem('authToken', token);
        localStorage.setItem('role', JSON.stringify(userData));
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('role');

        setUser(null);
    };

    // !!user converte o objeto do usuário (ou null) para um booleano.
    const value = {
        user, // Contém a role do usuário (ex: 'admin')
        isAuthenticated: !!user,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

// Hook customizado para facilitar o uso do nosso contexto de autenticação.
export function useAuth() {
    const context = useContext(AuthContext);
    if (context === null) {
        // Esta verificação torna o erro muito mais claro no futuro.
        throw new Error('useAuth deve ser usado dentro de um AuthProvider.');
    }
    return context;
}
