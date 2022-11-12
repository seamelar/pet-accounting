import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimalService } from '../../../animal.service'

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.scss']
})
export class AddAnimalComponent implements OnInit {
  animalList!: Observable<any[]>;
  animalOwnersList!: Observable<any[]>;
  veterinarianList!: Observable<any[]>;

  constructor(private service: AnimalService) { }


  @Input() animal: any;
  id: number = 0;
  name: string = "";
  species: string ="";
  animalOwnerId!: number;


  ngOnInit(): void {
    this.id = this.animal.id;
    this.name = this.animal.name;
    this.species = this.animal.species;
    this.animalOwnerId = this.animal.animalOwnerId;
    this.veterinarianList = this.service.getVeterinariansList();
    this.animalOwnersList = this.service.getAnimalOwnersList();
  }

  addAnimal() {
    var animal = {
      name: this.name,
      species: this.species,
      animalOwnerId: this.animalOwnerId
    }
    this.service.addAnimal(animal).subscribe(res => {
      var closeModalBtn = document.getElementById('add-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if (showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function () {
        if (showAddSuccess) {
          showAddSuccess.style.display = "none"
        }
      }, 5000);
    })
  }
}
