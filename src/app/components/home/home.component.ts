import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    // 生命周期函数之 ngOnInit() {}
    // 是组件和指令初始化完成, 并不是真正的 dom 加载完成,
    // 如果 dom 里有 angular 指令, 例如*ngif="box", 会报错.
    // eg: <div id="box1" *ngif="box"> box </div>.
    // 所以 ngOnInit() {} 获取不到 dom 节点.不要把 dom 操作放在这里.
  }


  ngAfterViewChecked(): void {
    // way1: JS 原生方法 获取+操作 dom 节点
    // 生命周期函数之 ngAfterViewChecked(): void {}
    // 是视图加载完以后触发的方法 dom加载完成
    // (建议把 dom 操作放在这里面)
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    let boxOne: any = document.getElementById('box1')
    boxOne.style.color = 'blue'
  }
}
