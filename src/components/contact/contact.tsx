import homeIcon from '../../assets/home.svg';
import phoneIcon from '../../assets/phone.svg';
import emailIcon from '../../assets/email.svg';
import facebookIcon from '../../assets/facebook.svg';
import linkedinIcon from '../../assets/linkedin.svg';

export const Contact = () => {
  return (
    <div className="p-6 flex flex-col gap-2">
      <div className="flex gap-4">
        <img src={homeIcon} alt="Home icon" className="size-6" />
        <div>17, 588 street, 9 district, Ho Chi Minh city</div>
      </div>
      <div className="flex gap-4">
        <img src={phoneIcon} alt="Phone icon" className="size-6"></img>
        <div>+84 963 240 344</div>
      </div>
      <div className="flex gap-4">
        <img src={emailIcon} alt="Email icon" className="size-6"></img>
        <div>kerneldang@gmail.com</div>
      </div>
      <div className="flex gap-4">
        <img src={facebookIcon} alt="Phone icon" className="size-6"></img>
        <a href="https://facebook.com/kernel.dang">facebook.com/kernel.dang</a>
      </div>
      <div className="flex gap-4">
        <img src={linkedinIcon} alt="Phone icon" className="size-6"></img>
        <a href="https://www.linkedin.com/in/kernel-dang" target="_blank">
          linkedin.com/in/kernel-dang
        </a>
      </div>
    </div>
  );
};
