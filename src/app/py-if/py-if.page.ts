import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-py-if',
  templateUrl: './py-if.page.html',
  styleUrls: ['./py-if.page.scss'],
})
export class PyIfPage implements OnInit {
  
  constructor(private router:Router) { }
  backif(){
    this.router.navigate(['py-listout']);
  }
  ifToback(){
    this.router.navigate(['py-dict']);
  }
  ifToNext(){
    this.router.navigate(['py-while']);
  }
  ngOnInit() {
  }

}
