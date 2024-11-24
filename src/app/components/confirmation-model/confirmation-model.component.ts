import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { GlobalesService } from '../../services/globales.service';

@Component({
  selector: 'app-confirmation-model',
  templateUrl: './confirmation-model.component.html',
  styleUrl: './confirmation-model.component.css',
})
export class ConfirmationModelComponent {
  authService = inject(AuthService);
  globalService = inject(GlobalesService);

  @Input() user!: any;
  @Output() userDeleted = new EventEmitter<string>();

  confirmDelete(id: string) {
    console.log(this.user);
    console.log(this.user._id);

    this.authService.deleteUser(id).subscribe({
      next: (data) => {
        this.userDeleted.emit(id);
        console.log(data);
      },
    });
    this.globalService.close();
  }
}
