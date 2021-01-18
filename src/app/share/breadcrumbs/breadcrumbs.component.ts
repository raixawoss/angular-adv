import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter,map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnDestroy {
  public titulo:string;
  public titulosubs$:Subscription;
  constructor(private router: Router) {
   this.titulosubs$ =this.getArgumentosRuta().subscribe(event => {
    console.log(event);
    this.titulo=event;
    document.title=this.titulo;
   
  })
  }
  getArgumentosRuta(){
    
   return this.router.events.
      pipe(
        filter(event => event instanceof ActivationEnd),
        filter((event:ActivationEnd) =>event.snapshot.firstChild===null),
        map( (event:ActivationEnd)=>event.snapshot.data.titulo)
      )
        //si no entiendes pregnta ctmre no soy adivino 
  }
  ngOnDestroy(){
    this.titulosubs$.unsubscribe();
  }



}
