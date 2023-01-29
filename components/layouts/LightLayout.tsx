import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode,
}

export const LightLayout: FC<Props> = ({ children }) => {
  return (
    <div style={{ backgroundColor: 'gray', padding: '10px', borderRadius: '5px' }}>
      <div>
        {children}
      </div>
    </div>
  );
};