import { Injectable } from '@angular/core';

import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  updateDoc
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private firestore: Firestore
  ) {}

  addTask(task: Task) {

    const taskRef = collection(
      this.firestore,
      'tasks'
    );

    return addDoc(
      taskRef,
      task
    );
  }

  getTasks(): Observable<Task[]> {

    const taskRef = collection(
      this.firestore,
      'tasks'
    );

    return collectionData(
      taskRef,
      { idField: 'id' }
    ) as Observable<Task[]>;
  }

  completeTask(id: string) {

    const taskDoc = doc(
      this.firestore,
      'tasks',
      id
    );

    return updateDoc(
      taskDoc,
      {
        completada: true
      }
    );
  }

}