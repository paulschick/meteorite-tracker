import { IMeteorite } from "./meteorite.model";

export interface IFilterObject {
  objects: object[]|IMeteorite[];
  property: string;
  isGreater: boolean;
  comparison: number;
}
