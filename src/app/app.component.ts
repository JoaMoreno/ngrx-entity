import { Component } from '@angular/core';
import * as actions from './state/publicacion/publicacion.actions'
import * as fromPublicacion from './state/publicacion/publicacion.reducer'
import * as fromPublicacionSelector from './state/publicacion/publicacion.selector'
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Update, Dictionary } from '@ngrx/entity';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-entity';

  publicaciones$: fromPublicacion.Publicacion[];

  constructor(private store$: Store<fromPublicacion.State>) { }

  ngOnInit() {
    this.store$.select(fromPublicacionSelector.gettAllPublicaciones)
    .subscribe(data => {
      this.publicaciones$ = data
      console.log(data)
    })
  }

  createPublicacion(){
    const publicacion: fromPublicacion.Publicacion = {
      id: new Date().getUTCMilliseconds(),
      likes: 0
    }
    this.store$.dispatch(actions.createPublicacion({publicacion : publicacion}))
  }

  incrementLikes(publicacion: fromPublicacion.Publicacion){
    const update: Update<fromPublicacion.Publicacion> = {
      id: publicacion.id,
      changes: {likes: publicacion.likes++}
    }
    this.store$.dispatch(actions.updatePublicacion({update: update}))
  }

}
