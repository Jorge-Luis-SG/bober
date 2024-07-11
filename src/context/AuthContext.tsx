import { createContext, useContext, useEffect, useState } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import { FieldValues } from "react-hook-form";
// import Cookies from 'js-cookie'

type AppContextType = {
    signUp: (user: FieldValues) => void;
    signIn: (user: FieldValues) => void;
    user: null | FieldValues;
    isAuthenticated: boolean;
    errors: any,
    loading: boolean
}

export const AuthContext = createContext<AppContextType | null>(null)

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context
}

export const AuthProvider = ({ children }: { children: React.ReactNode}) => {

    const [user, setUser] = useState<FieldValues | null>(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState<any>([])
    const [loading, setLoading] = useState(true)

    const signUp = async (user: FieldValues) => {
        try {        
            const res = await registerRequest(user)
            console.log(res.data)
            localStorage.setItem('token', res.data.token)
            setUser(res.data)
            setIsAuthenticated(true) 
        } catch (error: any) {
            console.log(error)
            // setErrors(error.response.data)
        }
    }

    const signIn = async (user: FieldValues) => {
        try {
            const res = await loginRequest(user)
            console.log(res.data)
            localStorage.setItem('token', res.data.token)
            setUser(res.data.user)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 2000)

            return () => clearTimeout(timer)
        }
    }, [errors])

    useEffect(() => {
        const checkLogin = async () => {
            // const cookies = Cookies.get()
            const token =  localStorage.getItem('token')
            

            // if(!cookies.token) {
            if(!token) {
                setIsAuthenticated(false)
                setUser(null)
                return setLoading(false)
            }
            try {
                // const res = await verifyTokenRequest(cookies.token)
                console.log(token)
                const res = await verifyTokenRequest({token})
                console.log(res.status)
                if(res.status === 401) {
                    setIsAuthenticated(false);
                    setUser(null)
                    return setLoading(false)    
                }
                
                setIsAuthenticated(true)
                setUser(res.data)
                setLoading(false)
            } catch (error) {
                setIsAuthenticated(false)
                setUser(null)
                setLoading(false)
            }
        }
        
        checkLogin()
    }, [])

    return (
        <AuthContext.Provider value={{
            signUp,
            signIn,
            user,
            isAuthenticated,
            errors,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    )
}