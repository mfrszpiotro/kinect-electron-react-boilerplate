import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  props?: any;
}

function SelectFilepathButton({ children, ...props }: ButtonProps) {
  const handleOnClick = () => {
    window.myApi.ipcRenderer.once('ipc-example', (arg) => {
      console.log(arg);
    });
    window.myApi.ipcRenderer.sendMessage('ipc-example', ['ping']);
  };

  return (
    <button type="button" onClick={handleOnClick} {...props}>
      {children}
    </button>
  );
}

export default SelectFilepathButton;
