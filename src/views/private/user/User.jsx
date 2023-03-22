import React from 'react'
import Sidebar from "../../../Components/Sidebar"
import { Routes, Route } from "react-router"
import EditarInfo from "../../private/user/EditarInfo";
import MisPedidos from "../../private/user/Pedidos";

const Usuario = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='content'>
                <Routes>
                    <Route path="/editar_info" element={<EditarInfo />} />
                    <Route path="/pedidos"  element={<MisPedidos />} />
                </Routes>
            </div>
        </div>
    )
}
export default Usuario