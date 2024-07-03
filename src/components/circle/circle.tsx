import classNames from 'classnames';
import {
  HTMLProps,
  ReactNode,
  useRef,
} from 'preact/compat';
import { Transition } from 'react-transition-group';

type CircleProps = {
  radius: number;
  title: ReactNode;
  opacity?: number;
  inProp?: boolean;
} & HTMLProps<HTMLDivElement>;

const transitionStyles = {
  entering: { scale: '0.1 0.1' },
  entered: {},
  exiting: {},
  exited: {},
  unmounted: {},
} as const;

export const Circle = ({
  radius,
  title,
  opacity = 0.7,
  className,
  style,
  inProp,
  ...rest
}: CircleProps) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <Transition nodeRef={nodeRef} in={inProp} timeout={500}>
      {(state) => (
        <div
          ref={nodeRef}
          className={classNames(
            'flex justify-center items-center rounded-full bg-[#0F67B1]',
            className
          )}
          style={{
            ...(style as any),
            width: radius * 2,
            height: radius * 2,
            opacity: opacity,
            transformOrigin: 'center',
            transition: `scale 500ms ease-in-out`,
            ...transitionStyles[state],
          }}
          {...rest}
        >
          <div className="text-white">{title}</div>
        </div>
      )}
    </Transition>
  );
};
