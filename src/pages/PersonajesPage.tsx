import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

interface Character {
  name: string;
  image: string;
  personage: {
    gender: string;
    hairColor: string;
  };
}

const characters: Character[] = [
  {
    name: 'Hero',
    image: 'https://i.pinimg.com/736x/da/6d/9c/da6d9c250f7e1bb5208126c98ddeab14.jpg',
    personage: {
      gender: 'Male',
      hairColor: 'Black',
    },
  },
  {
    name: 'Zero Two',
    image: 'https://preview.redd.it/t19zwnnl76v01.png?width=960&crop=smart&auto=webp&s=1d54d457b08e445b4c7ab169c25bdc0e4d9b542d',
    personage: {
      gender: 'Female',
      hairColor: 'Pink',
    },
  },
  {
    name: 'Goro',
    image: 'https://i.pinimg.com/736x/80/2e/c0/802ec0173370e8d88d64d8e91fc00c72.jpg',
    personage: {
      gender: 'Male',
      hairColor: 'Blonde',
    },
  },
];

const PersonajesPage: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const handleCharacterClick = (character: Character) => {
    setSelectedCharacter(character);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Personajes</IonTitle>
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
                  <img alt={character.name} className="block h-64 w-full object-cover" src={character.image} />
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
        {selectedCharacter && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-80 flex justify-center items-center">
            <div className="max-w-lg bg-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">{selectedCharacter.name}</h2>
              <img src={selectedCharacter.image} alt={selectedCharacter.name} className="block h-64 w-full object-cover mb-4" />
              <p><strong>Gender:</strong> {selectedCharacter.personage.gender}</p>
              <p><strong>Hair Color:</strong> {selectedCharacter.personage.hairColor}</p>
              <button className="mt-4 text-white bg-red-500 px-4 py-2 rounded" onClick={() => setSelectedCharacter(null)}>Close</button>
            </div>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default PersonajesPage;
