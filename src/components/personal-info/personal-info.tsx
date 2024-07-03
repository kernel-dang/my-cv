import birthdayCakeIcon from '../../assets/birthday-cake.png';
import styles from './personal-info.module.css';
const { statusContainer } = styles;
import openLabelIconUrl from '../../assets/open-sign.png';
import closeLabelIconUrl from '../../assets/closed-sign.png';
import { Transition } from 'react-transition-group';
import { useEffect, useState } from 'preact/hooks';

const openLabelTransition = {
  entering: { rotate: 'y 360deg' },
  entered: { rotate: 'y 360deg', zIndex: 2 },
  exiting: {},
  exited: {},
  unmounted: {},
} as const;

const closeLabelTransition = {
  entering: { rotate: 'y 180deg' },
  entered: { rotate: 'y 180deg', zIndex: 1 },
  exiting: {},
  exited: {},
  unmounted: {},
} as const;

export const PersonalInfo = () => {
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setInProp(true);
    }, 1000);
  }, []);
  return (
    <div className="flex-1 flex flex-col items-center">
      <div className="text-5xl font-medium mt-10 text-nowrap">
        DANG THANH NHAN
      </div>
      <div className="font-medium flex justify-center items-center gap-2 mt-2">
        <div>KernelD</div>
        <img
          src={birthdayCakeIcon}
          alt="Birthday cake"
          className="size-6"
        ></img>
        <div>1994</div>
      </div>

      <div className={statusContainer}>
        <Transition in={inProp} timeout={500}>
          {(state) => {
            return (
              <div className="relative">
                <img
                  src={openLabelIconUrl}
                  className="size-10 relative"
                  style={{
                    rotate: 'y 180deg',
                    transition: `rotate 1s ease-in-out`,
                    ...openLabelTransition[state],
                  }}
                ></img>
                <img
                  src={closeLabelIconUrl}
                  className="size-10"
                  style={{
                    transition: `rotate 1s ease-in-out`,
                    position: 'relative',
                    top: -35,
                    ...closeLabelTransition[state],
                  }}
                ></img>
              </div>
            );
          }}
        </Transition>
        <span className="font-medium text-nowrap mt-2">
          FULL-STACK .NET & REACT POSITION
        </span>
      </div>
    </div>
  );
};
