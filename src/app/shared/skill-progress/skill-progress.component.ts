import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-progress',
  templateUrl: './skill-progress.component.html',
  styleUrls: ['./skill-progress.component.css']
})
export class SkillProgressComponent {

  @Input() skill: string = '';
  @Input() val: number = 0;
  @Input() valueNow: number = 0;
  @Input() valueMin: number = 0;
  @Input() valueMax: number = 0;

}
