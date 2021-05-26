import React from 'react';

import { IllustrationProps } from './types';

export const Keyhole: React.FC<IllustrationProps> = ({
  className,
  height,
  width,
}) => (
  <svg
    className={className}
    height={height}
    width={width}
    viewBox="0 0 88 136"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Keyhole Icon</title>
    <path
      d="M87.5 44.0034V44.0037C87.5019 52.0199 85.2866 59.8805 81.099 66.7165C76.9114 73.5525 70.9145 79.0975 63.7715 82.7386L63.4255 82.9149L63.5107 83.2937L75.2288 135.415H12.8034L24.5055 83.2936L24.5905 82.9148L24.2447 82.7385C17.3555 79.2275 11.5269 73.944 7.35915 67.432C3.19143 60.92 0.835233 53.415 0.533202 45.6899C0.23117 37.9647 1.99423 30.2988 5.64081 23.4814C9.28738 16.664 14.6857 10.9417 21.2797 6.90371C27.8738 2.86574 35.4253 0.658102 43.1564 0.50818C50.8876 0.358259 58.519 2.27148 65.2648 6.05077C72.0105 9.83005 77.6266 15.3388 81.5349 22.0097C85.4431 28.6805 87.5022 36.2724 87.5 44.0034Z"
      stroke="#10162F"
    />
    <path
      d="M43.9998 54.1991C58.3095 54.1991 69.9097 48.4002 69.9097 41.2468C69.9097 34.0934 58.3095 28.2944 43.9998 28.2944C29.6901 28.2944 18.0898 34.0934 18.0898 41.2468C18.0898 48.4002 29.6901 54.1991 43.9998 54.1991Z"
      stroke="#10162F"
      strokeMiterlimit="10"
    />
    <path
      d="M54.8271 47.723C57.2121 47.723 59.1454 45.79 59.1454 43.4056C59.1454 41.0211 57.2121 39.0881 54.8271 39.0881C52.4422 39.0881 50.5088 41.0211 50.5088 43.4056C50.5088 45.79 52.4422 47.723 54.8271 47.723Z"
      fill="#10162F"
      stroke="#10162F"
      strokeMiterlimit="10"
    />
  </svg>
);