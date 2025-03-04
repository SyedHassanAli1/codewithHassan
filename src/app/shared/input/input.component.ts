import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input() label: string = '';
  @Input() type: string = '';
  @Input() id: string = '';
  @Input() placeholder: string = '';

}
