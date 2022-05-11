/*import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { store } from '../index';
import { TCalcActions } from '../redux/actions/calc-actions';

export type TRootState = ReturnType<typeof store.getState>;

export type TApplicationActions = TCalcActions; 

export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, TRootState, TApplicationActions>
>;

export type AppDispatch = typeof store.dispatch;*/
