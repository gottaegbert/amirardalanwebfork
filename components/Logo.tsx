import React, { FC } from 'react';
import { css } from '@emotion/react';
import { useRouteStatus } from '@/hooks/useLoadingIndicator';

type LogoProps = {
  animate: boolean;
};

const Logo: FC<LogoProps> = ({ animate }) => {
  const isLoading = useRouteStatus();

  const animationStyle = css({
    animation: isLoading
      ? 'rotate360 2s infinite ease-in-out'
      : 'rotateToStart 2s ease-out',
    animationFillMode: isLoading ? 'none' : 'reverse',
    '@keyframes rotate360': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
    '@keyframes rotateToStart': {
      '100%': { transform: 'rotate(360deg)' },
    },
  });

  return (
    <svg
      width={25}
      height={25}
      viewBox="0 0 135 135"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={animate ? animationStyle : ''}
    >
      <path
        d="M118.424 135L0 16.5759L14.5759 2L133 120.424L118.424 135Z"
        fill="var(--color-heading)"
      />
      <path
        d="M1.04472e-06 120.424L118.424 2L133 16.5759L14.5759 135L1.04472e-06 120.424Z"
        fill="var(--color-heading)"
      />
      <rect
        x="66.6821"
        y="2"
        width="19.2449"
        height="19.2449"
        transform="rotate(45 66.6821 2)"
        fill="var(--color-heading)"
      />
      <rect
        x="66.6821"
        y="107.678"
        width="19.2449"
        height="19.2449"
        transform="rotate(45 66.6821 107.678)"
        fill="var(--color-heading)"
      />
    </svg>
  );
};

export default React.memo(Logo);
