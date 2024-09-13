import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonRouterOutlet } from '@ionic/react';
import './Tab1.css';
import { Route } from 'react-router';
import ExpenseComponent from './expense/Expense';
import Rent from './rent/Rent';
import AddRentForm from './form/AddRentForm';



const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ledgers</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList inset={true}>
          <IonItem routerLink="/home/ledgers/expense">
            <IonLabel>Expense Ledger</IonLabel>
          </IonItem>
          <IonItem routerLink="/home/ledgers/income">
            <IonLabel>Income Ledger</IonLabel>
          </IonItem>
          <IonItem routerLink="/home/ledgers/capital">
            <IonLabel>Capital Ledger</IonLabel>
          </IonItem>
          <IonItem routerLink="/home/ledgers/asset">
            <IonLabel>Asset Ledger</IonLabel>
          </IonItem>
          <IonItem routerLink="/home/ledgers/liability">
            <IonLabel>Liability Ledger</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
