import { Component, HostListener, inject, OnInit } from '@angular/core';
import { GlobalesService } from '../../services/globales.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  globalService = inject(GlobalesService);
  public isSidebarOpen = true;

  ngOnInit(): void {
    this.globalService.sidebarOpen$.subscribe((isOpen) => {
      this.isSidebarOpen = isOpen;
    });
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

  public selectedItemId: string = '1';

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
      text: 'Settings',
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

  public user = {
    name: 'John Doe',
    image: 'https://www.w3schools.com/w3images/avatar2.png',
  };

  public onSelect(itemId: string): void {
    this.selectedItemId = itemId;
    console.log(`Selected Item ID: ${itemId}`);
  }
}
