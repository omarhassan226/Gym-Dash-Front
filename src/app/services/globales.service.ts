import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalesService {
  constructor() {}

  private sidebarOpen = new BehaviorSubject<boolean>(true);
  public sidebarOpen$ = this.sidebarOpen.asObservable();

  toggleSidebar1(): void {
    this.sidebarOpen.next(!this.sidebarOpen.value);
  }

  setSidebarState(state: boolean): void {
    this.sidebarOpen.next(state);
  }
}
