import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-llocation-detail',
  templateUrl: './llocation-detail.component.html',
  styleUrls: ['./llocation-detail.component.scss'],
})
export class LlocationDetailComponent {
  @Input() text: any;
  @Input() title: any;
  @Input() type: any;
}
