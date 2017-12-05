import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={classnames(styles.item, styles.active)}>MY CONFS</div>
        <div className={styles.item}>EVENTS</div>
      </div>
    </div>
  )
}

export default Navbar
