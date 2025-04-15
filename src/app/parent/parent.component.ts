import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { CommonModule } from '@angular/common';  // Importer CommonModule

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  isChildVisible: boolean = false;
  message: string = 'Voici le message transmis du parent !';

  openChild() {
    this.isChildVisible = !this.isChildVisible;  // Ouvre/ferme le composant enfant
  }
}
