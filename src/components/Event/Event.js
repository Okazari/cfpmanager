import React from 'react'
import classnames from 'classnames/bind'
import styles from './styles.scss'

const cx = classnames.bind(styles)

const statusLabels = ['not yet', 'open', 'pending', 'closed']

const Event = ({ name, description, submitted, status, accepted }) => {
  return (
    <div className={styles.event}>
      <div>
        <div className={styles.title}>{name}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.infos}>
        <div>
          <div>
            <span className={styles.emphasis}>{submitted}</span>
            conferences Z submitted
          </div>
          <div>
            <span className={cx(styles.emphasis, styles.good)}>{accepted}</span>
            accepted
          </div>
        </div>
        <div>
          Status :
          <span className={cx(styles.status, { alert: status === 3, good: status === 1 })}>{statusLabels[status]}</span>
        </div>
      </div>
    </div>
  )
}

export default Event
