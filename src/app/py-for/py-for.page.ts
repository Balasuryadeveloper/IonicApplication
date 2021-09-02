import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-py-for',
  templateUrl: './py-for.page.html',
  styleUrls: ['./py-for.page.scss'],
})
export class PyForPage implements OnInit {

  constructor(private router:Router) { }
  backfor(){
    this.router.navigate(['py-listout']);
  }
  forToback(){
    this.router.navigate(['py-while']);
  }
  forToNext(){
    this.router.navigate(['py-func']);
  }
  ngOnInit() {
  }

}
