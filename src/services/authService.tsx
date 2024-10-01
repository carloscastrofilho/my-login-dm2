import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from './database/firebase';
import { User } from "../context/auth";

// Definindo a interface para os parâmetros do login
export interface LoginProps {
    email: string;
    password: string;
    uuid: string;
}

// Definindo o padrão da resposta do SignIn
interface ResponseProps {
    token: string;
    user: User | null ;
}

// criei para centralizar a criação de um usuario no firebase
export async function CreateUser(email: string, password: string): Promise<ResponseProps> {
    try {
        // Tentando fazer login com o email e senha fornecidos
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        const user = userCredential.user;
        // Aqui, você pode acessar o token de autenticação do usuário
        const token = await user.getIdToken(); // Obter o token de autenticação
        
        // Retornando as informações do usuário autenticado
        return {
            token: token,
            user: {
                name: user.displayName, 
                email: user.email,
                uuid: user.uid,
            }
        };
    } catch (error: any) {
        // Capturando e lidando com erros de autenticação
        console.error("Erro ao registra o usuario:", error.message);
        throw new Error(error.message); // Lança o erro para que possa ser tratado externamente
    }
}

// criei 11/09 - para centrar a saida do usuario logado
export async function LogoutUser(): Promise<ResponseProps>{
    try {
                
        const user = await signOut(auth);
        // Aqui, você pode acessar o token de autenticação do usuário                
        // Retornando as informações do usuário autenticado
        return {
            token: '',
            user: null,
        };
    } catch (error: any) {
        // Capturando e lidando com erros de autenticação
        console.error("Erro ao finalizar acesso:", error.message);
        throw new Error(error.message); // Lança o erro para que possa ser tratado externamente
    }
}

// Função de login com Firebase Authentication
export default async function LogingUser(email: string, password: string): Promise<ResponseProps> {
    try {
        // Tentando fazer login com o email e senha fornecidos
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("login: ",userCredential);

        const user = userCredential.user;
        
        // Aqui, você pode acessar o token de autenticação do usuário
        const token = await user.getIdToken(); // Obter o token de autenticação
        console.log( user?.uid);
        // Retornando as informações do usuário autenticado
        return {
            token: token,
            user: {
                name: user.displayName, // Pode ser null, dependendo do que foi configurado no Firebase
                email: user.email,
                uuid: user.uid,
            }
        };
    } catch (error: any) {
        // Capturando e lidando com erros de autenticação
        console.error("Erro ao fazer login:", error.message);
        throw new Error(error.message); // Lança o erro para que possa ser tratado externamente
    }
}
