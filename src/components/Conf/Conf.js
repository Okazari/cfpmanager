import React from 'react'
import classnames from 'classnames/bind'
import styles from './styles.scss'

const cx = classnames.bind(styles)

const statusLabels = ['draft', 'ready']

const Conf = ({ title, description, submitted, status }) => {
  return (
    <div className={styles.conf}>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.infos}>
        <div>
          Submitted to
          <span className={styles.submitted}>{submitted}</span>
          events
        </div>
        <div>
          Status :
          <span className={cx(styles.status, { draft: status === 0 })}>{statusLabels[status]}</span>
        </div>
      </div>
    </div>
  )
}

export default Conf
