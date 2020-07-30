import { Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import * as actions from '../state/publicacion/publicacion.actions'
import * as fromPublicacion from '../state/publicacion/publicacion.reducer'
import * as fromPublicacionSelector from '../state/publicacion/publicacion.selector'
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Update, Dictionary } from '@ngrx/entity';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicacionComponent implements OnInit {

  @Input() publicacion;

  constructor(private store$: Store<fromPublicacion.State>) { }

  ngOnInit() {
  }

  incrementLikes(){
    const update: Update<fromPublicacion.Publicacion> = {
      id: this.publicacion.id,
      changes: {likes: this.publicacion.likes+1}
    }
    this.store$.dispatch(actions.updatePublicacion({update: update}))
  }

}
