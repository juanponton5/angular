import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-locaciones',
  standalone: true,
  imports: [],
  templateUrl: './locaciones.component.html',
  styleUrl: './locaciones.component.css'
})
export class LocacionesComponent implements OnInit{
  public location: any

  constructor(private rickService: RickAndMortyService){}

  ngOnInit(): void {
    this.rickService.obtenerLocaciones().subscribe(
      results => {
        this.location = results

      }
    )
  }
}
