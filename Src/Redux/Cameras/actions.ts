import {returnToDispatch} from '../../Utils/ApiHelper';
import {
  ADD_CAMERA_FAILURE,
  ADD_CAMERA_REQUEST,
  ADD_CAMERA_SUCCESS,
} from './actionTypes';

export const handleAddCamera = (payload: any, oldData: any) => {
  return (dispatch: any) => {
    returnToDispatch(dispatch, ADD_CAMERA_REQUEST);
    const newData = [...oldData];
    newData.push(payload);
    returnToDispatch(dispatch, ADD_CAMERA_SUCCESS, newData);
  };
};
