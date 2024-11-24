import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css',
})
export class EditUserComponent implements OnChanges {
  userForm: FormGroup;
  roles = ['admin', 'user'];
  @Input() users!: any;
  @Input() openEditModal!: any;
  @Input() selectUser!: any;
  @Output() closeModalEvent = new EventEmitter<boolean>();
  @Output() userUpdated = new EventEmitter<any>();

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

  ngOnChanges(changes: SimpleChanges): void {
    if (this.selectUser) {
      this.userForm.patchValue({
        name: this.selectUser.name,
        email: this.selectUser.email,
        password: '', // You may choose to reset the password field or leave it as it is
        phone: this.selectUser.phone,
        role: this.selectUser.role,
      });
    }
  }

  closeModal() {
    this.closeModalEvent.emit(false);
  }

  closeModalOnBackdrop(event: MouseEvent) {
    this.closeModal();
  }

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  onSubmit() {
    if (this.userForm.valid) {
      const updatedUser = { ...this.selectUser, ...this.userForm.value };
      console.log('Updating user with ID:', this.selectUser._id); // Log the ID

      this.authService.updateUser(this.selectUser._id, updatedUser).subscribe({
        next: (data: any) => {
          this.userUpdated.emit(updatedUser);
          console.log(updatedUser);

          console.log('Updated User:', data);
          this.closeModal();
        },
        error: (err) => {
          console.error('Error updating user:', err);
        },
      });
    }
  }
}
