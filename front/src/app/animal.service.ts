import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  readonly animalAPIUrl = "https://localhost:7163/api";

  constructor(private http:HttpClient) { }

// Animal
  getAnimalList():Observable<any[]> {
    return this.http.get<any>(this.animalAPIUrl + '/Animals');
  }

  addAnimal(data:any) {
    return this.http.post(this.animalAPIUrl + '/Animals', data);
  }

  updateAnimal(id:number|string, data:any) {
    return this.http.put(this.animalAPIUrl + `/Animals/${id}`, data);
  }

  deleteAnimal(id:number|string) {
    return this.http.delete(this.animalAPIUrl + `/Animals/${id}`);
  }
  // Owners
  getAnimalOwnersList(): Observable<any[]> {
    return this.http.get<any>(this.animalAPIUrl + '/AnimalOwners');
  }

  addAnimalOwners(data: any) {
    return this.http.post(this.animalAPIUrl + '/AnimalOwners', data);
  }

  updateAnimalOwners(id: number | string, data: any) {
    return this.http.put(this.animalAPIUrl + `/AnimalOwners/${id}`, data);
  }

  deleteAnimalOwners(id: number | string) {
    return this.http.delete(this.animalAPIUrl + `/AnimalOwners/${id}`);
  }

  // Veterinarians
  getVeterinariansList(): Observable<any[]> {
    return this.http.get<any>(this.animalAPIUrl + '/Veterinarians');
  }

  addVeterinarians(data: any) {
    return this.http.post(this.animalAPIUrl + '/Veterinarians', data);
  }

  updateVeterinarians(id: number | string, data: any) {
    return this.http.put(this.animalAPIUrl + `/Veterinarians/${id}`, data);
  }

  deleteVeterinarians(id: number | string) {
    return this.http.delete(this.animalAPIUrl + `/Veterinarians/${id}`);
  }
}
