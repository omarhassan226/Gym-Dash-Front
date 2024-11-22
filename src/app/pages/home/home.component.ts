import { Component, inject, OnInit } from '@angular/core';
import { GlobalesService } from '../../services/globales.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  isSidebarOpen: boolean = true;
  isSmallScreen: boolean = false;

  constructor(
    public globalService: GlobalesService,
    private breakPointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    // Subscribe to the sidebar state changes
    this.globalService.sidebarOpen$.subscribe((state) => {
      this.isSidebarOpen = state;
    });

    this.breakPointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small]) // Small screens (like mobile)
      .subscribe((state) => {
        this.isSmallScreen = state.matches;
      });
    console.log(this.isSidebarOpen);
  }
}
