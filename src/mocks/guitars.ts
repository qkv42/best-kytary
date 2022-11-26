import { Guitar, GuitarShape } from 'src/interface';

export const guitars: Guitar[] = [
  {
    id: 1,
    brand: 'Furch',
    shape: GuitarShape.OMc,
    material: 'spruce',
    finish: 'satin',
    colour: 'chocolate',
    numberOfStrings: 6,
  },
  {
    id: 2,
    brand: 'Taylor',
    shape: GuitarShape.OM,
    material: 'cedar',
    finish: 'gloss',
    colour: 'gingerbread',
    numberOfStrings: 6,
  },
  {
    id: 3,
    brand: 'Maton',
    shape: GuitarShape.OMc,
    material: 'spruce',
    finish: 'gloss',
    colour: 'tortilla',
    numberOfStrings: 6,
  },
  {
    id: 4,
    brand: 'Furch',
    shape: GuitarShape.OM,
    material: 'cedar',
    finish: 'satin',
    colour: 'caramel',
    numberOfStrings: 6,
  },
  {
    id: 5,
    brand: 'Martin',
    shape: GuitarShape.OMc,
    material: 'spruce',
    finish: 'satin',
    colour: 'pecan',
    numberOfStrings: 6,
  },
];
