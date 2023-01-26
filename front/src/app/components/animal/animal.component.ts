import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimalService } from '../../animal.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {

  animalList!: Observable<any[]>;
  animalOwnersList!: Observable<any[]>;
  animalsOwnersList: any = [];

  animalsOwnersMap: Map<number, string> = new Map();

  constructor(private service:AnimalService) {}

  ngOnInit(): void {
    this.animalList = this.service.getAnimalList();
    this.animalOwnersList = this.service.getAnimalOwnersList();
    this.refreshAnimalsOwnersMap();
  }


  modalTitle: string = '';
  activateAddAnimalComponent: boolean = false;
  activateStartComponent: boolean = false;
  animal: any;
  startName: any;

  modalAdd() {
    this.animal = {
      id: 0,
      name: null,
      species: null,
      animalOwnerId: null
    };
    this.modalTitle = "Новый питомец";
    this.activateAddAnimalComponent = true;
  }

  modalStart() {
    this.startName = {
      id: 0,
      name: null,
    };
    this.modalTitle = "Пуск";
    this.activateStartComponent = true;
  }

  modalClose() {
    this.activateAddAnimalComponent = false;
    this.animalList = this.service.getAnimalList();
  }

  refreshAnimalsOwnersMap() {
    this.service.getAnimalOwnersList().subscribe(data => {
      this.animalsOwnersList = data;

      for (let i = 0; i < data.length; i++) {
        this.animalsOwnersMap.set(this.animalsOwnersList[i].id, this.animalsOwnersList[i].name);
      }
    })
  }
}
