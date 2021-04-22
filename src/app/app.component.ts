import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // "Señor componente, vos te vas a llamar 'app-root', y ésta va a ser tu etiqueta HTML. Dónde aparezca tu etiqueta, vas a renderizar el contenido de la ruta especificada en 'templateUrl'."
  templateUrl: './app.component.html', // "Y a su vez, en ésta ruta vas a renderizar las propiedades de la clase AppComponent."
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rm'; // Cuando el archivo especificado en 'templateUrl' encuentre la variable {{ title }} dentro de sí mismo, va a renderizar en esa posición el contenido acá especificado.
}
