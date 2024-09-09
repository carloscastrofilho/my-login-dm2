import { createContext, useState} from "react"
import LogingUser  from "../services/authService";

interface AuthContextData {
    signed: boolean;
    user: object | null;
    SignIn(): Promise<void>;
    SignOut(): void;
  }
  
const AuthContext = createContext<AuthContextData>({} as AuthContextData);
  
// Criando um provedor de contexto
export const AuthProvider = ({children}: {children: React.ReactNode}) => {  
    const [ user, setUser ]= useState<object | null>(null);

    async function SignIn(){
        const response = await LogingUser();
        setUser(response.user);
    }

    async function SignOut(){
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{signed: !!user, user,SignIn, SignOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;