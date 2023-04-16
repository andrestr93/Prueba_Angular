import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductoService]
})
export class HomeComponent implements OnInit {


  constructor(

    private _productoService: ProductoService


  ){}



  ngOnInit(): void {
    this._productoService.getProducts().subscribe({
        next: response => console.log(response),
        error: error => console.log("error", error),
        });
      }
    }






