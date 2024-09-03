import AppRouters from "./appRouters";
import AuthRouters from "./authRouters";

export default function Routers(){
    const user = null;
    return(
        user == null ? <AppRouters /> : <AuthRouters />
    )
}