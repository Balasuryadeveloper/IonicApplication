import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-py-datatype',
  templateUrl: './py-datatype.page.html',
  styleUrls: ['./py-datatype.page.scss'],
})
export class PyDatatypePage implements OnInit {

  constructor(private router:Router) { }
  backDataType(){
    this.router.navigate(['py-listout'])
  }
  dtToback(){
    this.router.navigate(['py-comment']);
  }
  dtToNext(){
    this.router.navigate(['py-numbers']);
  }
  ngOnInit() {
  }

}
