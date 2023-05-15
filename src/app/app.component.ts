import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonFunctionalityComponent } from './components/common-functionality/common-functionality.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent extends CommonFunctionalityComponent {
  title = 'reloadComponent';

  constructor(public override router: Router) {
    super(router);
    console.log('Inside Application Constrictor');
  }

  override ngOnInit(): void {
      console.log('Loading AppComponent');
  }

  reloadCurrent() {
    this.reloadComponent(true);
  }
}
