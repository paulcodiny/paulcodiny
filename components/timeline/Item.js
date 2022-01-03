import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Item.module.css';

export const Item = ({ date, icon, title, children, side = 'left' }) => (
  <div className={`item ${side} ${styles['item']} ${styles[side]}`}>
    <div className={styles['date']}>{date}</div>
    {icon ? (
      <FontAwesomeIcon className={styles['icon']} icon={icon}/>
    ) : (
      <i className={styles['icon']} />
    )}
    <div className={styles['content']}>
      <h2>{title}</h2>
      {children}
    </div>
  </div>
);
