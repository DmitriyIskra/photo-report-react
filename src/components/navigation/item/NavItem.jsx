import styles from './css/style.module.css';

import { NavLink } from 'react-router-dom';

export default function NavItem({data, callback}) {
  const {name, link} = data
  return (
    <NavLink to={link} className={callback}>{name}</NavLink>
  )
} 
