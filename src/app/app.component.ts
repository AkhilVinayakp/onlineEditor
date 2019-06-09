import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle: boolean;
  title: string;
  mc:number;
  toggling_page={};
  toggling_wrapper={}
  toggling_sidebar={}
  constructor() {
    this.toggle = true;
    this.title = 'Online Editor';
    this.mc=1;

  }

  toggleme(e) {
      console.log(e)
      this.mc++;
      if(this.mc % 2 ==0)
            this.toggle=true;
      else
            this.toggle=false;
      
     this.toggling_page={

       'page_ttogle':this.toggle
     }
     this.toggling_wrapper={
        'ttoggle':this.toggle
     }
     this.toggling_sidebar =
     {
       'sidebar_ttoggle':this.toggle
     }
     this.toggle=false
  }
 
}

