import { ReactNode } from 'preact/compat';
import { Particles } from '../components/particles/particles';
import html2pdf from 'html2pdf.js';

interface LayoutProps {
  header?: ReactNode;
  content?: ReactNode;
  bottom?: ReactNode;
}

export const Layout = ({ header, content, bottom }: LayoutProps) => {
  return (
    <div className="flex justify-center">
      <div
        className="flex-col bg-white relative"
        id="element-to-print"
        style={{
          width: '210mm',
        }}
      >
        <div className="relative z-10">{header}</div>
        <div className="relative z-10">{content}</div>
        {bottom}
        <Particles className="absolute left-0 top-0 w-full h-full" />
      </div>
      <button
        onClick={() => {
          var element = document.getElementById('element-to-print');
          var opt = {
            margin: 0,
            filename: 'myfile.pdf',
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { scale: 1 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
          };

          // New Promise-based usage:
          html2pdf().set(opt).from(element).save();
        }}
        type="button"
        class="fixed bottom-2 right-2 z-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Print CV as PDF
      </button>
    </div>
  );
};
