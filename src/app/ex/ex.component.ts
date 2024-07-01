import { Component, } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ex',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ex.component.html',
  styleUrls: ['./ex.component.css'],
})
export class ExComponent {
ifState=false
}
