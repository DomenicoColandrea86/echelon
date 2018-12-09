import { fromJS } from 'immutable';

export const initialState = fromJS({});

function languageProviderReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default languageProviderReducer;
