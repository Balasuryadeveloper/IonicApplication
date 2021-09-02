import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-py-clsobj',
  templateUrl: './py-clsobj.page.html',
  styleUrls: ['./py-clsobj.page.scss'],
})
export class PyClsobjPage implements OnInit {

  constructor(private router:Router) { }
  backclsobj(){
    this.router.navigate(['py-listout']);
  }
  clsobjToback(){
    this.router.navigate(['py-array']);
  }
  clsobjToNext(){
    this.router.navigate(['py-inheritance']);
  }
  ngOnInit() {
  }

}
