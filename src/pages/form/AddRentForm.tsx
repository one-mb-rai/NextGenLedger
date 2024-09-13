import { IonPage, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSelect, IonSelectOption, IonDatetime, IonDatetimeButton, IonModal, IonButton, IonButtons, IonInput, IonBackButton, IonTextarea } from '@ionic/react';
import './AddRentForm.css';
import { useRef, useState } from 'react';

interface ContainerProps {
  name: string;
}

const AddRentForm: React.FC = () => {
  const [startDate, setStartDatetime] = useState<string | null>(null);
  const [endDate, setEndDatetime] = useState<string | null>(null);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Add Rented Property</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Rented Details</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonSelect label="Rented Item type" labelPlacement="floating">
                <IonSelectOption value="movable">Mobvable Item</IonSelectOption>
                <IonSelectOption value="immovable">Stationary Item</IonSelectOption>
                <IonSelectOption value="subscription">Online Subscription</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>Select Start Date: </IonLabel>
              <IonDatetimeButton datetime="startDateTime">
              </IonDatetimeButton>
              <IonModal keepContentsMounted={true}>
                <IonDatetime
                  presentation="date"
                  showDefaultTitle
                  showDefaultButtons
                  doneText="All set"
                  cancelText="Never mind"
                  onIonChange={(val: any) => setStartDatetime(val.detail.value)}
                  showClearButton
                  id="startDateTime">
                </IonDatetime>
              </IonModal>
            </IonItem>
            <IonItem>
              <IonLabel>Select End Date: </IonLabel>
              <IonDatetimeButton datetime="endDateTime">
              </IonDatetimeButton>
              <IonModal keepContentsMounted={true}>
                <IonDatetime
                  presentation="date"
                  showDefaultTitle
                  showDefaultButtons
                  doneText="All set"
                  cancelText="Never mind"
                  onIonChange={(val: any) => setEndDatetime(val.detail.value)}
                  showClearButton
                  id="endDateTime ">
                </IonDatetime>
              </IonModal>
            </IonItem>
            <IonItem>
              <IonTextarea label="Enter Details" labelPlacement="floating" placeholder="(Ex: Address, Reg. No)"></IonTextarea>
            </IonItem>
            <IonItem>
              <IonInput label="Title for Item" placeholder="Any Name"></IonInput>
            </IonItem>
            <IonButton expand="block" shape='round'>Save</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage >
  );
};

export default AddRentForm;
