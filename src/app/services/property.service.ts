import { Injectable } from '@angular/core';

import {
  Firestore,
  collection,
  addDoc,
  collectionData
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { Property } from '../models/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(
    private firestore: Firestore
  ) {}

  addProperty(property: Property) {
    const propertyRef = collection(
      this.firestore,
      'properties'
    );

    return addDoc(propertyRef, property);
  }

  getProperties(): Observable<Property[]> {

    const propertyRef = collection(
      this.firestore,
      'properties'
    );

    return collectionData(
      propertyRef,
      { idField: 'id' }
    ) as Observable<Property[]>;
  }
}