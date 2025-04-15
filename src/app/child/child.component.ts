import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importer CommonModule

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() message: string = '';  // Le message transmis par le parent
}
