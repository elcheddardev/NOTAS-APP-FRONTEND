import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import NoteForm from "../components/NoteForm";
console.log(import.meta.env.VITE_APP_URL)
const CreateNotePage = () => {
  const navigate = useNavigate();

  const handleCreate = async (note) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_APP_URL}/api/notes`, note);

      if (res.status >= 200 && res.status < 300) {
        toast.success("¡Nota creada con éxito!");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error al crear la nota");
    }
  };

  return (
    <div>
      <h1 className="text-orange-200 text-8xl text-center mb-10">Create Note</h1>
      <NoteForm
        onSubmit={handleCreate}
        initialData={{ title: "", description: "" }}
      />
    </div>
  );
};

export default CreateNotePage;