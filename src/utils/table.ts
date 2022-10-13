import { ROUTES } from "constants/routes";
import moment from "moment";
import { ICellData, ICharacter, ILocation, ITableRowData } from "types";

export const generateProfileRows = (
  data: ICharacter[]
): Array<ITableRowData> => {
  return data.map(
    ({
      id,
      image,
      name,
      origin,
      location,
      status,
      species,
      gender,
      type,
      created,
    }) => ({
      id,
      link: `${ROUTES.PROFILE}/${id}`,
      cells: [
        { title: image, isImage: true, url: image, isCheap: false },
        { title: name, isCheap: false },
        { title: origin.name, isCheap: false },
        { title: location.name, isCheap: false },
        { title: status, isCheap: true },
        { title: species, isCheap: true },
        { title: gender, isCheap: true },
        { title: type || "-", isCheap: false },
        { title: `${moment(created).fromNow(true)} ago`, isCheap: false },
      ] as ICellData[],
    })
  );
};

export const generateLocationRows = (
  data: ILocation[]
): Array<ITableRowData> => {
  return data.map(({ id, name, dimension, type, residents, created }) => ({
    id,
    link: `${ROUTES.LOCATIONS}/${id}`,
    cells: [
      { title: id, isCheap: false },
      { title: name, isCheap: false },
      { title: type, isCheap: false },
      { title: dimension, isCheap: false },
      { title: residents.length, isCheap: false },
      { title: `${moment(created).fromNow(true)} ago`, isCheap: false },
    ] as ICellData[],
  }));
};
