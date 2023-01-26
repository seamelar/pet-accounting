import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.scss']
})
export class EditAnimalComponent implements OnInit {

  constructor() { }

  @Input() startName: any;
  id: number = 0;
  name: string = "";

  ngOnInit(): void {
  }

}
