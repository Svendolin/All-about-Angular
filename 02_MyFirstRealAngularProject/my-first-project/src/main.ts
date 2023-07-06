import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/* AppModule is the root module of the application
and is started and "binded" in the main.ts file by default.
*/

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
