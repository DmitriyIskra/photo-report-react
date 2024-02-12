import styles from './css/style.module.css';

import { NavLink } from 'react-router-dom';

export default function NavItem({data, callback}) {
  return (
    <NavLink className={callback}>{data}</NavLink>
  )
}
