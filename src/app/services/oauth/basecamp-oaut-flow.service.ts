import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// Set all credentials
const clientId = '3a68522a3207193c700e5422d48e0ac9025a43d1';
const clientSecretId = 'ad4f9ca8eaffedea8a71e06441a17527ea401120&';
const redirectUri = 'https://mio-api-basecamp.firebaseapp.com/auth/';


@Injectable({
  providedIn: 'root'
})
export class BasecampOautFlowService {

  constructor(private http$: HttpClient) { }

  // Get
  getAccessCode() {
    const getAccessCodeUrl = `https://launchpad.37signals.com/authorization/new?type=web_server&client_id=${clientId}&redirect_uri=${redirectUri}`;
    const newwindow = window.open(getAccessCodeUrl, 'jso-popup-auth', 'height=600,width=800');
    if (newwindow === null) {
      throw new Error('Error loading popup window');
    }
    if (window.focus) {
      newwindow.focus();
    }
  }

  // Post
  async getAccessToken(code: string) {
    const response = await this.http$.post(`https://divine-haze-d70d.mio-agency-proxy.workers.dev/?https://launchpad.37signals.com/authorization/token?type=web_server&client_id=${clientId}&redirect_uri=${redirectUri}&client_secret=${clientSecretId}&code=${code}`, {}).toPromise();
    console.log('DEWW0', response);
    return response;
  }
}
