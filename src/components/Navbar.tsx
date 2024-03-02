
import { IonContent, 
  IonHeader, 
  IonMenu, 
  IonMenuToggle, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonRouterLink, 
  IonIcon,
  IonButtons,
  IonMenuButton
} from '@ionic/react';

import { homeOutline, 
  personOutline, 
  imagesOutline, 
  informationCircleOutline, 
  videocamOutline, 
  briefcaseOutline 
} from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonMenu contentId="main-content">
        <div className="text-center mt-5">
          <IonRouterLink routerLink="/">
            <img
              src="https://wallpapercave.com/wp/wp10169381.png"
              alt="avatar"
              className="relative inline-block h-[110px] w-[110px] !rounded-full object-cover object-center"
            />
          </IonRouterLink>
        </div>
        <IonContent className="ion-padding">
          <div className="py-4">
            {/* <IonMenuToggle>
              <IonRouterLink routerLink="/portada" className="text-black flex items-center hover:bg-blue-500 hover:text-white px-4 py-4 rounded text-lg">
                <IonIcon icon={homeOutline} className="mr-2 text-lg" />
                Portada
              </IonRouterLink>
            </IonMenuToggle> */}
            <IonMenuToggle>
              <IonRouterLink routerLink="/personajes" className="text-black flex items-center hover:bg-blue-500 hover:text-white px-4 py-4 rounded text-lg">
                <IonIcon icon={personOutline} className="mr-2 text-lg" />
                Personajes
              </IonRouterLink>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonRouterLink routerLink="/momentos" className="text-black flex items-center hover:bg-blue-500 hover:text-white px-4 py-4 rounded text-lg">
                <IonIcon icon={imagesOutline} className="mr-2 text-lg" />
                Momentos
              </IonRouterLink>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonRouterLink routerLink="/acerca-de" className="text-black flex items-center hover:bg-blue-500 hover:text-white px-4 py-4 rounded text-lg">
                <IonIcon icon={informationCircleOutline} className="mr-2 text-lg" />
                Acerca de
              </IonRouterLink>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonRouterLink routerLink="/en-mi-vida" className="text-black flex items-center hover:bg-blue-500 hover:text-white px-4 py-4 rounded text-lg">
                <IonIcon icon={videocamOutline} className="mr-2 text-lg" />
                En mi vida
              </IonRouterLink>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonRouterLink routerLink="/contratame" className="text-black flex items-center hover:bg-blue-500 hover:text-white px-4 py-4 rounded text-lg">
                <IonIcon icon={briefcaseOutline} className="mr-2 text-lg" />
                Contrátame
              </IonRouterLink>
            </IonMenuToggle>
          </div>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">Tap the button in the toolbar to open the menu.</IonContent>
      </IonPage>
    </>
  );
}

export default Example;
