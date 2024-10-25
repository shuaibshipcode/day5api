import { APP_ID, Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CardComponent } from '../../ui/card/card.component';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-prodects',
  standalone: true,
  imports: [CardComponent, RouterLink],
  templateUrl: './prodects.component.html',
  styleUrl: './prodects.component.css'
})
export class ProdectsComponent {
  constructor(public api:ApiService,private routes: ActivatedRoute){ }
  item: any;
  ngOnInit() {
    const id = this.routes.snapshot.paramMap.get('id')

      this.api.getDataById(id).subscribe((data:any)=> {
      this.item = data;
      console.log(this.item);
    });
}
}