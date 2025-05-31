import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ng-button',
  templateUrl: './ng-button.component.html',
  styleUrls: ['./ng-button.component.css']
})
export class NgButtonComponent {

  @Input() title: string = ''
  @Input() icon: string = ''

}
