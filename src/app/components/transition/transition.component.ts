import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.css']
})
export class TransitionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // toggle aside
  public show: boolean = false;

  toggleAside() {
    // 原生 JS 获取 DOM 节点
    let asideDom: any = document.getElementsByTagName('aside')[0]
    console.log(asideDom.style.transform)
    if (this.show == false) {
      asideDom.style.transform = 'translate(0,0)';
      this.show = true;
    } else {
      asideDom.style.transform = 'translate(100%,0)';
      this.show = false;
    }
  }
}
