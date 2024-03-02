/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */
import React from 'react';
import child_process from 'child_process';
import path from 'path';

export interface IButtonProps {
  children?: React.ReactNode;
  props?: any;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

const RunComparisonButton: React.FC<IButtonProps> = ({
  children,
  onClick = () => {
    console.log('process starts');
    console.log(__dirname);
    const process = child_process.execFileSync(
      path.join(
        'C:/Users/user/Desktop/kinect-electron-react-boilerplate/src/process_ollie',
        'processing_app.exe',
      ),
    );
    console.log(process);
    console.log('process has ended');
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

export default RunComparisonButton;
