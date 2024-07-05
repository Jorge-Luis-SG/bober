import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./context/AuthContext"
import Logo from './assets/logo.svg'

export const ProtectedRoute = () => {
    const { loading, isAuthenticated } = useAuth()
    if(loading) return <>
    
    <div className="flex h-screen justify-center items-center animate-pulse">
        <img className="sm:max-w-72 w-full h-full" src={Logo} alt="Bober's logo" />
    </div>
    </>
    if(!isAuthenticated) return <Navigate to={'/login'} replace />

    return <Outlet />
}
