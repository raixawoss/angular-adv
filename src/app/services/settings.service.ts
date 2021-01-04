import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linktheme = document.querySelector('#theme');
  constructor() { 
    console.log('Settings provider');
    const url= localStorage.getItem('theme') || './assets/css/colors/megna-dark.css';
    this.linktheme.setAttribute('href',url);
  }
  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    console.log(url);
    this.linktheme.setAttribute('href',url);
    localStorage.setItem('theme',url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(){
    // working
     const links=document.querySelectorAll('.selector');
      links.forEach(elem =>{
      elem.classList.remove('working');
      const btnTheme=elem.getAttribute('data-theme');
      const btnThemeUrl=`./assets/css/colors/${ btnTheme }.css`;
      const currentTheme =this.linktheme.getAttribute('href');
     if(btnThemeUrl===currentTheme){
       elem.classList.add('working');
     }
 
    })
   }
}
