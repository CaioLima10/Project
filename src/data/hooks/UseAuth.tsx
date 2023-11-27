
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function UseAuth(){
    const user = useContext(AuthContext)
    return user
}