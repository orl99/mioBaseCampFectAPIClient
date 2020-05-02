import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasecampOautFlowService {

  constructor(http$: HttpClient) { }

  // Get
  getAccessCode(){
    const getAccessCodeUrl = 'https://launchpad.37signals.com/authorization/new?type=web_server&client_id=3a68522a3207193c700e5422d48e0ac9025a43d1&redirect_uri=https://mio-api-basecamp.firebaseapp.com/auth/';
    const newwindow = window.open(getAccessCodeUrl, 'jso-popup-auth', 'height=600,width=800');
    if (newwindow === null) {
      throw new Error('Error loading popup window');
    }
    if (window.focus) {
      newwindow.focus();
    }
  }

  // Post
}
