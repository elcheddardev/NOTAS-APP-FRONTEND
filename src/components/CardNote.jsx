import { SquarePen, Trash } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
// id
const CardNote  = ({ title, description, date, id, onDelete}) => {
  const navigate = useNavigate();


  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${import.meta.env.VITE_APP_URL}/api/notes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      toast.success("Nota eliminada");
      onDelete(id);
    } catch (error) {
      console.error(error);
      toast.error("Error al eliminar la nota");
    }
  };


   return (
    <div className="card bg-base-300 w-full">
  <div className="card-body">
    <h2 className="card-title text-accent font-bold lg:text-2xl">
      {title} 
      </h2>
    <p className="text-amber-50">{description}
      </p>
    <div className="flex justify-between items-center mt-6">
      <time dateTime={date}>{date}</time>
      <div className="flex gap-4">
        <SquarePen className="text-white cursor-pointer" onClick={() => navigate(`/editNote/${id}`)}></SquarePen>
        <Trash className="text-red-400 cursor-pointer" onClick={handleDelete}></Trash>
      </div>
    </div>
  </div>
</div>
   )
}

export default CardNote;