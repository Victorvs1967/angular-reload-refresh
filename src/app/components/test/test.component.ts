import { Component } from '@angular/core';
import { CommonFunctionalityComponent } from '../common-functionality/common-functionality.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent extends CommonFunctionalityComponent {

  constructor(public override router: Router) {
    super(router);
    console.log('Inside TestComponent constructor');
  }

  override ngOnInit(): void {
      console.log('Loading TestComponent');
  }

  reloadCurrent() {
    this.reloadComponent(true);
  }

  reloadChild() {
    this.reloadComponent(false, 'test/child');
  }
}
