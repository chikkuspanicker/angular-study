/* Core Modules */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
/* App / Custom Modules */
// Components
import { AppComponent }  from './app.component';
import { PersonListComponent } from './person-list.component';
import { AddPersonComponent } from './add-person.component';
// Pipes
import { FilterPersonPipe } from './person-list.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule],
  declarations: [ 
      // Components
      AppComponent, PersonListComponent, AddPersonComponent,
      // Pipes
      FilterPersonPipe 
    ],
    // providers: [ PersonService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
