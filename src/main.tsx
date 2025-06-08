
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { displayConsoleEasterEggs } from './utils/consoleEasterEggs'

// Display console Easter eggs for fellow developers
displayConsoleEasterEggs();

createRoot(document.getElementById("root")!).render(<App />);
