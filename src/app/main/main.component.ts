import { Component } from '@angular/core';
import { TimelineComponent } from './timeline/timeline.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TimelineComponent, ContentComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
