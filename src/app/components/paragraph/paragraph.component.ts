import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  callPara(){
    console.log('A method of the paragraph component')
  }
}
