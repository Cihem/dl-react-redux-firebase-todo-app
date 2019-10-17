import { createSelector } from "reselect";

export const selectLocalState = (state) => state.localState;

export const menuSelector = createSelector(
  [selectLocalState],
  (localState) => localState.menu,
);