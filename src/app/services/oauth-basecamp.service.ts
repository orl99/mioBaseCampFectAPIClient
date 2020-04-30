import { Injectable } from '@angular/core';
import {JSO, Popup} from 'jso';
import { HttpClient } from '@angular/common/http';

const clientBasecamp = new JSO({
  providerID: 'basecamp',
  client_id: '9ccd4c00c28394eaaf6e9d339c540b3d6e7357c3',
  redirect_uri: window.location.origin + '/index.html',
  // The URL where you is redirected back, and where you perform run the callback() function.
  authorization: 'https://launchpad.37signals.com/authorization/new',
  response_type: 'code',
	client_secret: '2c49e158d346206f1ac6ed5cbf7c8a20febaba3a',
  token: 'https://launchpad.37signals.com/authorization/token',
});

@Injectable({
  providedIn: 'root'
})
export class OauthBasecampService {

  constructor(private http$: HttpClient) { }

  async getBasecampToken() {
    console.log(clientBasecamp.callback());
    // const response = this.http$.get()
  }
}
