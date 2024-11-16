import { Component, inject, OnInit } from '@angular/core';
import { GlobalesService } from '../../services/globales.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  isSidebarOpen: boolean = true;
  constructor(public globalService: GlobalesService) {}

  ngOnInit(): void {
    // Subscribe to the sidebar state changes
    this.globalService.sidebarOpen$.subscribe((state) => {
      this.isSidebarOpen = state;
    });
  }
}
