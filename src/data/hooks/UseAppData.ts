
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const UseAppData = () => {
    const useData = useContext(AppContext) 
    return useData 
}