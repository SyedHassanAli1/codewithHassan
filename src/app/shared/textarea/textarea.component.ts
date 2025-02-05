import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent {

  @Input() label: string = '';
  @Input() rows: number = 10;
  @Input() id: string = '';
  @Input() placeholder: string = '';

}
