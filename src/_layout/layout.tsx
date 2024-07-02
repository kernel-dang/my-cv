import { ReactNode } from 'preact/compat';

interface LayoutProps {
  header?: ReactNode;
  content?: ReactNode;
  bottom?: ReactNode;
}

export const Layout = ({ header, content, bottom }: LayoutProps) => {
  return (
    <div className="flex-col bg-white">
      {header}
      {content}
      {bottom}
    </div>
  );
};
