import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent {
getProgress(arg0: string) {
throw new Error('Method not implemented.');
}

  @Input() icon: string = '';
  @Input() level: string = '';
  @Input() skill: string = '';

}
