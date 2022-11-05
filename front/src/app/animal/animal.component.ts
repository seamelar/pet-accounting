import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {

  animalList$!:Observable<any[]>;
  animalOwnersList$!:Observable<any[]>;
  animalOwnersList:any=[];

  constructor(private service:AnimalService) {}

  ngOnInit(): void {
    this.animalList$ = this.service.getAnimalList();
  }

}
