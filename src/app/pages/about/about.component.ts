import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Value {
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  values: Value[] = [
    {
      title: 'Craft first',
      description: 'We design around what artisans can build beautifully, not just what renders well.'
    },
    {
      title: 'Honest materials',
      description: 'Wood, stone, and metal used as themselves — no laminate pretending to be something else.'
    },
    {
      title: 'Slow, considered process',
      description: 'Fewer projects at a time, so every detail gets the attention it deserves.'
    }
  ];
}
