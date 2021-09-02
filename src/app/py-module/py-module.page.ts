import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-py-module',
  templateUrl: './py-module.page.html',
  styleUrls: ['./py-module.page.scss'],
})
export class PyModulePage implements OnInit {

  constructor(private router:Router) { }
  backmodule(){
    this.router.navigate(['py-listout']);
  }
  moduleToback(){
    this.router.navigate(['py-scope']);
  }
  moduleToNext(){
    this.router.navigate(['py-math']);
  }

  ngOnInit() {
  }

}
