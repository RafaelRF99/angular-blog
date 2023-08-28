import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  photoCover: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS_cZPAfwd3q-pZ0IYrOmlCg76v1TFTxrtgM6r2Qe_XbDX0lUBGv24uDPfnullKVrDrZU&usqp=CAU';
  contentTitle: string = 'Importância da Estrutura';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id');
    });
    this.setValuesToComponents(this.id ? this.id : '');
  }

  setValuesToComponents(id: string) {
    const result = dataFake.filter((article) => article.id == +id)[0];
    this.contentTitle = result.title;
    this.photoCover = result.photo;
  }
}
