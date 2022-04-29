import { operators } from '../consts/index';
import { execute } from '../utils/execute';

describe('Postfix expression', () => {
  it('adds 1+2 to equal 3', () => {
    expect(execute(['1', '2',  operators.plus.output])).toEqual('3');
  });
  it('subs 2-1 to equal 1', () => {
    expect(execute(['2', '1', operators.minus.output])).toEqual('1');
  });
  it('subs 2-1 to equal 1', () => {
    expect(execute(['1', '2', operators.minus.output])).toEqual('-1');
  });
  it('multiplies 3*2 to equal 6', () => {
    expect(execute(['3', '2', operators.multiplication.output])).toEqual('6');
  });
  it('dividess 6/2 to equal 3', () => {
    expect(execute(['6', '2', operators.division.output])).toEqual('3');
  });
  it('adds 10+5% to equal 10.5', () => {
    expect(execute(['10', '5', operators.percent.output, operators.plus.output])).toEqual('10,5');
  });
  it('adds 10*5% to equal 10.5', () => {
    expect(execute(['10', '5', operators.percent.output, operators.multiplication.output])).toEqual('0,5');
  });
  it('executes sqrt(144) expression', () => {
    expect(execute(['144', operators.square.output])).toEqual('12');
  });
});