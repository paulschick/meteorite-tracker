import { MaterialBreakpointsService } from './material-breakpoints.service';

describe('MaterialBreakpointsService', () => {
  let service: MaterialBreakpointsService;
  let objInst:object;

  beforeEach(() => {
    service = new MaterialBreakpointsService();
    objInst = service.breakpointGrid;

  })

  it('should return Large as 6 grid columns', () => {
    expect(
      Object.keys(objInst).find(key => objInst[key] === 6)
    ).toBe('Large')
  })

  it('should return 21 when all values are totalled', () => {
    expect(
      Object.values(objInst).reduce((sum:number, n:number):number => sum + n, 0)
    ).toBe(21)
  })
})
