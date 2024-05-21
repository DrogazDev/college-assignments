import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loop',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './loop.component.html',
  styleUrl: './loop.component.css'
})
export class LoopComponent {
  names: string[] = ["Thijs", "Tim", "Luke", "Bart"];
}
