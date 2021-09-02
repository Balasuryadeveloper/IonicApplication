import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-py-func',
  templateUrl: './py-func.page.html',
  styleUrls: ['./py-func.page.scss'],
})
export class PyFuncPage implements OnInit {

  constructor(private router:Router) { }
  backfunc(){
    this.router.navigate(['py-listout']);
  }
  funcToback(){
    this.router.navigate(['py-for']);
  }
  funcToNext(){
    this.router.navigate(['py-array']);
  }
  ngOnInit() {
  }

}
