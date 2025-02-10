import Inicio from "../Pages/Inicio"
import InicioRouters from "../../routes/Inicio.routes";
import { Routes, Route } from "react-router-dom";

const Header = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<InicioRouters />}>
                    <Route path="/" element={<Inicio />} />
                </Route>
            </Routes>
        </>
    );
}

export default Header;
