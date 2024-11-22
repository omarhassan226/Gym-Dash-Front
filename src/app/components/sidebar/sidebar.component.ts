import { Component, HostListener, inject, OnInit } from '@angular/core';
import { GlobalesService } from '../../services/globales.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

interface IUser {
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  globalService = inject(GlobalesService);
  authService = inject(AuthService);
  router = inject(Router);

  public isSidebarOpen = true;
  public selectedItemId: string = '1';
  image = 'https://www.w3schools.com/w3images/avatar2.png';
  user: IUser = {
    name: '',
    email: '',
    phone: '',
  };

  ngOnInit(): void {
    this.globalService.sidebarOpen$.subscribe((isOpen) => {
      this.isSidebarOpen = isOpen;
    });
    this.getUser();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const width = (event.target as Window).innerWidth;
    this.adjustSidebar(width);
  }

  toggleSidebar(): void {
    this.globalService.toggleSidebar1();
  }

  private adjustSidebar(width: number): void {
    const shouldBeOpen = width >= 768;
    this.globalService.setSidebarState(shouldBeOpen);
  }

  getUser() {
    this.authService.getUser().subscribe({
      next: (data) => {
        (this.user = data), console.log(this.user);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  public sidebarItems: {
    id: string;
    text: string;
    iconcss: string;
    description: string;
  }[] = [
    {
      id: '1',
      text: 'Dashboard',
      iconcss: 'e-icons e-dashboard',
      description: 'Overview of the system',
    },
    {
      id: '2',
      text: 'Users',
      iconcss: 'e-icons e-settings',
      description: 'Manage your preferences',
    },
    {
      id: '3',
      text: 'Messages',
      iconcss: 'e-icons e-message',
      description: 'View and manage messages',
    },
    {
      id: '4',
      text: 'Profile',
      iconcss: 'e-icons e-user',
      description: 'Your user profile',
    },
    {
      id: '5',
      text: 'Log Out',
      iconcss: 'e-icons e-logout',
      description: 'Sign out of the system',
    },
  ];

  public onSelect(itemId: string): void {
    this.selectedItemId = itemId;
    switch (itemId) {
      case '1':
        this.router.navigate(['/home/dashboard']);
        break;
      case '2':
        this.router.navigate(['/home/users']);
        break;
      case '3':
        this.router.navigate(['/messages']);
        break;
      case '4':
        this.router.navigate(['/profile']);
        break;
      case '5':
        this.router.navigate(['/logout']);
        break;
      default:
        break;
    }
    console.log(`Selected Item ID: ${itemId}`);
  }
}
