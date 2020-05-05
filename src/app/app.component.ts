import { Component, OnInit } from '@angular/core';
import { OauthBasecampService } from './services/oauth-basecamp.service';
import { BasecampOautFlowService } from 'src/app/services/oauth/basecamp-oaut-flow.service';
import { BasecampService } from './services/basecamp.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mioBaseCampFectAPIClient';
  accessCodeUrl: string;
  constructor(private BSOauth: OauthBasecampService,
              private BSOauth2: BasecampOautFlowService,
              private BSService: BasecampService) {

  }

  ngOnInit() {
    this.accessCodeUrl = new URL(window.location.href).searchParams.get('code');
    console.log('accessCodeUrl', this.accessCodeUrl);
    if (!!this.accessCodeUrl) {
      console.log('Access code Got', this.accessCodeUrl);
      this.BSOauth2.getAccessToken(this.accessCodeUrl);
    }
  }

  clickBtn() {
    // this.BSOauth.getBasecampToken();
    this.BSOauth2.getAccessCode();
  }

  async getTodosBtn() {
    const response = await this.BSService.getTodos();
    console.log('Response', response);
    if (!!response) {
      // this.BSService.saveTodosGS()
    }
  }
}
