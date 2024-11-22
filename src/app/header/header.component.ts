import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  P1="Bonjour";
  P3: string = '';
  Methode1()
  {
    return 2 ;
  }
 P2:Boolean=false ;
 msg:string='';
 Methode2()
 {
   this.msg="Ok EventBinding ! ";
 }

}
