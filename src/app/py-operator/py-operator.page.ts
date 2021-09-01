import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-py-operator',
  templateUrl: './py-operator.page.html',
  styleUrls: ['./py-operator.page.scss'],
})
export class PyOperatorPage implements OnInit {

  constructor(private router:Router) { }
  backop(){
    this.router.navigate(['py-listout']);
  }
  opToback(){
    this.router.navigate(['py-boolean']);
  }
  opToNext(){
    this.router.navigate(['py-list']);
  }
  ngOnInit() {
  }

}
