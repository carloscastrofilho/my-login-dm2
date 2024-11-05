import { set } from "firebase/database";
import { createContext, useState, useContext} from "react"
import { personNew, personGetByIdAuth } from "../services/personService"

export interface Person {
    name: string;
    email: string;
    uuidauth: string;
    telefone: string;
    observacao?: string;
    avatar?:string;
}

interface PersonContextData {
    person: Person | null;
    PersonCreate( dataPerson: Person ): Promise<void | null>;
    PersonGetUuidAuth(uuid:string): Promise<void | null>;
    PersonClean(): void;
  }
  
export const PersonContext = createContext<PersonContextData>({} as PersonContextData);
  
export const PersonProvider = ({children}: {children: React.ReactNode}) => {  
    const [ person, setPerson ]= useState<Person | null>(null);

    async function PersonGetUuidAuth( uuid: string){        
        const dataPerson = await personGetByIdAuth(uuid);
        if (dataPerson){
            setPerson(dataPerson);
            return dataPerson;
        }        
    }
    
    async function PersonCreate(dataPerson: Person){
        const personData = await personNew(dataPerson);
        const response : Person = {
            name: personData.data?.name,
            email: personData.data?.email,
            telefone: personData.data?.telefone,
            avatar: personData.data?.imageurl,
            uuidauth: personData.data?.uuidauth,
            observacao: ""
        }            
        setPerson(response);        
        return response;
    }

     // 3. executa no SignOut do usario e contexts\auth.ts
     async function PersonClean(){
        setPerson(null);
        console.log("context/person: " , person);
        return null;
     }    

    return (
        <PersonContext.Provider value={{person, PersonCreate, PersonGetUuidAuth,PersonClean}}>
            {children}
        </PersonContext.Provider>
    )
}

// nosso proprio hoock
export function usePerson(){
    const context = useContext(PersonContext);
    return context ;
}
