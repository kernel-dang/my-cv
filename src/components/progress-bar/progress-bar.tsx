import { useEffect, useRef, useState } from 'preact/hooks';
import styles from './progress-bar.module.css';
const { progressBar } = styles;

interface ProgressBarProps {
  /**
   * 0 to 100
   */
  percent: number;
  title?: string;
}

export const ProgressBar = ({ percent, title }: ProgressBarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(
    function updateWidth() {
      if (ref.current) {
        setWidth((percent / 100) * ref.current.clientWidth);
      }
    },
    [ref.current]
  );

  return (
    <div className="flex flex-row gap-2 items-center">
      {title && <div>{title}</div>}
      <div className={progressBar} ref={ref}>
        <div style={{ width: width }}></div>
      </div>
    </div>
  );
};
