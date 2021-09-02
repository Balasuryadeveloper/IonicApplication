import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-py-inheritance',
  templateUrl: './py-inheritance.page.html',
  styleUrls: ['./py-inheritance.page.scss'],
})
export class PyInheritancePage implements OnInit {

  constructor(private router:Router) { }
  backinhar(){
    this.router.navigate(['py-listout']);
  }
  inharToback(){
    this.router.navigate(['py-clsobj']);
  }
  inharToNext(){
    this.router.navigate(['py-iterator']);
  }
  ngOnInit() {
  }

}
