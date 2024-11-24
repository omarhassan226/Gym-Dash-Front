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

  onUserDeleted(userId: string): void {
    this.users = this.users.filter((user: any) => user._id !== userId);
  }
}
