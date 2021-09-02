import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-py-ui',
  templateUrl: './py-ui.page.html',
  styleUrls: ['./py-ui.page.scss'],
})
export class PyUiPage implements OnInit {

  constructor(private router:Router) { }
  backui(){
    this.router.navigate(['py-listout']);
  }
  backhere(){
    this.router.navigate(['py-math']);
  }

  ngOnInit() {
  }

}
