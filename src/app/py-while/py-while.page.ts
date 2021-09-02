import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-py-while',
  templateUrl: './py-while.page.html',
  styleUrls: ['./py-while.page.scss'],
})
export class PyWhilePage implements OnInit {

  constructor(private router:Router) { }
  backwhile(){
    this.router.navigate(['py-listout']);
  }
  whileToback(){
    this.router.navigate(['py-if']);
  }
  whileToNext(){
    this.router.navigate(['py-for']);
  }
  ngOnInit() {
  }

}
