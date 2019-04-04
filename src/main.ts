import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
//bootstrapModule will take AppModule to boot the application.
//AppModule is found in ./app/app.module
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
