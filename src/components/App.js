import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import Navbar from './Navbar'
import Conf from './Conf'
import Event from './Event'
import styles from './styles.scss'
import store, { history } from '../redux/store'

const confs = [
  { status:0, title: "Il était une fois un plugin-atom", description: "Au travers d'une petite histoire, découvrez comment créer votre premier plug in atom", submitted: 5},
  { status:1, title: "LinuxKit: le Linux façon Ikea", description: "Then cats take over the world relentlessly pursues moth, and have my breakfast spaghetti yarn.", submitted: 3},
  { status:1, title: "Une image docker sans docker ?", description: "The dog smells bad destroy couch as revenge but catch mouse and gave it as a present, chase imaginary bugs. Hopped up on catnip run in circles, but poop on grasses for stare at ceiling light cough furball into food bowl then scratch owner for a new one yet groom yourself 4 hours - checked,", submitted: 7},
  { status:1, title: "Propulsez votre application Angular avec GraphQL et Apollo", description: "Meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat thug cat for bleghbleghvomit my furball really tie the room together. ", submitted: 2},
  { status:0, title: "Component Design : Bonnes pratiques et patterns avancés", description: "Munch on tasty moths swat at dog. Thug cat kitten is playing with dead mouse and hunt anything that moves sit on the laptop stick butt in face, and hunt by meowing loudly at 5am next to human slave food dispenser", submitted: 0},
  { status:0, title: "Vos applications collaboratives avec GraphQL", description: "our pillow is now my pet bed eats owners hair then claws head yet scratch the postman wake up lick paw wake up owner meow meow scream for no reason at 4 am hate dog, yet give attitude, or purr for no reason. ", submitted: 9},
]

const events = [
  { status: 3, name: 'BreizhCamp 2017', description: "Le BreizhCamp, c'est 3 jours de conférence et de hacker-space à Rennes. Créé en 2011 à l’initiative du BreizhJUG, nous sommes en cours de planification de la 7ème edition. Le BreizhCamp propose de se faire rencontrer une communauté de développeurs et d’experts, avec un contenu à la carte sur plus de 100 thèmes présentés. Chaque participant est libre de suivre les sujets qui ont retenu son attention ou de préférer les ateliers pour mettre en pratique les connaissances acquises.", submitted: 25, accepted: 8 },
  { status: 3, name: 'Devfest Nantes 2017', description: "LE festival des développeurs organisé par des développeurs ! Tout sur le Mobile, IoT, Web et Cloud présenté par des experts du monde entier pour une des plus grandes conférences techniques.", submitted: 32, accepted: 12 },
  { status: 1, name: 'Devoxx France', description: "Issue de la communauté Java, Devoxx France s'est ouvert au fil des ans et accueille les développeurs en général. Du Web à la Sécurité, en passant par le Cloud Computing, notre comité de sélection trie et sélectionne 230 propositions, sur 900 candidatures.", submitted: 9001, accepted: 7 },
]

const App = () => {
  return (
    <Provider store={store} >
      <ConnectedRouter history={history}>
        <div className={styles.container}>
          <Navbar />
          <Switch>
            <Route path="/myconfs">
              <div className={styles.content}>
                {confs.map((conf, index) => <Conf key={conf.title} {...conf} />)}
              </div>
            </Route>
            <Route path="/events">
              <div className={styles.content}>
                {events.map((event, index) => <Event key={event.name} {...event} />)}
              </div>
            </Route>
            <Route>
              <Redirect to="/myconfs" />
            </Route>
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  )
}


export default App
