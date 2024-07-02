import birthdayCakeIcon from '../../assets/birthday-cake.svg';
import styles from './personal-info.module.css';
const { statusContainer } = styles;
import openLabelIconUrl from '../../assets/open-sign.png';

export const PersonalInfo = () => {
  return (
    <div className="flex-1 flex flex-col items-center">
      <div className="text-5xl font-medium mt-10">DANG THANH NHAN</div>
      <div className="flex justify-center items-center gap-2">
        <img
          src={birthdayCakeIcon}
          alt="Birthday cake"
          className="size-6"
        ></img>
        <div>1994</div>
      </div>
      <div className={statusContainer}>
        <img src={openLabelIconUrl} className="size-10"></img>
        <span className={'font-medium'}>
          LOOKING FOR FULL-STACK .NET & REACT POSITION
        </span>
      </div>
    </div>
  );
};
