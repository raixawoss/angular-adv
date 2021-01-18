import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy{

  public intervalSubs:Subscription;

  constructor() {
    // this.retornaObservable().pipe(
    //  retry() //los argumentos del retry son el numero de veces que puede intertarlo
    //  ).subscribe(
    // valor => console.log('subs', valor),
    // error => console.warn('Error', error),
    //  () => console.info('Obs terminado')
    // );
    this.intervalSubs = this.retornaIntervalo().subscribe(
      console.log
    )

  }

  retornaIntervalo():Observable<number> {
    return interval(500).
      pipe(
        take(10),
        map(valor => valor + 1),
        filter(valor=>(valor%2===0)?true:false),
        )//el orden del take define los valores que desea emitir 

  }
  retornaObservable(): Observable<number> {
    let i = -1;
    const obs$ = new Observable<number>(observer => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (i === 2) {
          observer.error('i llego al valor de 2');
        }
      }, 1000)
    });
    return obs$;
  }
  ngOnDestroy():void{
    this.intervalSubs.unsubscribe();
    
  }
 


}
