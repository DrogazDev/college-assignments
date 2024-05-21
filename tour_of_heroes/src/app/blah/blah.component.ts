import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blah',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './blah.component.html',
  styleUrl: './blah.component.css'
})
export class BlahComponent {

}
