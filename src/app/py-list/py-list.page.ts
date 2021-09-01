import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-py-list',
  templateUrl: './py-list.page.html',
  styleUrls: ['./py-list.page.scss'],
})
export class PyListPage implements OnInit {

  constructor(private router:Router) { }
  backlist(){
    this.router.navigate(['py-listout']);
  }
  listToback(){
    this.router.navigate(['py-operator']);
  }
  listToNext(){
    this.router.navigate(['py-tuple']);
  }
  ngOnInit() {
  }

}
