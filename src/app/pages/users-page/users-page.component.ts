import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css',
})
export class UsersPageComponent {
  users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Michael Johnson', email: 'michael@example.com' },
  ];

  constructor() {}

  ngOnInit(): void {}

  addUser(): void {
    // Logic to add a user (you can show a form to input user details)
    const newUser: User = {
      id: 4,
      name: 'New User',
      email: 'newuser@example.com',
    };
    this.users.push(newUser);
  }

  editUser(id: number): void {
    // Logic to edit the user (open a form or modify directly)
    const user = this.users.find((u) => u.id === id);
    if (user) {
      user.name = prompt('Edit name:', user.name) || user.name;
      user.email = prompt('Edit email:', user.email) || user.email;
    }
  }

  deleteUser(id: number): void {
    // Logic to delete the user
    this.users = this.users.filter((user) => user.id !== id);
  }
}
