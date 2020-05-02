import { Component, OnInit } from '@angular/core';
import { OauthBasecampService } from './services/oauth-basecamp.service';
import { BasecampOautFlowService } from 'src/app/services/oauth/basecamp-oaut-flow.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mioBaseCampFectAPIClient';
  accessCodeUrl: string;
  constructor(private BSOauth: OauthBasecampService,
              private BSOauth2: BasecampOautFlowService) {

  }

  ngOnInit() {
    this.accessCodeUrl = new URL(window.location.href).searchParams.get('code');
  }

  clickBtn() {
    // this.BSOauth.getBasecampToken();
    this.BSOauth2.getAccessCode();
  }
}
