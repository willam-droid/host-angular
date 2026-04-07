import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true, // Good practice to explicitly declare this
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit, OnDestroy {

  // 1. Combine all injected services into a single constructor
  constructor(
    private renderer: Renderer2,
    private router: Router
  ) {}

  // 2. Add the class when the login page loads
  ngOnInit(): void {
    this.renderer.addClass(document.body, 'login-page');
  }

  // 3. REMOVE the class when the user leaves to go to the dashboard
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'login-page');
  }

  // The function that runs when the button is clicked
  login() {
    // Later, you will add your email/password checking logic right here!

    // For now, just send the user straight to the dashboard
    this.router.navigate(['/dashboard']);
  }
}
