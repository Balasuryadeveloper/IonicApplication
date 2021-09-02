import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-py-listout',
  templateUrl: './py-listout.page.html',
  styleUrls: ['./py-listout.page.scss'],
})
export class PyListoutPage implements OnInit {

  constructor(private router:Router) { }
  intro(){
    this.router.navigate(['py-history']);
  }
  syntax(){
    this.router.navigate(['py-syntax']);
  }
  variables(){
    this.router.navigate(['py-var']);
  }
  dataType(){
    this.router.navigate(['py-datatype']);
  }
  number(){
    this.router.navigate(['py-numbers']);
  }
  comment(){
    this.router.navigate(['py-comment'])
  }
  string(){
    this.router.navigate(['py-string']);
  }
  boolean(){
    this.router.navigate(['py-boolean']);
  }
  list(){
    this.router.navigate(['py-list']);
  }
  tuple(){
    this.router.navigate(['py-tuple']);
  }
  set(){
    this.router.navigate(['py-set']);
  }
  dict(){
    this.router.navigate(['py-dict']);
  }
  ifel(){
    this.router.navigate(['py-if']);
  }
  whil(){
    this.router.navigate(['py-while'])
  }
  pyfor(){
    this.router.navigate(['py-for']);
  }
  pyfunc(){
    this.router.navigate(['py-func']);
  }
  pyarray(){
    this.router.navigate(['py-array']);
  }
  clsobj(){
    this.router.navigate(['py-clsobj']);
  }
  pyinheritance(){
    this.router.navigate(['py-inheritance']);
  }
  pyiterator(){
    this.router.navigate(['py-iterator']);
  }
  pyscope(){
    this.router.navigate(['py-scope']);
  }
  pymodule(){
    this.router.navigate(['py-module']);
  }
  pymath(){
    this.router.navigate(['py-math']);
  }
  pyui(){
    this.router.navigate(['py-ui']);
  }
  ngOnInit() {
  }

}
