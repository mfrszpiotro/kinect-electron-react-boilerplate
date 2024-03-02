import { createRoot } from 'react-dom/client';
import App from './App';
import {} from './preload';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

// SECURITY WARNING: Using native modules in renderer, ContextIsolation is disabled
// calling IPC exposed from preload script
window.myApi.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.myApi.ipcRenderer.sendMessage('ipc-example', ['ping']);
