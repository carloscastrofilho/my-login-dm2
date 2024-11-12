import { db } from './database/firebase'
import { set, push, ref, get, update } from "firebase/database";

// novo usuario no banco
export function newUserApp() {
    const newDocRed = push(ref(db, "usuarios"))
    set(newDocRed, {
        username: "josesilva.gmail",
        useremail: "josesilva@gmail.com",
        userimageUrl: "",
        telefone: "16-9999-1111",
        uuid: "2"
    })
        .then(() => {
            return { success: true, message: "usuario criado com sucesso" }
        })
        .catch((error) => {
            return { success: false, message: `falha ao Incluir o ususario : ${error.message}` }
        });
}

export async function getAllUser() {
    const usersArray = [];
    const dbref = ref(db, "usuarios");
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
export async function getByIdUser(id: string) {
    const dbref = ref(db, `usuarios/${id}`);
    const snapshot = await get(dbref);
    if (snapshot.exists()) {
        const userData = snapshot.val();
        //console.log(userData);
        return userData;
    } else {
        return { error: "Usuário não encontrado" };
    }
}

// Atualiza usuário por ID
export async function updateUser(id: string, updatedData: Partial<{ 
    username: string; useremail: string; userimageUrl: string; telefone: string; }>) {
    const dbref = ref(db, `usuarios/${id}`);
    try {
        await update(dbref, updatedData);
        return { success: true, message: "Usuário atualizado com sucesso" };
    } catch (error:any) {
        if ( error ) {
            return { success: false, message: `Falha ao atualizar o usuário: ${error.message}` };
        }
        
    }
}
