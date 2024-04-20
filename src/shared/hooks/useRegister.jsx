import { useState } from "react";
import toast from 'react-hot-toast';
import { registerRequest, loginRequest } from "../../services/api.js";

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false)
    
    const register = async(email, username, password) => {
        setIsLoading(true)
        const user = {
            email, username, password
        }
        //Consultar al API
        const response = await registerRequest(user)
        setIsLoading(false)

        if(response.error){
            return toast.error(
                response?.e?.response?.data ||
                'Error general al intentar registrar al usuario. Intenta de nuevo.'
            )
        }
        console.log(response)
    }
    return {
        register,
        isLoading
    }
}

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false)

    const login = async(email, username, password) => {
        setIsLoading(true)
        const user = {
            email, password
        }
        const response = await loginRequest(user)
        setIsLoading(false)

        if(response/*.error*/){
            return toast.error(
                response?.e?.response?.data ||
                'Error general al intentar iniciar sesión. Intenta de nuevo.'
            )
        }
        console.log(response)
    }
    return {
        login,
        isLoading
    }
}