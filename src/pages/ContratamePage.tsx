import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { logoGithub, logoLinkedin, globe } from 'ionicons/icons'; // Importa los iconos de ionicons/icons

interface Contacto {
  nombre: string;
  ocupacion: string;
  github: string;
  linkedin: string;
  portfolio: string;
  imagen: string;
}

const ramyContacto: Contacto = {
  nombre: 'Ramy Campusano Volquez',
  ocupacion: 'Software Developer',
  github: 'https://github.com/Daniels-not',
  linkedin: 'https://www.linkedin.com/in/ramy-campusano-volquez-a110ba14a/',
  portfolio: 'https://portfolio-daniels-not.vercel.app/',
  imagen: 'https://avatars.githubusercontent.com/u/68081630?s=400&u=6b3cb738a6012557d65874bebad868c3aa8d3dd6&v=4'
};

const ContratamePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contratame</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
          <img className="w-32 h-32 rounded-full mx-auto" src={ramyContacto.imagen} alt="Imagen de perfil" />
          <h2 className="text-center text-2xl font-semibold mt-3">{ramyContacto.nombre}</h2>
          <p className="text-center text-gray-600 mt-1">{ramyContacto.ocupacion}</p>
          <div className="flex justify-center mt-5">
            <a href={ramyContacto.github} className="text-blue-500 hover:text-blue-700 mx-3">
              Github
            </a>
            <a href={ramyContacto.linkedin} className="text-blue-500 hover:text-blue-700 mx-3">
              linkedin
            </a>
            <a href={ramyContacto.portfolio} className="text-blue-500 hover:text-blue-700 mx-3">
              Web
            </a>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ContratamePage;
