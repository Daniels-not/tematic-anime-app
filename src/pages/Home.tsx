import { IonContent, IonHeader, IonPage, IonRouterLink, IonTitle, IonToolbar } from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Principal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Principal</IonTitle>
          </IonToolbar>
        </IonHeader>
        <center className='my-4'>
          <div className="flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div
              className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img
                src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/06/Darling-in-the-Franxx-Main-Title-Promo.jpg"
                alt="ui/ux review check" />
              <div
                className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                  Darling in the Franxx
                </h5>
                <p
                  className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="-mt-0.5 h-5 w-5 text-yellow-700">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"></path>
                  </svg>
                  4.0
                </p>
              </div>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
              Los chicos sueñan con poder volar algún día por el infinito cielo, aunque son dolorosamente conscientes de cuán lejos está el cielo más allá del cristal que les impide salir volando.
              </p>
              <div className="inline-flex flex-wrap items-center gap-3 mt-8 group">
                <span
                  className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                    <img src="https://www.svgrepo.com/show/514440/action-blocks.svg" alt="" className='w-5 h-5'/>
                </span>
                <span
                  className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                    <img src="https://www.svgrepo.com/show/424498/adventure-extreme-mountain.svg" alt="" className='w-5 h-5'/>
                </span>
                <span
                  className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                    <img src="https://www.svgrepo.com/show/479242/romance-2.svg" alt="" className='w-5 h-5'/>
                </span>
                <span
                  className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M19.5 6h-15v9h15V6z"></path>
                    <path fill-rule="evenodd"
                      d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z"
                      clip-rule="evenodd"></path>
                  </svg>
                </span>
                <span
                  className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                    <img src="https://www.svgrepo.com/show/518747/podverse.svg" alt="" className='w-5 h-5'/>
                </span>
              </div>
            </div>
            <div className="p-6 pt-3">
              <IonRouterLink routerLink="/portada" >
                <button
                  className="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button">
                  Ver Mas
                </button>
              </IonRouterLink>
            </div>
          </div>
        </center>
      </IonContent>
    </IonPage>
  );
};

export default Home;
