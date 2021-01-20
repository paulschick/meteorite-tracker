import { FormatMassPipe } from "./format-mass.pipe";

describe('FormatMassPipe', () => {

  let pipe: FormatMassPipe;

  beforeEach(() => {
    pipe = new FormatMassPipe();
  });

  it("should display 5.00 Kg if mass is '5000'", () => {
    expect(pipe.transform('5000')).toEqual('5.00 Kg');
  });

  it('should display 0 if mass is 0', () => {
    expect(pipe.transform(0)).toEqual(0);
  });

  it("should display 0 if mass is ''", () => {
    expect(pipe.transform('')).toEqual(0);
  });

  it('should display No Mass if mass is hello', () => {
    expect(pipe.transform('hello')).toEqual('No Mass');
  });

  it("should display No Mass is mass is '2020/12/23'", () => {
    expect(pipe.transform('2020/12/23')).toEqual('No Mass');
  });

  it('should display 0.12 g if mass is 0.12', () => {
    expect(pipe.transform(0.12)).toEqual('0.12 g');
  });

  it('should display 2.34 Metric Tons if mass is 2340000', () => {
    expect(pipe.transform(2340000)).toEqual('2.34 Metric Tons');
  });
});
