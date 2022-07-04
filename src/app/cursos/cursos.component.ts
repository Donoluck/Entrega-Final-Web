import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '@app/services/alumnos.service';
import { Alumnos } from '@app/interface/Alumnos';


//import alumnos from '../../assets/json/alumnos.json';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  //Alumnos: any = alumnos;

  ListaAlumno=new Array<Alumnos>();
  
  constructor(private http:AlumnosService) { }

  ngOnInit(): void {
    this.http.GetAlumnos().subscribe(datos=>{
      for(let i=0;i<datos.items.length;i++){
        console.log(datos.items[i]);
        this.ListaAlumno.push(datos.items[i]);
        console.log(this.ListaAlumno);
      }
      console.log(this.ListaAlumno.length);
    });
  }
}
