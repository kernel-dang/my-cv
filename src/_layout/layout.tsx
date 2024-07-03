import { ReactNode } from 'preact/compat';
import { Particles } from '../components/particles/particles';
import { toPixelData } from 'html-to-image';
import { jsPDF } from 'jspdf';
interface LayoutProps {
  header?: ReactNode;
  content?: ReactNode;
  bottom?: ReactNode;
}

export const Layout = ({ header, content, bottom }: LayoutProps) => {
  const printToPdf = () => {
    var element = document.getElementById('element-to-print') as HTMLDivElement;

    toPixelData(element as any)
      .then(function (data) {
        const imageData = new ImageData(
          data,
          element.offsetWidth,
          element.offsetHeight
        );

        const pdfDoc = createPdfDocument();
        const { width: pdfPageWidth, height: pdfPageHeight } =
          pdfDoc.internal.pageSize;

        pdfDoc.addImage({
          imageData: imageData,
          x: 0,
          y: 0,
          width: pdfPageWidth,
          height: pdfPageHeight,
        });

        pdfDoc.save('DangThanhNhan_CV.pdf');
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  };
  return (
    <div className="flex justify-center w-fit">
      <div
        className="flex-col bg-white relative"
        id="element-to-print"
        style={{
          width: '210mm',
          minWidth: '210mm'
        }}
      >
        <div className="relative z-10">{header}</div>
        <div className="relative z-10">{content}</div>
        {bottom}
        <Particles className="absolute left-0 top-0 w-full h-full" />
      </div>
      <button
        type="button"
        onClick={printToPdf}
        class="fixed hidden bottom-2 right-2 z-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Print CV as PDF
      </button>
    </div>
  );
};

const createPdfDocument = () => {
  // Default export is a4 paper, portrait, using millimeters for units
  const doc = new jsPDF({
    format: 'a4',
    unit: 'mm',
  });

  return doc;
};
