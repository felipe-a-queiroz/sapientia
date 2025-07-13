/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    // Inicializa o estado lendo o token do localStorage
    const [user, setUser] = useState(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            try {
                // Opcional: verificar se o token expirou antes de decodificar
                const decodedToken = jwtDecode(token);
                const currentTime = Date.now() / 1000; // Tempo atual em segundos
                if (decodedToken.exp < currentTime) {
                    localStorage.removeItem('authToken'); // Token expirado, remove
                    return null;
                }
                const decodedUser = jwtDecode(token);
                return decodedUser;
            } catch (error) {
                console.error(
                    'Token inválido ou expirado no localStorage',
                    error
                );
                localStorage.removeItem('authToken');
                return null;
            }
        }
        return null;
    });

    // A função de login agora recebe o token JWT da sua API.
    const login = (token) => {
        try {
            localStorage.setItem('authToken', token);
            const decodedUser = jwtDecode(token);
            setUser(decodedUser);
        } catch (error) {
            console.error(
                'Falha ao decodificar o token durante o login',
                error
            );
            logout(); // Limpa o estado se o token for inválido
        }
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setUser(null);
    };

    // !!user converte o objeto do usuário (ou null) para um booleano.
    const value = { user, isAuthenticated: !!user, login, logout };

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
