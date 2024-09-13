import { IonToolbar, IonTitle, IonHeader, IonContent, IonFab, IonFabButton, IonIcon, useIonRouter, IonBackButton, IonButtons, IonPage } from '@ionic/react';
import './Rent.css';
import { add } from 'ionicons/icons';

interface ContainerProps {
  name: string;
}

const Rent: React.FC = () => {
  const router = useIonRouter();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Rent</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
          You have 0 rental properties
        </div>
        <div className="addFabIcon">
          <IonFab>
            <IonFabButton routerLink="/home/ledgers/expense/rent/form">
              <IonIcon icon={add}></IonIcon>
            </IonFabButton>
          </IonFab>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Rent;
