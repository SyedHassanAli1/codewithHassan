import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-header',
  templateUrl: './about-header.component.html',
  styleUrls: ['./about-header.component.css']
})
export class AboutHeaderComponent {

  @Input() title: string = '';
  @Input() intro: string = '';

}
