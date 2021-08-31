import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-py-history',
  templateUrl: './py-history.page.html',
  styleUrls: ['./py-history.page.scss'],
})
export class PyHistoryPage implements OnInit {

  constructor(private router:Router) { }

  back(){
    this.router.navigate(['py-listout'])
  }
  hisToSyntax(){
    this.router.navigate(["py-syntax"]);
  }
  ngOnInit() {
  }

}
