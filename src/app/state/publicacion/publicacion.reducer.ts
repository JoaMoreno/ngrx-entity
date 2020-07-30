import * as actions from './publicacion.actions';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';

export const publicacionFeatureKey = 'publicacion'

// Main data interface

export interface Publicacion {
    id: number;
    likes: number;
}

export function selectPublicacionId(a: Publicacion): number {
    //In this case this would be optional since primary key is id
    return a.id;
}

// Entity adapter
export const publicacionAdapter: EntityAdapter<Publicacion> = createEntityAdapter<Publicacion>({
    selectId: selectPublicacionId,
});

export interface State extends EntityState<Publicacion> {
    // additional entities state properties
    selectedPublicacionId: number | null;
};

// Default data / Initial state

const defaultPublicacion: State = {
    selectedPublicacionId: null,
    ids:[1],
    entities: {
        1:{ id: 1, likes: 0}
    }
    
}

export const initialState: State = publicacionAdapter.getInitialState(defaultPublicacion);



const _publicacionReducer = createReducer(initialState,
    on(actions.createPublicacion, (state, action) => {
        return publicacionAdapter.addOne(action.publicacion, state)
    }),
    on(actions.updatePublicacion, (state, { update }) => {
        return publicacionAdapter.updateOne(update, state);
    }),
    on(actions.deletePublicacion, (state, { id }) => {
        return publicacionAdapter.removeOne(id, state);
    }),
    on(actions.selectPublicacion, (state, { publicacionId }) => {
        return { ...state, selectedPublicacionId: publicacionId };
    }),
    on(actions.loadPublicaciones, (state, { publicaciones }) => {
        return publicacionAdapter.addMany(publicaciones, { ...state, selectedPublicacionId: null });
    })
);

export function reducer(state, action) {
    return _publicacionReducer(state, action);
}

export const getSelectedPublicacionId = (state: State) => state.selectedPublicacionId;

// get the selectors
const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = publicacionAdapter.getSelectors();

// select the array of Publicacion ids
export const selectPublicacionIds = selectIds;

// select the dictionary of Publicacion entities
export const selectPublicacionEntities = selectEntities;

// select the array of Publicacions
export const selectAllPublicaciones = selectAll;

// select the total Publicacion count
export const selectPublicacionTotal = selectTotal;