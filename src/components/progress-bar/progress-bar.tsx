import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import styles from './progress-bar.module.css';
import { each } from 'lodash';
import { Transition } from 'react-transition-group';
const { progressBar } = styles;

interface ProgressBarProps {
  /**
   * 0 to 100
   */
  percent: number;
  title?: string;
  inProp?: boolean;
}

const transitionStyles = {
  entering: { width: '0' },
  entered: {},
  exiting: {},
  exited: {},
  unmounted: {},
} as const;

export const ProgressBar = ({ percent, title, inProp }: ProgressBarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(
    function updateWidth() {
      if (ref.current) {
        setWidth((percent / 100) * ref.current.clientWidth);
      }
    },
    [ref.current]
  );

  return (
    <Transition in={inProp} timeout={500} nodeRef={nodeRef}>
      {(state) => (
        <div className="flex flex-row gap-2 items-center" ref={nodeRef}>
          {title && <div>{title}</div>}
          <div className={progressBar} ref={ref}>
            <div
              style={{
                width: width,
                transition: `width 500ms ease-in-out`,
                ...transitionStyles[state],
              }}
            ></div>
          </div>
        </div>
      )}
    </Transition>
  );
};
