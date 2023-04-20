import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: any;

  constructor(private auth: AuthService) { }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    rememberMe: new FormControl(''),
  });

  ngOnInit(): void {
  }

  onSubmit(){
    this.auth.getToken(JSON.stringify(this.loginForm.value)).subscribe( {
      next: data => {
        //console.log(data)
    },
      error: error => {
        this.errorMessage = 'Error Occured';
        console.error('There was an error!', error);
    }
  })
}

}
