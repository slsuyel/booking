import { CSSProperties, ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
}

const SButton = ({ onClick, style, className, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{ width: '100%', height: 50, ...style }}
      className={className}
    >
      <div className="shimmer" />
      {children}
    </button>
  );
};

SButton.defaultProps = {
  onClick: () => {},
  style: {},
  className: '',
  children: <span className="text-black">Button</span>,
};

export default SButton;
