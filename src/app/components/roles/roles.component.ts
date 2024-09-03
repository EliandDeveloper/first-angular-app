import { Component } from '@angular/core';
import { userInfo } from 'os';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  user: string = '';
  isNotAvaliable: boolean = true;
  roles: string[] = ['Admin', 'User', 'Guest'];

  show(): void {
    this.user = 'Elian Daniel';
  }
}
