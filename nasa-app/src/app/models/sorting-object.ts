import { IMeteorite } from "./meteorite.model";

export interface ISortingObject {
  isStringSort: boolean;
  isAscending: boolean;
  property: string;
  unsortedArr: object[]|IMeteorite[];
}
