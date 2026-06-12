import { Injectable } from '@angular/core';

import {
  Firestore,
  collection,
  addDoc,
  collectionData
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(
    private firestore: Firestore
  ) {}

  addTicket(ticket: Ticket) {

    const ticketRef = collection(
      this.firestore,
      'tickets'
    );

    return addDoc(
      ticketRef,
      ticket
    );
  }

  getTickets(): Observable<Ticket[]> {

    const ticketRef = collection(
      this.firestore,
      'tickets'
    );

    return collectionData(
      ticketRef,
      { idField: 'id' }
    ) as Observable<Ticket[]>;
  }

}