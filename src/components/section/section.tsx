import { ReactNode } from 'preact/compat';

interface SectionProps {
  title: string;
  iconUrl: string;
  children: ReactNode;
}

export const Section = ({ title, iconUrl, children }: SectionProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2 items-center">
        <div className="border-2 border-[#3c6382] rounded-full p-1">
          <img src={iconUrl} alt="Icon" className="size-6"></img>
        </div>
        <div className="font-medium uppercase text-[#3c6382]">{title}</div>
      </div>
      {/* separator */}
      <div className="border-t-4 border-t-[#3c6382]"></div>
      <div>{children}</div>
    </div>
  );
};
