
// Hooks
import { Children } from "react";
import { useUser } from "../hooks/useUser"
import Login from "../pages/Login";


export const PrivateRoute = () => {

    const { user } = useUser();

    return user ? Children
                : <>
                <p className="text-red-500">No tienes permiso para ver esta ruta!</p>
                <Login />
                </>

}