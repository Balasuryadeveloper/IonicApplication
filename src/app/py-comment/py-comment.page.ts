import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' 
@Component({
  selector: 'app-py-comment',
  templateUrl: './py-comment.page.html',
  styleUrls: ['./py-comment.page.scss'],
})
export class PyCommentPage implements OnInit {

  constructor(private router:Router) { }
  backComment(){
    this.router.navigate(['py-listout']);
  }
  ComToback(){
    this.router.navigate(['py-var']);
  }
  ComToNext(){
    this.router.navigate(['py-datatype'])
  }
  ngOnInit() {
  }

}
