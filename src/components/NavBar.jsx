import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { PlusIcon } from "lucide-react";

const NavBar = () => {
   const navigate = useNavigate();


  const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/login");
};
   return (
    
     <header className="navbar bg-base-300 py-8 mb-10">
        <div className="w-full max-w-\[1000px] mx-auto flex items-center justify-between">
            <NavLink className="text-3xl font-bold" to="/">
            TodoApp
            </NavLink>
            <NavLink to="/createNote" className="btn btn-soft btn-primary font-bold text-[1.1em]">
                <PlusIcon/>
               Crear una Nota
           </NavLink>
           <button onClick={handleLogout} className="btn btn-soft btn-error font-bold text-[1.1em]">
  Cerrar sesión
</button>
        </div>
     </header>
   )
};

export default NavBar;
