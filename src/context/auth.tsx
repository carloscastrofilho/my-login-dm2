import { createContext, useContext, useEffect, useState} from "react"
import LogingUser, {CreateUser, LoginProps, LogoutUser }  from "../services/authService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";

export interface User {
    name: string;
    email: string;
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    loading : boolean ;
    SignIn(email:string, password:string): Promise<void>;
    CreateAccount(email:string, password:string): Promise<void>;
    SignOut(): void;
  }
  
const AuthContext = createContext<AuthContextData>({} as AuthContextData);
  
// Criando um provedor de contexto
export const AuthProvider = ({children}: {children: React.ReactNode}) => {  
    const [ user, setUser ] = useState<User | null>(null);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        async function loadStoreageData(){
            const storageUser = await AsyncStorage.getItem("@RNAuth:user");
            const storageToken = await AsyncStorage.getItem("@RNAuth:token");  

            // gera um atrazo de 2s na aplicacção
            // await new Promise((resolve) => setTimeout(resolve, 2000)) ;

            if( storageToken && storageUser){
                setUser(JSON.parse(storageUser));
                // insere em todas as requisicoes via api o cabecalho com o token
                api.defaults.headers['Authorization'] = `Bearer ${storageToken}`;
                setLoading(false);
            }
        }
    },[])

    async function SignIn(email:string, password:string) {
       const response = await LogingUser( email, password );
       setUser(response?.user);
        // insere em todas as requisicoes via api o cabecalho com o token
        api.defaults.headers['Authorization'] = `Bearer ${response.token}`;
        await AsyncStorage.setItem("@RNAuth:user", JSON.stringify(response.user))
        await AsyncStorage.setItem("@RNAuth:token", response.token)
        
    }

    async function SignOut(){
        const response = await LogoutUser();
        await AsyncStorage.clear().then( ()=> {
            setUser(null);
        });
    }

    async function CreateAccount(email:string, password:string){
        const response = await CreateUser( email, password );
        setUser(response.user);        
        await AsyncStorage.setItem("@RNAuth:user", JSON.stringify(response.user))
        await AsyncStorage.setItem("@RNAuth:token", response.token)
        return user
    }    

    return (
        <AuthContext.Provider value={{signed: !!user, user, loading, SignIn, SignOut, CreateAccount}}>
            {children}
        </AuthContext.Provider>
    )
}


// nosso proprio hoock
export function useAuth(){
    const context = useContext(AuthContext);
    return context ;
}

// export default AuthContext;

