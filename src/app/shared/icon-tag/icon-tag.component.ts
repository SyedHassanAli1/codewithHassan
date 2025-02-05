import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-tag',
  templateUrl: './icon-tag.component.html',
  styleUrls: ['./icon-tag.component.css']
})
export class IconTagComponent {

  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() detail: string = '';

}
