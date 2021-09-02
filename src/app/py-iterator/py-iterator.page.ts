import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-py-iterator',
  templateUrl: './py-iterator.page.html',
  styleUrls: ['./py-iterator.page.scss'],
})
export class PyIteratorPage implements OnInit {

  constructor(private router:Router) { }
  backiter(){
    this.router.navigate(['py-listout']);
  }
  iterToback(){
    this.router.navigate(['py-inheritance']);
  }
  iterToNext(){
    this.router.navigate(['py-scope']);
  }

  ngOnInit() {
  }

}
