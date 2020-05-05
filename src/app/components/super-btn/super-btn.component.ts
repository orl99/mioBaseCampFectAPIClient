import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-btn',
  templateUrl: './super-btn.component.html',
  styleUrls: ['./super-btn.component.scss']
})
export class SuperBtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pepitoBtnClick( event: Event) {
    console.log(event, 'event');
  }

}
