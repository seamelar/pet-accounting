import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimalService } from '../../animal.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {
  animalOwnersList!: Observable<any[]>;

  constructor(private service: AnimalService) { }

  ngOnInit(): void {
    this.animalOwnersList = this.service.getAnimalOwnersList();
  }
}
