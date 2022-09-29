export enum GuitarShape {
  OMc = 'OMc',
  OM = 'OM',
}

export type Guitar = {
  id: number;
  brand: string;
  shape: GuitarShape;
  material: string;
  finish: string;
  color: string;
  numberOfStrings: number;
};

export type Bass = {
  brand: string;
  electric: boolean;
  fretless: boolean;
  color: string;
  numberOfStrings: number;
};
