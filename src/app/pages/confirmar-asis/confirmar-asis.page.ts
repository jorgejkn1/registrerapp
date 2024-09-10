import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmar-asis',
  templateUrl: './confirmar-asis.page.html',
  styleUrls: ['./confirmar-asis.page.scss'],
})
export class ConfirmarAsisPage {

  constructor(private router: Router) {}

  goToIntro() {
    this.router.navigate(['/intro']);
  }

}

