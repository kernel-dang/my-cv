import classNames from 'classnames';
import { HTMLProps, ReactNode } from 'preact/compat';

type CircleProps = {
  radius: number;
  title: ReactNode;
  opacity?: number;
} & HTMLProps<HTMLDivElement>;

export const Circle = ({
  radius,
  title,
  opacity = 0.7,
  className,
  style,
  ...rest
}: CircleProps) => {
  return (
    <div
      className={classNames(
        'flex justify-center items-center rounded-full bg-[#0F67B1]',
        className
      )}
      style={{
        ...(style as any),
        width: radius * 2,
        height: radius * 2,
        opacity: opacity,
      }}
      {...rest}
    >
      <div className="text-white">{title}</div>
    </div>
  );
};
