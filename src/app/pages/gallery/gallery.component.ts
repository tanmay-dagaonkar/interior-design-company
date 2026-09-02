import { AfterViewInit, Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { INSTAGRAM_POSTS } from '../../instagram-posts';
import { InstagramEmbedService } from '../../services/instagram-embed.service';

const PAGE_SIZE = 5;
const ALL = 'All';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule, RouterLink],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements AfterViewInit {
  private embeds = inject(InstagramEmbedService);

  posts = INSTAGRAM_POSTS;
  categories = [
    ALL,
    'Residential Interiors',
    'Design Tips',
    'Kitchen',
    'Wardrobe & Storage',
    'Office & Commercial',
    'Renovation',
    'Home Bar',
    'Bedroom',
    'Testimonials',
    'Festive & Occasions',
    'Studio & Behind the Scenes',
  ];

  activeCategory = signal(ALL);
  visibleCount = signal(PAGE_SIZE);

  filteredPosts = computed(() => {
    const category = this.activeCategory();
    return category === ALL ? this.posts : this.posts.filter((p) => p.category === category);
  });

  visiblePosts = computed(() => this.filteredPosts().slice(0, this.visibleCount()));
  hasMore = computed(() => this.visibleCount() < this.filteredPosts().length);

  ngAfterViewInit(): void {
    this.embeds.processWithRetries();
  }

  setCategory(category: string): void {
    this.activeCategory.set(category);
    this.visibleCount.set(PAGE_SIZE);
    this.embeds.processWithRetries();
  }

  showMore(): void {
    this.visibleCount.update((count) => Math.min(count + PAGE_SIZE, this.filteredPosts().length));
    this.embeds.processWithRetries();
  }
}
