import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-py-scope',
  templateUrl: './py-scope.page.html',
  styleUrls: ['./py-scope.page.scss'],
})
export class PyScopePage implements OnInit {

  constructor(private router:Router) { }
  backscope(){
    this.router.navigate(['py-listout']);
  }
  scopeToback(){
    this.router.navigate(['py-iterator']);
  }
  scopeToNext(){
    this.router.navigate(['py-module']);
  }

  ngOnInit() {
  }

}
