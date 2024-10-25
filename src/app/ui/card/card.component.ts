import { SlicePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ApiService } from '../../api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [SlicePipe, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  id: any;
  constructor(private api: ApiService) {}
  prodects: any = [];


  
  ngOnInit() {
    this.api.getData().subscribe((data: any) => {
      this.prodects = data;
      console.log(this.prodects);
    });
  }
}
