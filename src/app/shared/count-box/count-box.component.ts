import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-count-box',
  templateUrl: './count-box.component.html',
  styleUrls: ['./count-box.component.css']
})
export class CountBoxComponent {

  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() startCount: string = '';
  @Input() endCount: string = '';

}
