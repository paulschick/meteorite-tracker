import { FormatMassPipe } from "./format-mass.pipe";

describe('FormatMassPipe', () => {
  it("should display 5.00Kg if mass is '5000'", () => {
    let pipe = new FormatMassPipe();

    expect(pipe.transform('5000')).toEqual('5.00Kg');
  })

  it('should display 5.00kg if mass is 5000', () => {
    let pipe = new FormatMassPipe();

    expect(pipe.transform(5000)).toEqual('5.00Kg');
  })

  it('should display 0 if mass is 0', () => {
    let pipe = new FormatMassPipe();

    expect(pipe.transform(0)).toEqual(0);
  })

  it("should display 0 if mass is ''", () => {
    let pipe = new FormatMassPipe();

    expect(pipe.transform('')).toEqual(0);
  })

  it('should display No Mass if mass is hello', () => {
    let pipe = new FormatMassPipe();

    expect(pipe.transform('hello')).toEqual('No Mass');
  })

  it("should display No Mass is mass is '2020/12/23'", () => {
    let pipe = new FormatMassPipe();

    expect(pipe.transform('2020/12/23')).toEqual('No Mass');
  })

  it('should display 500.00g if mass is 500', () => {
    let pipe = new FormatMassPipe();

    expect(pipe.transform(500)).toEqual('500.00g');
  })

  it('should display 0.12g if mass is 0.12', () => {
    let pipe = new FormatMassPipe();

    expect(pipe.transform(0.12)).toEqual('0.12g');
  })

  it('should display 1.00 Metric Tons if mass is 1000000', () => {
    let pipe = new FormatMassPipe();

    expect(pipe.transform(1000000)).toEqual('1.00 Metric Tons');
  })

  it('should display 2.34 Metric Tons if mass is 2340000', () => {
    let pipe = new FormatMassPipe();

    expect(pipe.transform(2340000)).toEqual('2.34 Metric Tons');
  })
})
