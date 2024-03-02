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
    try {
      child_process.execFileSync(
        path.join(
          'C:/Users/piotrowskmarcel/Desktop/repos/kinect-electron-react-boilerplate/src/process_ollie',
          'processing_app.exe',
        ),
        [
          'C:/Users/piotrowskmarcel/Desktop/repos/process_ollie/data/interim_time/ok/jump_20231106120823716.csv',
          'C:/Users/piotrowskmarcel/Desktop/repos/process_ollie/data/interim_time/good/jump_20231106121119882.csv',
        ],
      );
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(`${error.name}: ${error.message}`);
      }
    }
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
