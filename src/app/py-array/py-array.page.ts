import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-py-array',
  templateUrl: './py-array.page.html',
  styleUrls: ['./py-array.page.scss'],
})
export class PyArrayPage implements OnInit {

  constructor(private router:Router) { }
  backarray(){
    this.router.navigate(['py-listout']);
  }
  arrayToback(){
    this.router.navigate(['py-func']);
  }
  arrayToNext(){
    this.router.navigate(['py-clsobj']);
  }
  ngOnInit() {
  }

}
