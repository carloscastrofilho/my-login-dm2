import { createContext, useEffect, useState} from "react"
import LogingUser  from "../services/authService";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface LoginProps {
    email: string;
    password: string;
}
interface AuthContextData {
    signed: boolean;
    user: object | null;
    SignIn(email:string, password:string): Promise<void>;
    SignOut(): void;
  }
  
const AuthContext = createContext<AuthContextData>({} as AuthContextData);
  
// Criando um provedor de contexto
export const AuthProvider = ({children}: {children: React.ReactNode}) => {  
    const [ user, setUser ]= useState<object | null>(null);

    useEffect(() => {
        async function loadStoreageData(){
            const storageUser = await AsyncStorage.getItem("@RNAuth:user");
            const storageToken = await AsyncStorage.getItem("@RNAuth:token");    

            if( storageToken && storageUser){
                setUser(JSON.parse(storageUser));
            }
        }
    })

    async function SignIn(email:string, password:string) {
       const response = await LogingUser( email, password );
        setUser(response.user);
        await AsyncStorage.setItem("@RNAuth:user", JSON.stringify(response.user))
        await AsyncStorage.setItem("@RNAuth:token", response.token)
        
    }

    async function SignOut(){
        await AsyncStorage.setItem("@RNAuth:user", '');
        await AsyncStorage.setItem("@RNAuth:token", '');
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{signed: !!user, user, SignIn, SignOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;