import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-py-string',
  templateUrl: './py-string.page.html',
  styleUrls: ['./py-string.page.scss'],
})
export class PyStringPage implements OnInit {

  constructor(private router: Router) { }
  backstring(){
    this.router.navigate(['py-listout']);
  }
  ngOnInit() {
  }

}
