import { Component, PLATFORM_ID, inject, signal, computed } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { INSTAGRAM_POST_URLS } from '../../instagram-posts';

const PAGE_SIZE = 5;

@Component({
  selector: 'app-gallery',
  imports: [CommonModule, RouterLink],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  private platformId = inject(PLATFORM_ID);

  posts = INSTAGRAM_POST_URLS;
  visibleCount = signal(PAGE_SIZE);

  visiblePosts = computed(() => this.posts.slice(0, this.visibleCount()));
  hasMore = computed(() => this.visibleCount() < this.posts.length);

  showMore(): void {
    this.visibleCount.update((count) => Math.min(count + PAGE_SIZE, this.posts.length));

    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => (window as any).instgrm?.Embeds?.process(), 0);
    }
  }
}
