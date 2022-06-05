import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  URL={
    "fa-brands fa-github":"#",
    "fa-brands fa-linkedin":"#",
    "fa-solid fa-envelope":"#",
  "fa-brands fa-whatsapp-square":'#'
  }

}
