import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  user: string = '';
  isNotAvaliable: boolean = true;
  roles: string[] = ['Admin', 'User', 'Guest'];

  showUserName(): string {
    return this.user = 'Elian Daniel';
  }

  showAlert(): void {
    alert('You have selected ' + this.roles[0] + ' role');
  }

  showMessage(message: string): void {
   alert(message);
  }
}
