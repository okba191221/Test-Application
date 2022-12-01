import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  const checkbox = document.getElementById(
    'subscribe',
  ) as HTMLInputElement | null;
  
  if (checkbox != null) {
    // ✅ Set checkbox checked
    checkbox.checked = true;
  
    // ✅ Set checkbox unchecked
     checkbox.checked = false;
  }
  