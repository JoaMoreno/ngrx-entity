import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromPublicacion from '../publicacion/publicacion.reducer'

export interface State {
  [fromPublicacion.publicacionFeatureKey]: fromPublicacion.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromPublicacion.publicacionFeatureKey]: fromPublicacion.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
