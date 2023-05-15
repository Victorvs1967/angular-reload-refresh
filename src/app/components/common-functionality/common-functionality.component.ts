import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-functionality',
  templateUrl: './common-functionality.component.html',
})
export class CommonFunctionalityComponent implements OnInit {

  constructor(public router: Router) {}

  ngOnInit(): void {}

  // reload one component
  reloadComponent(self: boolean, urlToNavigateTo?: string) {

    console.log('Current route I am on:', this.router.url);

    const url = self ? this.router.url : urlToNavigateTo;

    // { skipLocationChange: true } means dont update the url to '/' when navigating
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/'.concat(url || '')]).then(() => {
        console.log('After navigation I am on:', this.router.url);
      });
    });
  }

  // reload entire page
  reloadPage() {
    window.location.reload();
  }

}
