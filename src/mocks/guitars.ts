import { Guitar, GuitarShape } from 'src/mocks/interface';
const otherGuitars = [
  {
    brand: 'Taylor',
    shape: GuitarShape.OM,
    material: 'cedar',
    finish: 'gloss',
    colour: 'gingerbread',
    numberofstrings: 6,
  },
  {
    brand: 'Maton',
    shape: GuitarShape.OMc,
    material: 'spruce',
    finish: 'gloss',
    colour: 'tortilla',
    numberofstrings: 6,
  },
  {
    brand: 'Furch',
    shape: GuitarShape.OM,
    material: 'cedar',
    finish: 'satin',
    colour: 'caramel',
    numberofstrings: 6,
  },
  {
    brand: 'Martin',
    shape: GuitarShape.OMc,
    material: 'spruce',
    finish: 'satin',
    colour: 'pecan',
    numberofstrings: 6,
  },
];

const furchBase: Guitar = {
  brand: 'Furch',
  shape: GuitarShape.OMc,
  material: 'spruce',
  finish: 'satin',
  colour: 'chocolate',
  numberofstrings: 6,
};

const furchGuitars: Guitar[] = [
  furchBase,
  { ...furchBase, material: 'cedar' },
  { ...furchBase, finish: 'satin' },
  { ...furchBase, material: 'cedar' },
  { ...furchBase, material: 'cedar' },
  { ...furchBase, material: 'cedar' },
  { ...furchBase, material: 'cedar' },
];

export const guitars: Guitar[] = [...furchGuitars, ...otherGuitars];
