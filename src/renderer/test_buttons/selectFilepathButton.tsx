/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */
import React from 'react';

export interface IButtonProps {
  children?: React.ReactNode;
  props?: any;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

const SelectFilepathButton: React.FC<IButtonProps> = ({
  children,
  onClick = () => {
    window.myApi.ipcRenderer.once('ipc-example', (arg) => {
      console.log(arg);
    });
    window.myApi.ipcRenderer.sendMessage('ipc-example', ['ping']);
  },
  ...props
}) => {
  // @ts-ignore
  const handleOnClick = (e: MouseEvent<Element>) => {
    onClick(e);
  };

  return (
    <button onClick={handleOnClick} {...props}>
      {children}
    </button>
  );
};

export default SelectFilepathButton;
