import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  nombre: string = "Kylian";
  private edad: number = 30;

  constructor() { }

  ngOnInit(): void {
  }

  getEdad():number{
    return this.edad;
  }

}
