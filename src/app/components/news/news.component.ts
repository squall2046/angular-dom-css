import { Component, OnInit, ViewChild } from '@angular/core';
// 添加 ViewChild

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  // way2: @ViewChild 获取+操作 dom 节点
  // 注意: 'box2' 是 element id, 但是在 ViewChild 中不加'#',
  // 而在 dom 中, 不写< id="box2">, 而是直接写< #box2>

  @ViewChild('box2', { static: false }) boxTwo: any;
  // @ViewChild('foo', {static: true}) foo: ElementRef;
  // query results available in ngOnInit
  // OR
  // @ViewChild('foo', {static: false}) foo: ElementRef;
  // query results available in ngAfterViewInit

  @ViewChild('para', { static: false }) para: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    this.boxTwo.nativeElement.style.color = 'red';
    console.log(this.boxTwo.nativeElement.innerHTML);

    // news 是父组件, paragraph 是子组件, 调用子组件 callPara()
    this.para.callPara();
  }

  getChild() {
    this.para.callPara();
  }
}
