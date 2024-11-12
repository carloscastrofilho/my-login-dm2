import { db } from './database/firebase'
import { set, push, ref, get, update } from "firebase/database";
import {Person } from "../context/person"

const schenaName = "person" ;

// novo usuario no banco
export async function personNew(personData: Person) {
    const newDocRef = push(ref(db, schenaName))
    try {
            await set(newDocRef, {
                name: personData.name,
                email: personData.email,
                uuidauth: personData.uuidauth,
                telefone: personData.telefone,        
                imageurl: personData.avatar
            });
    
            return { data: { id: newDocRef.key, ...personData } }; 
        
    } catch (error) {
        return { success: false, message: `falha ao Incluir o registro : ${error.message}` }
    }            
}

export async function personGetAll() {
    const usersArray = [];
    const dbref = ref(db, schenaName );
    const snapshot = await get(dbref);
    if (snapshot.exists()) {
        usersArray.push(...Object.values(snapshot.val())); // Adiciona os usuários ao array
        //console.log(usersArray);
        const jsonResponse = JSON.stringify(usersArray); // Converte para JSON
        return jsonResponse;
    } else {
        return null;
    }
}

// Consulta usuário por ID - -O7ZXIe4AN_r6_3x_MSQ
export async function personGetById(id: string) {
    const dbref = ref(db, `${schenaName}/${id}`);
    const snapshot = await get(dbref);
    if (snapshot.exists()) {
        const userData = snapshot.val();
        //console.log(userData);
        return userData;
    } else {
        return { error: "Registro não encontrado" };
    }
}

// Consulta usuário por uuidauth
export async function personGetByIdAuth(uuidauth: string) {
    const dbref = ref(db, `${schenaName}`);
    const snapshot = await get(dbref);
    if (snapshot.exists()) {
        const data = snapshot.val();
        // Percorre os registros para encontrar o uuidauth correspondente
        const person = Object.values(data)
            .find((person: any) => person.uuidauth === uuidauth);
        if (person) {
            //console.log(person);
            return person;
        } else {
            return { error: "Registro não encontrado" };
        }
    } else {
        return { error: "Nenhum registro encontrado" };
    }
}

// Atualiza usuário por ID
export async function personUpdate(id: string, updatedData: Partial<{ 
    username: string; useremail: string; userimageUrl: string; telefone: string; }>) {
    const dbref = ref(db, `${schenaName}}/${id}`);
    try {
        await update(dbref, updatedData);
        return { success: true, message: "Registro atualizado com sucesso" };
    } catch (error:any) {
        return { success: false, message: `Falha ao atualizar o registro: ${error.message}` };
    }
}
