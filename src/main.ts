import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

/**
 * The main entry point of the application.
 * 
 * @note We have used the `platformBrowserDynamic` function to bootstrap the application with the root module.
 */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

