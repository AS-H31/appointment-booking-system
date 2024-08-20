import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUser(userId: string) {}

  getUsersList() {}

  addUser(user: User) {}

  addUsersList(users: User[]) {}

  deleteUser(userId: string) {}
}
