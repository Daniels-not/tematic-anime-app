import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

interface Serie {
  nombre: string;
  nombreJapones: string;
  emision: string;
  temporada: string;
  cantidadCapitulos: number;
  sinopsis: string;
  portada: string;
}

const serieDarlingInFranXX: Serie = {
  nombre: 'Darling in the FranXX',
  nombreJapones: 'ダーリン・イン・ザ・フランキス',
  emision: 'TV 2018',
  temporada: 'Invierno 2018',
  cantidadCapitulos: 24,
  sinopsis: `Los chicos sueñan con poder volar algún día por el infinito cielo, aunque son dolorosamente conscientes de cuán lejos está el cielo más allá del cristal que les impide salir volando. En un futuro distante la humanidad ha creado Plantation, una ciudad fortaleza móvil construida sobre las ruinas del mundo y en la que ha florecido la civilización. En la ciudad hay barracones especiales para pilotos llamados Mistilteinn, aunque popularmente se los conoce como "jaulas de pájaros". Allí es donde viven estos chicos... sin saber nada del mundo exterior, sin poder sentir nunca el enorme cielo. Su única misión en la vida siempre fue luchar. Sus enemigos son los misteriosos organismos gigantes conocidos como Kyoryu, a los cuales enfrentan con los robots llamados FRANXX. No saben hacer otra cosa y no se lo plantean, pues creen que este es su propósito único en la vida. entre ellos está un niño al que en su día consideraron un niño prodigio: Código 016, Hiro. Sin embargo, ahora es un fracaso y se lo considera innecesario. Quienes no pueden pilotar un FRANXX es como si no existieran. Un día aparece ante Hiro una chica llamada Zero Two y de su cabeza surgen dos cuernos. "Te encontré, cariño mío".`,
  portada: 'https://tioanime.com/uploads/portadas/2897.jpg'
};

const AcercaDePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sobre el Anime</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
          <img className="w-32 h-32 rounded-full mx-auto" src={serieDarlingInFranXX.portada} alt="Portada serie" />
          <h2 className="text-center text-2xl font-semibold mt-3">{serieDarlingInFranXX.nombre}</h2>
          <p className="text-center text-gray-600 mt-1">{serieDarlingInFranXX.nombreJapones}</p>
          <div className="flex justify-center mt-5">
            <p><strong>Emisión:</strong> {serieDarlingInFranXX.emision}</p>
            <p className="mx-3"><strong>Temporada:</strong> {serieDarlingInFranXX.temporada}</p>
            <p><strong>Capítulos:</strong> {serieDarlingInFranXX.cantidadCapitulos}</p>
          </div>
          <div className="ml-2 mt-5">
            <h3 className="text-xl font-semibold">Sinopsis</h3>
            <p className="text-gray-600 mt-2">{serieDarlingInFranXX.sinopsis}</p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AcercaDePage;
