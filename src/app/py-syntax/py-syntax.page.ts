import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-py-syntax',
  templateUrl: './py-syntax.page.html',
  styleUrls: ['./py-syntax.page.scss'],
})
export class PySyntaxPage implements OnInit {

  constructor(private router : Router) { }
  backSyntax(){
    this.router.navigate(['py-listout'])
  }
  SynToback(){
    this.router.navigate(['py-history'])
  }
  SynToNext(){
    this.router.navigate(['py-var'])
  }
  ngOnInit() {
  }

}
