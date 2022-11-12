import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimalService } from '../../animal.service';

@Component({
  selector: 'app-veterinarian',
  templateUrl: './veterinarian.component.html',
  styleUrls: ['./veterinarian.component.scss']
})
export class VeterinarianComponent implements OnInit {
  veterinarianList!: Observable<any[]>;

  constructor(private service: AnimalService) { }

  ngOnInit(): void {
    this.veterinarianList = this.service.getVeterinariansList();
  }
}
