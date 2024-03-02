import { Redirect, Route, Router } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import PortadaPage from './pages/PortadaPage';
import PersonajesPage from './pages/PersonajesPage';
import MomentosPage from './pages/MomentosPage';
import AcercaDePage from './pages/AcercaDePage';
import EnMiVidaPage from './pages/EnMiVidaPage';
import ContratamePage from './pages/ContratamePage';
import Navbar from './components/Navbar'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <Navbar />
    <IonReactRouter>
      <IonRouterOutlet>
      <Route path="/" component={Home} exact />
      <Route path="/portada" component={PortadaPage} exact />
      <Route path="/personajes" component={PersonajesPage} exact />
      <Route path="/momentos" component={MomentosPage} exact />
      <Route path="/acerca-de" component={AcercaDePage} exact />
      <Route path="/en-mi-vida" component={EnMiVidaPage} exact />
      <Route path="/contratame" component={ContratamePage} exact />
    </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
