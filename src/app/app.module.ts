import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';;
import { BrowserModule } from '@angular/platform-browser';

import { MessageService } from 'primeng/api';
import { RootComponent } from './root/root.component';
import { ReadAllComponent } from './objects/read-all/read-all.component';
import { EditComponent } from './objects/edit/edit.component';
import { CreateComponent } from './objects/create/create.component';

/**
 * The root module of the application.
 * 
 * @note We have used the `@NgModule` decorator to define the metadata for the module. 
 * This is according to the Angular's module system as seen in the docs at https://angular.io/guide/bootstrapping
 */
@NgModule({
  // The components, directives, and pipes that belong to this module and its submodules.
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    ToastModule,
    
    HttpClientModule,
    
    RouterLink, 
    RouterOutlet, 
    RouterLinkActive,
    
    // The `RouterModule.forRoot()` method is called to define the routes of the application.
    RouterModule.forRoot([
      { path: '', component: ReadAllComponent },
      { path: 'objects/:id/edit', component: EditComponent},
      { path: 'objects/create', component: CreateComponent},
      { path: 'objects', component: ReadAllComponent },
    ]),
  ],

  // The main application view, called the root component, which hosts all other app views. Only the root module should set this bootstrap property.
  declarations: [ RootComponent ],
  bootstrap: [ RootComponent ],

  // The services that the module contributes to the global collection of services; they become accessible in all parts of the app.
  providers: [ MessageService ]
})
export class AppModule {}
