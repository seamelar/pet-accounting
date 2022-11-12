import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from './components/animal/animal.component';
import { OwnerComponent } from './components/owner/owner.component';
import { VeterinarianComponent } from './components/veterinarian/veterinarian.component';

const routes: Routes = [
  { path: '', redirectTo: '/animals', pathMatch: 'full' },
  { path: 'animals', component: AnimalComponent },
  { path: 'veterinarians', component: VeterinarianComponent },
  { path: 'owners', component: OwnerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
