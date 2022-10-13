export type ICharacter = {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: ILocation;
  location: ILocation;
  image: string;
  created: Date;
};

export type ILocation = {
  id: string;
  name: String;
  type: String;
  dimension: String;
  residents: { id: string; name: string }[];
  created: Date;
};

export interface ITableRowData {
  id: string;
  link: string;
  cells: Array<ICellData>;
}

export interface ICellData {
  isImage?: boolean;
  url?: string;
  isCheap: boolean;
  title: string;
}
