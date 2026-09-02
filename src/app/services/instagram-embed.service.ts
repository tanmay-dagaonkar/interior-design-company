import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

@Injectable({ providedIn: 'root' })
export class InstagramEmbedService {
  private platformId = inject(PLATFORM_ID);

  /**
   * Tells Instagram's embed.js widget to scan the page and turn any
   * unprocessed `blockquote.instagram-media` elements into live embeds.
   * Retries briefly in case embed.js (loaded in index.html) hasn't
   * finished loading yet.
   */
  process(attempts = 0): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const instgrm = window.instgrm;
    if (instgrm?.Embeds?.process) {
      instgrm.Embeds.process();
    } else if (attempts < 20) {
      setTimeout(() => this.process(attempts + 1), 150);
    }
  }

  /**
   * Calls process() a few times on a short backoff. Newly-inserted
   * blockquotes (e.g. after a "Show more" click) sometimes need a second
   * nudge, since embed.js's own auto-scan only runs once on initial load.
   */
  processWithRetries(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.process();
    setTimeout(() => this.process(), 500);
    setTimeout(() => this.process(), 1500);
  }
}
