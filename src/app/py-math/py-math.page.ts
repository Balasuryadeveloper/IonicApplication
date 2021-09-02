import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-py-math',
  templateUrl: './py-math.page.html',
  styleUrls: ['./py-math.page.scss'],
})
export class PyMathPage implements OnInit {

  constructor(private router:Router) { }
  backmath(){
    this.router.navigate(['py-listout']);
  }
 mathToback(){
    this.router.navigate(['py-module']);
  }
  mathToNext(){
    this.router.navigate(['py-ui']);
  }

  ngOnInit() {
  }

}
