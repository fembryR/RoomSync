import { Injectable } from '@angular/core';

import {
  Firestore,
  collection,
  addDoc,
  collectionData
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { Building } from '../models/building';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  constructor(
    private firestore: Firestore
  ) {}

  addBuilding(building: Building) {

    const buildingRef = collection(
      this.firestore,
      'buildings'
    );

    return addDoc(buildingRef, building);
  }

  getBuildings(): Observable<Building[]> {

    const buildingRef = collection(
      this.firestore,
      'buildings'
    );

    return collectionData(
      buildingRef,
      { idField: 'id' }
    ) as Observable<Building[]>;
  }

}