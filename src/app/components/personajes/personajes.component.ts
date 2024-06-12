import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent implements OnInit {
  public personajes: any

  constructor(private rickService: RickAndMortyService){}

  ngOnInit(): void {
    this.rickService.obtenerPersonajes().subscribe(
      results => {
        this.personajes = results
      }
    )
  }
}
