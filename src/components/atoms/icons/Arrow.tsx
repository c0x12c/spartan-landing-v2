import { base } from '@/styles/colors';
import * as React from 'react';

interface IArrowIconProps {
  color?: string;
  width?: string;
  height?: string;
}

export const ArrowIcon: React.FunctionComponent<IArrowIconProps> = ({ color, width, height }) => {
  return (
    <svg
      className="arrow-icon"
      width={width ?? '18'}
      height={height ?? '18'}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 9L15 9ZM15 9L10.5 13.5ZM15 9L10.5 4.5Z" fill="#FCFCFD" />
      <path
        d="M3 9L15 9M15 9L10.5 13.5M15 9L10.5 4.5"
        stroke={color ?? base.white}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
