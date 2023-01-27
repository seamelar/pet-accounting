import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TestService } from '../../../test.service';

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.scss']
})
export class EditAnimalComponent implements OnInit {

  constructor(private service: TestService) { }

  testInscription!: Observable<any[]>;

  @Input() startName: any;
  id: number = 0;
  name: string = "";

  ngOnInit(): void {
    this.testInscription = this.service.getTestInscription();
  }

}
