import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-py-set',
  templateUrl: './py-set.page.html',
  styleUrls: ['./py-set.page.scss'],
})
export class PySetPage implements OnInit {

  constructor(private router:Router) { }
  backset(){
    this.router.navigate(['py-listout']);
  }
  setToback(){
    this.router.navigate(['py-tuple']);
  }
  setToNext(){
    this.router.navigate(['py-dict'])
  }
  ngOnInit() {
  }

}
