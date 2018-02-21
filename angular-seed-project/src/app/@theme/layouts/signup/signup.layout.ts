import { Component, OnDestroy } from '@angular/core';
import {
  NbMediaBreakpoint,
  NbMediaBreakpointsService,
  NbThemeService
} from '@nebular/theme';

import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'ngx-signup-layout',
  styleUrls: ['./signup.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>


      <nb-layout-column class="main-content">
      <div class="signup-page">
      <div class="form">
        <form class="signup-form">
            <input type="text" placeholder="username"/>
            <input type="email" placeholder="email address"/>
            <input type="password" placeholder="password"/>
            <input type="password" placeholder="confirm password"/>
            <button>create</button>
            <p class="message">Do you have an account? <a href="#">Sign In</a></p>
          </form>

        </div>
      </div>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>


      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `
})
export class SignupLayoutComponent implements OnDestroy {

  constructor(
    protected themeService: NbThemeService,
    protected bpService: NbMediaBreakpointsService,
  ) {
    const isBp = this.bpService.getByName('is');
  }

  ngOnDestroy() {

  }
}