import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-py-var',
  templateUrl: './py-var.page.html',
  styleUrls: ['./py-var.page.scss'],
})
export class PyVarPage implements OnInit {

  constructor(private router:Router) { }
  backVar(){
    this.router.navigate(['py-listout']);
  }
  VarToback(){
    this.router.navigate(['py-syntax']);
  }
  VarToNext(){
    this.router.navigate(['py-comment']);
  }
  ngOnInit() {
  }

}
