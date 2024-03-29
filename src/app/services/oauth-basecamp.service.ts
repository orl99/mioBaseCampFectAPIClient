import { Injectable } from '@angular/core';
import {JSO, Popup} from 'jso';
import { HttpClient } from '@angular/common/http';

/* Proxy server, in case it gets ban, it will be needed to create another one, is very imple with cloudfare workers
  Github repo: https://github.com/Zibri/cloudflare-cors-anywhere
  Cloudfare deploy simple index.js function: https://workers.cloudflare.com/
*/
// https://divine-haze-d70d.mio-agency-proxy.workers.dev/?
// const clientBasecamp = new JSO({
//   providerID: 'basecamp',
//   client_id: '9ccd4c00c28394eaaf6e9d339c540b3d6e7357c3',
//   redirect_uri: window.location.origin + '/auth',
//   // The URL where you is redirected back, and where you perform run the callback() function.
//   authorization: 'https://divine-haze-d70d.mio-agency-proxy.workers.dev/?https://launchpad.37signals.com/authorization/new?type=web_server',
//   // authorization: 'https://launchpad.37signals.com/authorization/new?type=web_server',
//   response_type: 'code',
// 	client_secret: '2c49e158d346206f1ac6ed5cbf7c8a20febaba3a',
//   token: 'https://divine-haze-d70d.mio-agency-proxy.workers.dev/?https://launchpad.37signals.com/authorization/token?type=web_server',
// });




const forMIOBeta = new JSO({
  providerID: 'MIO-basecamp-BETA',
  client_id: '3a68522a3207193c700e5422d48e0ac9025a43d1',
  redirect_uri: 'https://mio-api-basecamp.firebaseapp.com/auth/',
  authorization: 'https://launchpad.37signals.com/authorization/new?type=web_server',
  client_secret: 'ad4f9ca8eaffedea8a71e06441a17527ea401120',
  token: 'https://launchpad.37signals.com/authorization/token?type=web_server',
  scope: null,
});

@Injectable({
  providedIn: 'root'
})
export class OauthBasecampService {

  constructor(private http$: HttpClient) { }

  async getBasecampToken() {
    // Jso callback
    forMIOBeta.callback();
    // Get Token
    forMIOBeta.getToken({})
    .then((token) => {
      console.log('I got the token: ', token);
    });
  }
}
