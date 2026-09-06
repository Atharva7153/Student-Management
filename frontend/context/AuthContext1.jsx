import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

export const AuthContext1 = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const getCurrentUser = async () => {
        try {
            const response = await api.get("/me");
            setUser(response.data.user);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (email,password)=>{
        const response = await api.post("/login", {
            email,
            password
        })

        setUser(response.data.user)
    }

    const logout = async ()=>{
        await api.get("/logout")
        setUser(null)
    }


    useEffect(() => {
        getCurrentUser();
    }, []);

    return (
        <AuthContext1.Provider
            value={{
                user,
                setUser,
                loading,
                getCurrentUser,
                login,
                logout
            }}
        >
            {children}
        </AuthContext1.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext1);
};