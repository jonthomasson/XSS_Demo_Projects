import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
})
export class App {
  private sanitizer = inject(DomSanitizer);

  // Try pasting: <img src=x onerror="alert('xss')">
  userInput: string = `<em>Try &lt;img src=x onerror=alert('xss')&gt;</em>`;

  /**
   * ❌ DANGEROUS:
   * This disables Angular’s sanitization and will allow injected HTML/JS through.
   * Use ONLY to demonstrate what NOT to do.
   */
  get trustedBypass(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.userInput);
  }

  /**
   * ✅ SAFE (escaped as text):
   * Renders the exact characters; no HTML interpretation.
   */
  get safeText(): string {
    return this.userInput;
  }
}
