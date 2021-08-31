import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-py-listout',
  templateUrl: './py-listout.page.html',
  styleUrls: ['./py-listout.page.scss'],
})
export class PyListoutPage implements OnInit {

  constructor(private router:Router) { }
  intro(){
    this.router.navigate(['py-history']);
  }
  syntax(){
    this.router.navigate(['py-syntax']);
  }
  variables(){
    this.router.navigate(['py-var']);
  }
  dataType(){
    this.router.navigate(['py-datatype']);
  }
  number(){
    this.router.navigate(['py-numbers']);
  }
  ngOnInit() {
  }

}
