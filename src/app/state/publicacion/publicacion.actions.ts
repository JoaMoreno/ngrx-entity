import { createAction, props } from '@ngrx/store';
import { Publicacion } from './publicacion.reducer';
import { Update } from '@ngrx/entity';

export const createPublicacion = createAction('[Publicacion/API] Create Publicacion', props<{ publicacion: Publicacion }>());
export const updatePublicacion = createAction('[Publicacion/API] Update Publicacion', props<{ update: Update<Publicacion> }>());
export const deletePublicacion = createAction('[Publicacion/API] Delete Publicacion', props<{ id: number }>());
export const selectPublicacion = createAction('[Publicacion] Select Publicacion',     props<{ publicacionId: number }>());
export const loadPublicaciones = createAction('[Publicacion/API] Load Publicaciones', props<{ publicaciones: Publicacion[] }>());
