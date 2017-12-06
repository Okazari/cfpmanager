import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)
const isActive = (location, label) => location.pathname.includes(label)
const menus = [
  {
    label: 'My Confs',
    link: '/myconfs',
  },
  {
    label: 'Events',
    link: '/events',
  },
]

const Navbar = ({ push, location }) => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        {
          menus.map(menu => {
            return (
              <div
                key={menu.label}
                onClick={() => push(menu.link)}
                className={cx(styles.item, { active: isActive(location, menu.link) })}
              >
                {menu.label}
              </div>
            )
          })
       }
      </div>
    </div>
  )
}

export default Navbar
