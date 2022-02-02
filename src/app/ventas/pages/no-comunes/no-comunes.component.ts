import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Rafael';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }


  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Rafael', 'Ernesto', 'Alba'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente eserando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando',
  }


  cambiarCliente() {
      this.nombre = 'Alba';
      this.genero = 'femenino';
  }

  borrarCliente() {
      this.clientes.pop();
  }


  //KeyValue Pipe
  persona = {
    nombre: 'Rafael',
    edad: 35,
    direccion: 'Cordoba, España'
  };

  //Json Pipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: false
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  // Async Pipe
  miObservable = interval(2000);// 0,1,2,3,4...

  valorPromesa = new Promise( (resolve, reject) => {

    setTimeout( () => {
      resolve( 'Tenemos data de promesa' );
    }, 3500 );

  });

}
