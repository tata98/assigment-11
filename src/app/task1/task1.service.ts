import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class Task1Service {
  constructor() {}

  getUsers(): Promise<Users[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const users: Users[] = [
          {
            firstname: 'Tata',
            lastName: 'Avaliani',
            birthDate: new Date('1998-05-06'),
            status: Status.Active,
            about: 'blablbalblabla',
          },
          {
            firstname: 'Tata',
            lastName: 'Avaliani',
            birthDate: new Date('1997-05-06'),
            status: Status.Inactive,
            about: 'blablbalblabla',
          },
          {
            firstname: 'Tata',
            lastName: 'Avaliani',
            birthDate: new Date('1999-05-06'),
            status: Status.Deleted,
            about: 'blablbalblabla',
          },
        ];
        resolve(users);
      }, 3000);
    });
  }
}
export interface Users {
  firstname: string;
  lastName: string;
  birthDate: Date;
  status: Status;
  about: string;
}
export enum Status {
  Active = 'Active',
  Inactive = 'Inactive',
  Deleted = 'Deleted',
}
