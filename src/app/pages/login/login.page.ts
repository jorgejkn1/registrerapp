import { Component } from '@angular/core'; // Importa @Component
import { Router } from '@angular/router'; // Importa Router para la navegación

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';  // Inicializamos con una cadena vacía
  password: string = '';  // Inicializamos con una cadena vacía

  constructor(private router: Router) {}

  login() {
    // Simulación de validación del nombre de usuario
    if (this.username === 'alumno') {
      // Si el usuario es un alumno
      this.router.navigate(['/intro']);
    } else if (this.username === 'docente') {
      // Si el usuario es un docente
      this.router.navigate(['/logindocente']);
    } else {
      // Si el usuario no es válido, muestra un mensaje de error (opcional)
      alert('Usuario o contraseña incorrectos');
    }
  }
}


