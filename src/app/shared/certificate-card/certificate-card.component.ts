import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-certificate-card',
  templateUrl: './certificate-card.component.html',
  styleUrls: ['./certificate-card.component.css']
})
export class CertificateCardComponent {

   @Input() Image: string = '';
  @Input() alt: string = '';

}
