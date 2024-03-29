import { ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = string;

const electronIpc = {
  sendMessage(channel: Channels, ...args: unknown[]) {
    ipcRenderer.send(channel, ...args);
  },
  on(channel: Channels, func: (...args: unknown[]) => void) {
    const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
      func(...args);
    ipcRenderer.on(channel, subscription);

    return () => {
      ipcRenderer.removeListener(channel, subscription);
    };
  },
  once(channel: Channels, func: (...args: unknown[]) => void) {
    ipcRenderer.once(channel, (_event, ...args) => func(...args));
  },
};

window.electronIpc = electronIpc;

export type ElectronIpc = typeof electronIpc;
