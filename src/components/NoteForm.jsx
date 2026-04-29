import { useEffect, useState } from "react";

const NoteForm = ({ onSubmit, initialData }) => {
  const [note, setNotes] = useState(initialData);

  // Actualiza el estado si los datos iniciales cambian
  useEffect(() => {
    setNotes(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setNotes({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(note);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-base-300 rounded-lg max-w-4xl mx-auto p-10">
      <input
        className="block w-full mb-8 input lg focus:ring-0 focus:outline-0 border-0"
        placeholder="titulo"
        type="text"
        id="title"
        name="title"
        value={note.title}
        onChange={handleChange}
        required
      />
      <textarea
        className="input lg:input-lg resize-y w-full mb-8 textarea focus:outline-0 border-0"
        name="description"
        id="description"
        value={note.description}
        placeholder="descripcion de la tarea"
        onChange={handleChange}
        required
      ></textarea>
      <button className="btn btn-soft btn-primary">guardar</button>
    </form>
  );
};

export default NoteForm;