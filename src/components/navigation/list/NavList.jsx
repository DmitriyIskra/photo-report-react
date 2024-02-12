import styles from './css/style.module.css';

import nav from '../../../base/nav';
import NavItem from '../item/NavItem';

export default function NavList() {

  const navType = isActive ? `${styles.active}` : `${noActive}`;

  return (
    <div className={styles.list}>
      {
        nav.map( item => <NavItem data={item} callback={navType}/> )
      }
    </div>
  )
}
