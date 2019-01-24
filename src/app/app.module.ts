import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BukuComponent } from './buku/buku.component';
import { BukuPilihComponent } from './buku/buku-pilih/buku-pilih.component';
import { BukuListComponent } from './buku/buku-list/buku-list.component';
import { ReactiveBukuComponent } from './reactive-buku/reactive-buku.component';

@NgModule({
  declarations: [
    AppComponent,
    BukuComponent,
    BukuPilihComponent,
    BukuListComponent,
    ReactiveBukuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
