import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CardComponent } from "../../ui/card/card.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  api: any;
  constructor(private apiService: ApiService) {}
  product: any = []

  ngOnInit(): void {
    this.api.getData().subscribe((data: any) => {
      this.product = data;
    });
  }

}
