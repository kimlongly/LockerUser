import {
  ADD_CAMERA_FAILURE,
  ADD_CAMERA_REQUEST,
  ADD_CAMERA_SUCCESS,
} from './actionTypes';

const initialState = {
  data: [],
  loading: false,
  error: '',
};

export default function Camera(state = initialState, action: any) {
  switch (action.type) {
    case ADD_CAMERA_REQUEST:
      return Object.assign({}, state, {
        loading: true,
      });
    case ADD_CAMERA_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        data: action.payload,
        error: '',
      });
    }
    case ADD_CAMERA_FAILURE: {
      return Object.assign({}, state, {
        loading: false,
        error: action.payload,
      });
    }
    default:
      return state;
  }
}
