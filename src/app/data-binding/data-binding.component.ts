import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  constructor(private router: Router) {}
  title = 'day1';
  inputType: string = 'checkbox';
  text: string = '';
  stateName: string = '';
  firstName = signal('sanjay');
  courseName = 'react';
  showText = true;
  cityNames: string[] = ['madurai', 'coimbatore', 'chennai'];
  studentDetails = [
    { id: '123', name: 'rahul', dep: 'cse' },
    { id: '456', name: 'ram', dep: 'eee' },
    { id: '789', name: 'shyam', dep: 'civil' },
  ];
  selectedStudentId: number | null = null;
  textColor = false;
  color = 'blue';
  switchText: string = '0';

  change() {
    this.courseName = 'angular';
    this.firstName.set('sanjay rahul');
  }

  handleButton() {
    this.showText = !this.showText;
  }

  handleColor() {
    this.textColor = !this.textColor;
  }

  handleNavigate() {
    this.router.navigateByUrl('ex');
  }
}
