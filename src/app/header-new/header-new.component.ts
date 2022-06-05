import { Component, OnInit } from '@angular/core';
import { LoacalService } from '../loacal.service';

@Component({
  selector: 'app-header-new',
  templateUrl: './header-new.component.html',
  styleUrls: ['./header-new.component.css']
})
export class HeaderNewComponent implements OnInit {

  constructor(public LocalSer: LoacalService) { }

  ngOnInit(): void {
  }

}
