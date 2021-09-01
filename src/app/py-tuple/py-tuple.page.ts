import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-py-tuple',
  templateUrl: './py-tuple.page.html',
  styleUrls: ['./py-tuple.page.scss'],
})
export class PyTuplePage implements OnInit {

  constructor(private router:Router) { }
  backtup(){
    this.router.navigate(['py-listout']);
  }
  tupToback(){
    this.router.navigate(['py-list']);
  }
  tupToNext(){
    this.router.navigate(['py-set']);
  }
  ngOnInit() {
  }

}
