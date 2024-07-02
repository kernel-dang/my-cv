import classNames from 'classnames';
import { Avatar } from '../avatar/avatar';
import { Contact } from '../contact/contact';
import { PersonalInfo } from '../personal-info/personal-info';
import styles from './header.module.css';
const { container } = styles;

export const Header = () => {
  return (
    <div className={classNames('flex', 'flex-row', container)}>
      <Avatar></Avatar>
      <PersonalInfo></PersonalInfo>
      <Contact></Contact>
    </div>
  );
};
