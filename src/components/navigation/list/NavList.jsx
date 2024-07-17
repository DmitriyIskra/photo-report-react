import styles from './css/style.module.css';

import nav from '../../../base/nav';
import NavItem from '../item/NavItem';

import { v4 } from 'uuid';

export default function NavList() {

  const navType = ({isActive}) => isActive ? `${styles.active} ${styles.link}` : `${styles.noActive} ${styles.link}`;

  return (
    <div className={styles.list}>
      {
        // nav.map( item => <NavLink className={navType} key={v4()} to={item.link}>{item.name}</NavLink> )
        nav.map( item => <NavItem key={v4()} data={item} callback={navType}/> )
      }
    </div>
  )
}
