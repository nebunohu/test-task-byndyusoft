import { operators } from "../consts";
import { toPostfix } from "../utils/to-postfix";


describe('Function', () => {
  it('converts "1+1" to ["1","1","+"]', () => {
    expect(toPostfix('1+1')).toEqual(["1","1","+"]);
  });
  it('converts "1+1%" to ["1","1","%","+"]', () => {
    expect(toPostfix('1+1%')).toEqual(["1","1","%","+"]);
  });
  it('converts "1+1*3" to ["1","1","3","*","+"]', () => {
    expect(toPostfix(`1+1${operators.multiplication.output}3`)).toEqual(["1","1","3",operators.multiplication.output,"+"]);
  });
  it('converts "1+1*6/2+5" to ["1","1","6","×","2","/","5","+","+",]', () => {
    expect(toPostfix(`1+1${operators.multiplication.output}6/2+5`)).toEqual(["1","1","6",operators.multiplication.output,"2","/","5","+","+",]);
  });
  it('converts "10+5%" to ["10","5","%","+"]', () => {
    expect(toPostfix(`10+5%`)).toEqual(["10","5","%","+"]);
  });
  it(`converts "${operators.square.output}(5)" to ["5",${operators.square.output}}]`, () => {
    expect(toPostfix(`${operators.square.output}(5)`)).toEqual(["5", operators.square.output]);
  });
  it(`converts "${operators.square.output}(5${operators.multiplication.output}2+4-1)${operators.multiplication.output}4-2" to ["5", "2", ${operators.multiplication.output},"4", "+", "1", "-", "√", "4", ${operators.multiplication.output}, "2", "-"]`, () => {
    expect(toPostfix(`${operators.square.output}(5${operators.multiplication.output}2+4-1)${operators.multiplication.output}4-2`))
      .toEqual(["5", "2", operators.multiplication.output,"4", "+", "1", "-", "√", "4", operators.multiplication.output, "2", "-"]);
  });
});