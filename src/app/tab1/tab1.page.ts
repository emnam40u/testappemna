import { Component } from '@angular/core';

// Define the Family interface outside of the component class
interface Family {
  lastName: string;
  address: string;
  phoneNumber: string;
  Menu: string;
  Prix: number;
  Nb: number;
  Date: Date; // Specific date to feed the family
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  // Define the families to be fed today and other days of the week
  todayFamilies: Family[] = [];
  otherDaysFamilies: Family[] = [];

  constructor() {
    // Initialize the families data (example)
    this.initializeFamilies();
  }

  // Method to initialize families data (example)
  initializeFamilies() {
    // Example families data
    const todayDate = new Date();
    this.todayFamilies = [
      { lastName: 'Famille1', address: 'Kassas Chaaben', phoneNumber: '55521234', Menu: 'Couscous au poulet', Prix: 6.000, Nb: 6, Date: todayDate },
      { lastName: 'Famille2', address: 'Gremda 2km', phoneNumber: '55585678', Menu: 'Couscous au poulet', Prix: 6.000, Nb: 7, Date: todayDate },
      { lastName: 'Famille3', address: 'Gremda 1km', phoneNumber: '55561234', Menu: 'Couscous au poulet', Prix: 6.000, Nb: 6, Date: todayDate },
      { lastName: 'Famille4', address: 'Gremda 1km à côté de Collège Tahar Haddad', phoneNumber: '55595678', Menu: 'Couscous au poulet', Prix: 6.000, Nb: 4, Date: todayDate },
      // Add more families as needed
    ];

    // Example families for other days
    const tomorrowDate = new Date();
    tomorrowDate.setDate(todayDate.getDate() + 1); // Tomorrow's date
    this.otherDaysFamilies = [
      { lastName: 'Famille5', address: 'Gremda 2km', phoneNumber: '55535678', Menu: 'Couscous au poulet', Prix: 6.000, Nb: 3, Date: tomorrowDate },
      { lastName: 'Famille6', address: 'Gremda 2km', phoneNumber: '55535678', Menu: 'Couscous au poulet', Prix: 6.000, Nb: 2, Date: tomorrowDate },
      { lastName: 'Famille7', address: 'Gremda 2km', phoneNumber: '55535678', Menu: 'Couscous au poulet', Prix: 6.000, Nb: 8, Date: tomorrowDate },
      // Add more families for other days as needed
    ];
  }
  calculateTotal(family: Family): number {
    return family.Nb * family.Prix;
  }
}
