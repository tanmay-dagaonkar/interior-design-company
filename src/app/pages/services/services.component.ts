import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Service {
  title: string;
  description: string;
  points: string[];
}

@Component({
  selector: 'app-services',
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'Residential Interiors',
      description: 'Complete home design — from spatial planning to final styling, for every room in the house.',
      points: ['Space planning & layout', 'Bedroom & living room design', 'Furniture & decor styling', 'Ceiling & wall finishes']
    },
    {
      title: 'Modular Kitchens & Wardrobes',
      description: 'Our most-requested work — kitchens and storage designed around finishes, shutters, and layouts that hold up daily.',
      points: ['Modular kitchen layouts', 'Countertop & finish selection', 'Wardrobe & wall storage design', 'Shutter & handle finishes']
    },
    {
      title: 'Office & Commercial Interiors',
      description: 'Workspaces and commercial spaces — including hospitals — designed to work as hard as the people using them.',
      points: ['Workstations & cabins', 'Meeting & reception areas', 'Hospital & clinical interiors', 'Branding & signage']
    },
    {
      title: 'Home Bar & Entertaining Spaces',
      description: 'A dedicated corner for entertaining, built with storage, lighting, and finishes chosen with intent.',
      points: ['Glassware & storage cabinets', 'Bar lighting', 'Layout & flow planning']
    },
    {
      title: 'Renovation & Turnkey Execution',
      description: 'End-to-end execution so you deal with one team, not five contractors — on a real timeline, not guesswork.',
      points: ['Civil & structural work', 'Electrical & plumbing coordination', 'Site supervision', 'Final handover']
    },
    {
      title: 'Design Consultation',
      description: 'Expert direction on the details that make or break a project — lighting, colour, and budget, before you commit.',
      points: ['Lighting design', 'Colour & paint guidance', 'Vastu-conscious planning', 'Budget & material guidance']
    }
  ];
}
