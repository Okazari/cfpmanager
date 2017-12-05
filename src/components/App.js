import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import Navbar from './Navbar'
import styles from './styles.scss'
import store, { history } from '../redux/store'

const confs = [
  { title: "Il était une fois un plugin-atom", description: "Au travers d'une petite histoire, découvrez comment créer votre premier plug in atom", submitted: 5},
  { title: "LinuxKit: le Linux façon Ikea", description: "Then cats take over the world relentlessly pursues moth, and have my breakfast spaghetti yarn.", submitted: 3},
  { title: "Une image docker sans docker ?", description: "The dog smells bad destroy couch as revenge but catch mouse and gave it as a present, chase imaginary bugs. Hopped up on catnip run in circles, but poop on grasses for stare at ceiling light cough furball into food bowl then scratch owner for a new one yet groom yourself 4 hours - checked,", submitted: 7},
  { title: "Propulsez votre application Angular avec GraphQL et Apollo", description: "Meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat thug cat for bleghbleghvomit my furball really tie the room together. ", submitted: 2},
  { title: "Component Design : Bonnes pratiques et patterns avancés", description: "Munch on tasty moths swat at dog. Thug cat kitten is playing with dead mouse and hunt anything that moves sit on the laptop stick butt in face, and hunt by meowing loudly at 5am next to human slave food dispenser", submitted: 0},
  { title: "Vos applications collaboratives avec GraphQL", description: "our pillow is now my pet bed eats owners hair then claws head yet scratch the postman wake up lick paw wake up owner meow meow scream for no reason at 4 am hate dog, yet give attitude, or purr for no reason. ", submitted: 9},
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
