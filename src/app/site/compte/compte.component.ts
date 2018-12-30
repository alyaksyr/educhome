import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      identifiant: [''],
      password: ['']
    });
  }
 onCreerUnCompte() {
    this.router.navigate(['site/register']);
  }

  onSubmit() {
    this.router.navigate(['admin']);
  }

  login() {
    this.router.navigate(['admin']);
  }
}
