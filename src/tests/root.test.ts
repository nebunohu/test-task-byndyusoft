import { TApplicationActions } from './../types/index';
import { updateInput, updateResult, clearCalc } from './../redux/actions/calc-actions';
import { calcReducer, calcInitialState } from './../redux/reducers/root';

describe('Root reducer', () => {
  it('returns initial state', () => {
    expect(calcReducer(undefined, {} as TApplicationActions)).toEqual(calcInitialState);
  });
  it('updates input', () => {
    expect(calcReducer(calcInitialState, updateInput('1+1'))).toEqual({...calcInitialState, input: '1+1'});
  });
  it('updates result', () => {
    expect(calcReducer(calcInitialState, updateResult('12345'))).toEqual({...calcInitialState, result: '12345', isCalculated: true});
  });
  it('clears calc state', () => {
    expect(calcReducer(calcInitialState, clearCalc())).toEqual({...calcInitialState});
  });
});