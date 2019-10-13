import { Component, Input } from '@angular/core';

@Component({
  selector: 'te-app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
@Input() pageTitle: string;

}
