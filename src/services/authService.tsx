import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './database/firebase';

// Definindo a interface para os parâmetros do login
interface LoginProps {
    email: string;
    password: string;
}

// Definindo o padrão da resposta do SignIn
interface ResponseProps {
    token: string;
    user: {
        name: string | null;
        email: string | null;
    }
}

// Função de login com Firebase Authentication
export default async function LogingUser(email: string, password: string): Promise<ResponseProps> {
    try {
        // Tentando fazer login com o email e senha fornecidos
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        // Aqui, você pode acessar o token de autenticação do usuário
        const token = await user.getIdToken(); // Obter o token de autenticação
        
        // Retornando as informações do usuário autenticado
        return {
            token: token,
            user: {
                name: user.displayName, // Pode ser null, dependendo do que foi configurado no Firebase
                email: user.email
            }
        };
    } catch (error: any) {
        // Capturando e lidando com erros de autenticação
        console.error("Erro ao fazer login:", error.message);
        throw new Error(error.message); // Lança o erro para que possa ser tratado externamente
    }
}
