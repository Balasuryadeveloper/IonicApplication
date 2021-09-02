import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-py-dict',
  templateUrl: './py-dict.page.html',
  styleUrls: ['./py-dict.page.scss'],
})
export class PyDictPage implements OnInit {

  constructor(private router: Router) { }
  backdict(){
    this.router.navigate(['py-listout']);
  }
  dictToback(){
    this.router.navigate(['py-set']);
  }
  dictToNext(){
    this.router.navigate(['py-if']);
  }
  ngOnInit() {
  }

}
