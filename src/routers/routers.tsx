import { useContext } from "react";
import AppRoutes from "./appRoutes";
import AuthRoutes from "./authRoutes";
import AuthContext from "../context/auth";

export default function Routers() {
  const {signed} = useContext(AuthContext);
  return (
    signed ?  <AuthRoutes /> :<AppRoutes/>    
  );
}