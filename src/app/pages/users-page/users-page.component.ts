import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

interface User {
  // id: string;
  name: string;
  email: string;
}

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css',
})
export class UsersPageComponent {
  authService = inject(AuthService);

  users: User[] = [];

  constructor() {}

  ngOnInit(): void {
    this.authService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        console.log(this.users);
      },
    });
  }

  // addUser(): void {
  //   // Logic to add a user (you can show a form to input user details)
  //   const newUser: User = {
  //     id: '4',
  //     name: 'New User',
  //     email: 'newuser@example.com',
  //   };
  //   this.users.push(newUser);
  // }

  // editUser(id: string): void {
  //   // Logic to edit the user (open a form or modify directly)
  //   const user = this.users.find((u) => u.id === id);
  //   if (user) {
  //     user.name = prompt('Edit name:', user.name) || user.name;
  //     user.email = prompt('Edit email:', user.email) || user.email;
  //   }
  // }

  // deleteUser(id: string): void {
  //   // Logic to delete the user
  //   this.users = this.users.filter((user) => user.id !== id);
  // }
}
