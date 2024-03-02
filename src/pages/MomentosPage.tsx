import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonModal, IonButton } from '@ionic/react';

interface Character {
  name: string;
  videoUrl: string;
  description: string;
  coverImage: string; 
}

const characters: Character[] = [
  {
    name: 'Hero',
    videoUrl: 'https://www.youtube.com/embed/Brxo1ftf_Ww',
    description: "Hero descubre quien es Zero Two realmente",
    coverImage: 'https://i.ytimg.com/vi/Brxo1ftf_Ww/maxresdefault.jpg', 
  },
  {
    name: 'Zero Two',
    videoUrl: 'https://www.youtube.com/embed/Mj5WPU9y9fc',
    description: "Zero Two se da cuenta que ha estado utilizando la vitalidad de Hero",
    coverImage: 'https://i.ytimg.com/vi/Mj5WPU9y9fc/maxresdefault.jpg', 
  },
  {
    name: 'Goro',
    videoUrl: 'https://www.youtube.com/embed/HBQs7jjUo0E',
    description: "Goro descubre lo difícil que es ser líder de equipo",
    coverImage: 'https://i.ytimg.com/vi/HBQs7jjUo0E/maxresdefault.jpg', 
  },
];

const MomentosPage: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const handleCharacterClick = (character: Character) => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Momentos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {characters.map((character, index) => (
              <div key={index} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <article
                  className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
                  onClick={() => handleCharacterClick(character)}
                >
                  <img
                    alt={character.name}
                    className="block h-auto w-full object-cover"
                    src={character.coverImage} // Use cover image as thumbnail
                  />
                  <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                      <a className="no-underline hover:underline text-black" href="#">
                        {character.name}
                      </a>
                    </h1>
                  </header>
                </article>
              </div>
            ))}
          </div>
        </div>
        <IonModal isOpen={selectedCharacter !== null} backdropDismiss={false}>
          <IonContent className="ion-padding">
            <div className="rounded">
              <iframe
                width="100%"
                height="400"
                src={selectedCharacter?.videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="my-3">
              <p className="ion-text-center ion-text-bold"><b>Descripción:</b> {selectedCharacter?.description}</p>
              <p className="ion-text-center ion-text-bold"><b>Nombre del personaje: </b>{selectedCharacter?.name}</p>
              <IonButton expand="block" onClick={closeModal}>Cerrar Video</IonButton>
            </div>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default MomentosPage;
