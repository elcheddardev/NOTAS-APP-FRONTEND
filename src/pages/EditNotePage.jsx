import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import NoteForm from "../components/NoteForm";


const apiURL = import.meta.env.VITE_APP_URL;


const EditNotePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);


  useEffect(() => {
    const fetchNote = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${apiURL}/api/notes/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setInitialData(res.data);
      } catch (error) {
        console.error(error);
        toast.error("Error al cargar la nota");
      }
    };
    fetchNote();
  }, [id]);


  const handleEdit = async (note) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(`${apiURL}/api/notes/${id}`, note, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (res.status >= 200 && res.status < 300) {
        toast.success("¡Nota actualizada!");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error al actualizar la nota");
    }
  };


  if (!initialData) return <span>Cargando...</span>;


  return (
    <div>
      <h1 className="text-orange-200 text-8xl text-center mb-10">Edit Note</h1>
      <NoteForm
        onSubmit={handleEdit}
        initialData={initialData}
      />
    </div>
  );
};


export default EditNotePage;