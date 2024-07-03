import { useEffect } from 'preact/hooks';
import { particlesConfig } from './particles-config';
import { HTMLProps } from 'preact/compat';
type ParticleProps = HTMLProps<HTMLDivElement>;

export const Particles = (props: ParticleProps) => {
  useEffect(function initParticles() {
    setTimeout(() => {
      particlesJS('particles-js', particlesConfig);
    }, 1000);
  }, []);

  return <div id="particles-js" {...props}></div>;
};
