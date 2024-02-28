import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  user: any = {username: ''}
  public currentRoute: string | undefined;

  constructor(private router: Router){
    this.currentRoute = router.url;
  }

  public isLoggedIn(): any {
    if(sessionStorage.getItem('auth')){
      this.user.username = sessionStorage.getItem('username')
      return true;
    } else {
      return false;
    }
  }

  public onClickLogOut() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
