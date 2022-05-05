import { addTokenToInput } from './../utils/add-token-to-input';

describe('Function', () => {
  it('adds 1 to input string "123"', () => {
    expect(addTokenToInput('1', '123', false)).toEqual('1231');
  });
  it("adds '+' to input string '123'", () => {
    expect(addTokenToInput('+', '123', false)).toEqual('123+');
  });
  it("changes '-' to '+' input string '123-'", () => {
    expect(addTokenToInput('+', '123-', false)).toEqual('123+');
  });
  it("clears input string at adds '1' to input string", () => {
    expect(addTokenToInput('1', '123', true)).toEqual('1');
  });
  it("starts input string by '0' when adds '+' to empty input string", () => {
    expect(addTokenToInput('+', '', true)).toEqual('0+');
  });
});