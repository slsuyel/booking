// import { CSSProperties, ReactNode, MouseEventHandler } from 'react';

// interface ButtonProps {
//   onClick?: MouseEventHandler<HTMLButtonElement>;
//   style?: CSSProperties;
//   className?: string;
//   children?: ReactNode;
// }

// const SButton = ({ onClick, style, className, children }: ButtonProps) => {
//   return (
//     <button
//       onClick={onClick}
//       style={{ width: '100%', height: 50, ...style }}
//       className={className}
//     >
//       <div className="shimmer" />
//       {children}
//     </button>
//   );
// };

// SButton.defaultProps = {
//   onClick: () => {},
//   style: {},
//   className: '',
//   children: <span className="text-black">Button</span>,
// };

// export default SButton;
import { CSSProperties, ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
}

const SButton = ({
  onClick = () => {}, // Default to a no-op function
  style = {}, // Default to an empty object
  className = '', // Default to an empty string
  children = <span className="text-black">Button</span>, // Default children
}: ButtonProps) => {
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

export default SButton;
