import { ReactNode } from 'preact/compat';

interface CardProps {
  children: ReactNode;
}
export const Card = ({ children }: CardProps) => {
  return (
    <div className="text-left border-l-4 border-l-[#7f8c8d] pl-6">
      {children}
    </div>
  );
};
