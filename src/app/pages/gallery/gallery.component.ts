import { AfterViewInit, Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { INSTAGRAM_POST_URLS } from '../../instagram-posts';
import { InstagramEmbedService } from '../../services/instagram-embed.service';

const PAGE_SIZE = 5;

@Component({
  selector: 'app-gallery',
  imports: [CommonModule, RouterLink],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements AfterViewInit {
  private embeds = inject(InstagramEmbedService);

  posts = INSTAGRAM_POST_URLS;
  visibleCount = signal(PAGE_SIZE);

  visiblePosts = computed(() => this.posts.slice(0, this.visibleCount()));
  hasMore = computed(() => this.visibleCount() < this.posts.length);

  ngAfterViewInit(): void {
    this.embeds.process();
  }

  showMore(): void {
    this.visibleCount.update((count) => Math.min(count + PAGE_SIZE, this.posts.length));
    setTimeout(() => this.embeds.process(), 0);
  }
}
