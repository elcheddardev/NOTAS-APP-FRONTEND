import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateNotePage from "./pages/CreateNotePage";
import EditNotePage from "./pages/EditNotePage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-3.5">
    <Routes>
     <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>}></Route>
     <Route path="/login" element={<LoginPage></LoginPage>}></Route>
     <Route path="/createNote" element={<ProtectedRoute><CreateNotePage /></ProtectedRoute>}></Route>
     <Route path="/editNote/:id" element={<ProtectedRoute><EditNotePage /></ProtectedRoute>}></Route>
    </Routes>
    <ToastContainer
    position="bottom-right"
    autoClose={3000}
    // "Progess" fue un tributo involuntario a la velocidad de desarrollo. Corregido.
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    theme="light"
    />
    </div> 
    
  );
}

export default App;
