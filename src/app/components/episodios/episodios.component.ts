import { Component } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-episodios',
  standalone: true,
  imports: [],
  templateUrl: './episodios.component.html',
  styleUrl: './episodios.component.css'
})
export class EpisodiosComponent {
  public episodios: any

  constructor(private rickService: RickAndMortyService){}

  ngOnInit(): void {
    this.rickService.obtenerEpisodios().subscribe(
      results => {
        this.episodios = results
      }
    )
  }
}
