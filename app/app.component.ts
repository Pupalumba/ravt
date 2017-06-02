import {Component} from '@angular/core';


@Component({
    selector: "app",
    template: `
      <StackLayout>
        <page-router-outlet></page-router-outlet>
      </StackLayout>
      `
})
export class AppComponent{}
