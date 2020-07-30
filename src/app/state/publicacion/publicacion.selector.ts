import {
    createSelector,
    createFeatureSelector
  } from '@ngrx/store';
  import * as fromPublicacion from './publicacion.reducer';
   
  export const selectPublicacionState = createFeatureSelector<fromPublicacion.State>(fromPublicacion.publicacionFeatureKey);
   
  export const selectPublicacionIds = createSelector(
    selectPublicacionState,
    fromPublicacion.selectPublicacionIds // shorthand for publicacionState => fromPublicacion.selectPublicacionIds(publicacionState)
  );
  export const selectPublicacionEntities = createSelector(
    selectPublicacionState,
    fromPublicacion.selectPublicacionEntities
  );
  export const selectAllPublicaciones = createSelector(
    selectPublicacionState,
    fromPublicacion.selectAllPublicaciones
  );
  export const selectPublicacionTotal = createSelector(
    selectPublicacionState,
    fromPublicacion.selectPublicacionTotal
  );
  export const selectCurrentPublicacionId = createSelector(
    selectPublicacionState,
    fromPublicacion.getSelectedPublicacionId
  );
  
  export const gettAllPublicaciones = createSelector(
    selectAllPublicaciones,
    (data) => {
      const allPublicaciones = Object.values(data);
      return allPublicaciones;
    }
  );

  export const selectCurrentPublicacion = createSelector(
    selectPublicacionEntities,
    selectCurrentPublicacionId,
    (publicacionEntities, publicacionId) => publicacionEntities[publicacionId]
  );
