import { Routes } from '@angular/router';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { LocacionesComponent } from './components/locaciones/locaciones.component';
import { EpisodiosComponent } from './components/episodios/episodios.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path: 'personajes',
        component: PersonajesComponent
    },
    {
        path: 'localidades',
        component: LocacionesComponent
    },
    {
        path: "episodios",
        component: EpisodiosComponent
    }
];
