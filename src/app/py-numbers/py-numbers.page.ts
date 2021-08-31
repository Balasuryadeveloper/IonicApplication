import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-py-numbers',
  templateUrl: './py-numbers.page.html',
  styleUrls: ['./py-numbers.page.scss'],
})
export class PyNumbersPage implements OnInit {

  constructor(private router:Router) { }
  backNumbers(){
    this.router.navigate(['py-listout']);
  }
  numToback(){
    this.router.navigate(['py-datatype']);
  }
  numToNext(){
    this.router.navigate(['py-string']);
  }
  ngOnInit() {
  }

}
