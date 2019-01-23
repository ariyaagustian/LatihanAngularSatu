import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BukuComponent } from './buku/buku.component';
import { BukuPilihComponent } from './buku/buku-pilih/buku-pilih.component';
import { BukuListComponent } from './buku/buku-list/buku-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BukuComponent,
    BukuPilihComponent,
    BukuListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
