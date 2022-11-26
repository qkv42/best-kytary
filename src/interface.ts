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
  colour: string;
  numberOfStrings: number;
};

export type Bass = {
  id: number;
  brand: string;
  electric: boolean;
  fretless: boolean;
  colour: string;
  numberOfStrings: number;
};
