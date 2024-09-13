import { IonPage, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonBackButton, IonButtons } from '@ionic/react';
import { Route } from 'react-router';
import './Expense.css';
import Rent from '../rent/Rent';

interface ContainerProps {
  name: string;
}

const ExpenseComponent: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Accounts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList inset={true}>
          <IonItem routerLink="/home/ledgers/expense/purchase">
            <IonLabel>Purchase Account</IonLabel>
          </IonItem>
          <IonItem routerLink="/home/ledgers/expense/rent">
            <IonLabel>Rent Account</IonLabel>
          </IonItem>
          <IonItem routerLink="/home/ledgers/expense/electricity">
            <IonLabel>Electricity Account</IonLabel>
          </IonItem>
          <IonItem routerLink="/home/ledgers/expense/maintenance">
            <IonLabel>Maintenance Account</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ExpenseComponent;
