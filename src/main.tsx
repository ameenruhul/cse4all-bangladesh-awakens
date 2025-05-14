
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// Remove the direct Firebase import as we're now handling it properly in the client file

createRoot(document.getElementById("root")!).render(<App />);
