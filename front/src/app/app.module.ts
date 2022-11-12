import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalComponent } from './components/animal/animal.component';
import { EditAnimalComponent } from './components/animal/edit-animal/edit-animal.component';
import { AnimalService } from './animal.service';
import { OwnerComponent } from './components/owner/owner.component';
import { VeterinarianComponent } from './components/veterinarian/veterinarian.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddAnimalComponent } from './components/animal/add-animal/add-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    EditAnimalComponent,
    OwnerComponent,
    VeterinarianComponent,
    NavbarComponent,
    AddAnimalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
