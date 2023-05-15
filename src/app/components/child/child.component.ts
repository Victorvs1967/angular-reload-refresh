import { Component } from '@angular/core';
import { CommonFunctionalityComponent } from '../common-functionality/common-functionality.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent extends CommonFunctionalityComponent {

  constructor(public override router: Router) {
    super(router);
    console.log('Inside ChildComponent constructor');
  }

  override ngOnInit(): void {
    console.log('Loading ChildComponent');
  }

  reload() {
    this.reloadComponent(false, 'test');
  }

  reloadCurrent() {
    this.reloadComponent(true);
  }

}
