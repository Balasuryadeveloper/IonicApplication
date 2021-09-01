import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-py-boolean',
  templateUrl: './py-boolean.page.html',
  styleUrls: ['./py-boolean.page.scss'],
})
export class PyBooleanPage implements OnInit {

  constructor(private router:Router) { }
  backBool(){
    this.router.navigate(['py-listout']);
  }
  boolToback(){
    this.router.navigate(['py-string']);
  }
  boolToNext(){
    this.router.navigate(['py-operator']);
  }
  ngOnInit() {
  }

}
