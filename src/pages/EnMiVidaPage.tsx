import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const EnMiVidaPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Por que este anime ? </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-justify-content-center ion-align-items-center bg-gray-100">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Por que este anime ?</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="flex justify-center items-center h-full">
          <div className="w-3/4 md:w-1/2 lg:w-1/3">
            <iframe
              className="w-full h-96 md:h-80 lg:h-96"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EnMiVidaPage;
