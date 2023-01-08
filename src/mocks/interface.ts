export enum GuitarShape {
  OMc = 'OMc',
  OM = 'OM',
}

export type Guitar = {
  brand: string;
  shape: GuitarShape;
  material: string;
  finish: string;
  colour: string;
  numberofstrings: number;
};

export type Bass = {
  id: number;
  brand: string;
  electric: boolean;
  fretless: boolean;
  colour: string;
  numberofstrings: number;
};
