import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import Navbar from './Navbar'
import styles from './styles.scss'
import store, { history } from '../redux/store'

const confs = [
  { title: "Il était une fois un plugin-atom", description: "Au travers d'une petite histoire, découvrez comment créer votre premier plug in atom", submitted: 5},
  { title: "Il était une fois un plugin-atom", description: "Au travers d'une petite histoire, découvrez comment créer votre premier plug in atom", submitted: 3},
  { title: "Il était une fois un plugin-atom", description: "Au travers d'une petite histoire, découvrez comment créer votre premier plug in atom", submitted: 7},
  { title: "Il était une fois un plugin-atom", description: "Au travers d'une petite histoire, découvrez comment créer votre premier plug in atom", submitted: 2},
  { title: "Il était une fois un plugin-atom", description: "Au travers d'une petite histoire, découvrez comment créer votre premier plug in atom", submitted: 0},
  { title: "Il était une fois un plugin-atom", description: "Au travers d'une petite histoire, découvrez comment créer votre premier plug in atom", submitted: 9},
]

const App = () => {
  return (
    <Provider store={store} >
      <ConnectedRouter history={history}>
        <div className={styles.container}>
          <Navbar />
          <div className={styles.content}>
            {
              confs.map((conf, index) => {
                return (
                  <div key={index} className={styles.conf}>
                    <div>
                      <div className={styles.title}>{conf.title}</div>
                      <div className={styles.description}>{conf.description}</div>
                    </div>
                    <div className={styles.infos}>
                      Submitted to
                      <span className={styles.submitted}>{conf.submitted}</span>
                      events
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </ConnectedRouter>
    </Provider>
  )
}


export default App
