import { Component } from '@angular/core';
import { OauthBasecampService } from './services/oauth-basecamp.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mioBaseCampFectAPIClient';
  constructor(private BSOauth: OauthBasecampService) {
    BSOauth.getBasecampToken()
  }
}
