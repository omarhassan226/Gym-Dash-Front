import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { GlobalesService } from '../../services/globales.service';

interface User {
  _id: string;
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
  global = inject(GlobalesService);

  isModalOpen!: boolean;
  openEditModal: boolean = false;
  selectUser: any = {};
  users: any = [];

  constructor() {}

  ngOnInit(): void {
    this.authService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        console.log(this.users);
      },
    });
  }

  onUserUpdated(updatedUser: any): void {
    if (this.users && this.users.length > 0) {
      const index = this.users.findIndex(
        (user: any) => user._id === updatedUser._id
      );
      console.log('User Index:', index);
      console.log(updatedUser._id);

      if (index !== -1) {
        this.users[index] = { ...updatedUser };
        console.log('Updated User:', updatedUser);
      } else {
        console.error('User not found in users list:', updatedUser);
      }
    } else {
      console.error('Users list is empty or undefined.');
    }
  }

  // show(user: User): void {
  //   this.global.show();
  //   console.log(user);
  // }

  delete(id: string) {
    this.authService.deleteUser(id).subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }

  selectedUser(user: any) {
    this.selectUser = { ...user }; // Create a copy to prevent accidental mutation
    this.openEditModal = true;
    console.log('Selected User:', this.selectUser);
    return this.selectUser;
  }

  onUserDeleted(userId: string): void {
    this.users = this.users.filter((user: any) => user._id !== userId);
  }
}
