import { createContext, useState} from "react"

interface UserContextData {
    user: object | null;
  }
  
const UserContext = createContext<UserContextData>({} as UserContextData);
  
export const UserProvider = ({children}: {children: React.ReactNode}) => {  
    const [ user, setUser ]= useState<object | null>(null);

    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;