import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { Service } from './../service/service';

import { AppComponent } from './app.component';
import { ValuesComponent } from './../component/component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ AppComponent, ValuesComponent ],
    imports: [ BrowserModule, FormsModule ],
    providers: [ Service ]
})
export class AppModule { }
