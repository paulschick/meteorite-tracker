import { IMeteorite } from "../models/meteorite.model";

export type Filter = (n: number) => any;
export type FilterByNumber = (o:IMeteorite,n:number) => boolean;
