import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public formLogin = new FormGroup({
    username: new FormControl('', [
      Validators.maxLength(100),
      Validators.required,

    ]),
    password: new FormControl('',[
      Validators.maxLength(100),
      Validators.required,

    ]),
  });

  public isPasswordVisible: boolean = true;
  public user: user | undefined;

  constructor(private  ngxSpinner: NgxSpinnerService,private router: Router, private auth: AuthenticationService) {

  }


  public onClickRegister(): void {
    const user = {
      username: 'john',
      password: '123',
      role: 'ADMIN'
    }
    this.ngxSpinner.show();
    this.auth.registerUser(user).subscribe({
      next: (response) => {
        console.log('register', this.user);
        this.ngxSpinner.hide();
      },
      error: (err) => {
        alert('An error occurred, please contact Sys.Admin \n' + JSON.stringify(err));
        this.ngxSpinner.hide();

      }
    })
  }

  public onClickLogin(): void {
    const user = {
      username: this.formLogin.get('username')?.value,
      password: this.formLogin.get('password')?.value,
    }

    this.ngxSpinner.show();
    this.auth.loginUser(user).subscribe({
      next: (response) => {

        this.user = response;
        sessionStorage.setItem('auth', this.user!.token!)
        sessionStorage.setItem('username', this.user?.username!)

        this.ngxSpinner.hide();
        this.router.navigate(['/dashboard']);
        //work in progess (vitor)
        // this.dialog.open(DialogSpinnerComponent, {
        //   data: {
        //     title: 'Sucesso',
        //     message: 'Autenticado com sucesso!',
        //     isSuccess: true
        //   }
        // })
      },
      error: (err) => {
        console.log("trigger error");
        //work in progess (vitor)
        // this.dialog.open(DialogSpinnerComponent, {
        //   data: {
        //     title: 'Erro',
        //     message: 'Occorreu um erro, por favor tente novamente.',
        //     isSuccess: false
        //   }
        // })
        this.ngxSpinner.hide();

      }
    })
  }

  public onClickCallCategories() {
    this.auth.callCategories().subscribe({
      next: (response) => {

        console.log(response);
      },
      error: (err) => {
        alert('An error occurred, please contact Sys.Admin \n' + JSON.stringify(err));
      }
    })
  }
}

export interface user {
  username?: string,
  role?: string,
  token?: string
}
