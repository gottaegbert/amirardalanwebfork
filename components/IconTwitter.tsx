import { type FC } from 'react';

type IconTwitterProps = {
  size: number;
};

const IconTwitter: FC<IconTwitterProps> = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 135 134"
      className="socialIcon"
    >
      <defs>
        <clipPath id="b">
          <rect width="135" height="134" />
        </clipPath>
      </defs>
      <g id="a" clipPath="url(#b)">
        <path
          d="M60,0a60,60,0,1,0,60,60A60,60,0,0,0,60,0ZM90.33,48.225c.915,20.2-14.15,42.72-40.82,42.72A40.633,40.633,0,0,1,27.5,84.49a28.892,28.892,0,0,0,21.26-5.945A14.394,14.394,0,0,1,35.34,68.57a14.4,14.4,0,0,0,6.49-.245A14.382,14.382,0,0,1,30.31,54.06a14.327,14.327,0,0,0,6.505,1.795A14.383,14.383,0,0,1,32.37,36.68a40.764,40.764,0,0,0,29.6,15.005,14.372,14.372,0,0,1,24.475-13.1,28.646,28.646,0,0,0,9.12-3.485,14.42,14.42,0,0,1-6.315,7.945A28.649,28.649,0,0,0,97.5,40.78,28.826,28.826,0,0,1,90.33,48.225Z"
          transform="translate(8 7)"
        />
      </g>
    </svg>
  );
};

export default IconTwitter;
