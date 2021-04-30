import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user/user.model';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  user = new User();

  constructor() { }

  ngOnInit(): void {
  }

  save( formulario: NgForm ) {
    console.log( formulario );
  }

}
