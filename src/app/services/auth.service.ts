import { Injectable } from '@angular/core';

import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
  authState
} from '@angular/fire/auth';

import {
  Firestore,
  doc,
  setDoc,
  getDoc
} from '@angular/fire/firestore';

import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: Auth,
    private firestore: Firestore
  ) {}

  async register(
    email: string,
    password: string
  ): Promise<UserCredential> {

    const credential =
      await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

    await setDoc(
      doc(
        this.firestore,
        'users',
        credential.user.uid
      ),
      {
        uid: credential.user.uid,
        email: credential.user.email,
        role: 'roomie',
        createdAt: new Date()
      }
    );

    return credential;
  }

  async getCurrentUser() {

    return await firstValueFrom(
      authState(this.auth)
    );
  }

  async getUserRole(): Promise<string> {

    const user =
      await this.getCurrentUser();

    if (!user) {
      return 'roomie';
    }

    const userDoc = await getDoc(
      doc(
        this.firestore,
        'users',
        user.uid
      )
    );

    if (!userDoc.exists()) {
      return 'roomie';
    }

    const data = userDoc.data();

    return data['role'] || 'roomie';
  }

  login(
    email: string,
    password: string
  ): Promise<UserCredential> {

    return signInWithEmailAndPassword(
      this.auth,
      email,
      password
    );
  }

  logout(): Promise<void> {

    return signOut(this.auth);
  }

}