import { Component, DoCheck, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalesService } from '../../services/globales.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
})
export class AddUserComponent {
  userForm: FormGroup;
  roles = ['admin', 'user'];
  isModalOpen!: boolean;
  @Input() users!: any;

  authService = inject(AuthService);

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(6)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      role: ['', Validators.required],
    });
  }

  closeModal() {
    this.isModalOpen = false;
  }

  openModal() {
    this.isModalOpen = true;
    console.log(this.isModalOpen);
  }

  closeModalOnBackdrop(event: MouseEvent) {
    this.closeModal();
  }

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  addNewUser(data: any) {
    this.users.push(data);
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.authService.addUser(this.userForm.value).subscribe({
        next: (data) => {
          this.addNewUser(this.userForm.value);
          console.log(data);
        },
      });
      console.log(this.userForm.value);

      this.closeModal();
    }
  }
}
