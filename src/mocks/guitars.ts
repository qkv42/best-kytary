import { Guitar, GuitarShape } from "src/interface"

export const guitars: Guitar[] = [
    {
        id: 1,
        brand: 'Furch',
        shape: GuitarShape.OMc,
        material: 'spruce',
        finish: 'satin',
        color: 'chocolate',
        numberOfStrings: 6
    },
    {
        id: 2,
        brand: 'Taylor',
        shape: GuitarShape.OM,
        material: 'cedar',
        finish: 'gloss',
        color: 'gingerbread',
        numberOfStrings: 6
    },
    {
        id: 3,
        brand: 'Maton',
        shape: GuitarShape.OMc,
        material: 'spruce',
        finish: 'gloss',
        color: 'tortilla',
        numberOfStrings: 6
    },
    {
        id: 4,
        brand: 'Furch',
        shape: GuitarShape.OM,
        material: 'cedar',
        finish: 'satin',
        color: 'caramel',
        numberOfStrings: 6
    },
    {
        id: 5,
        brand: 'Martin',
        shape: GuitarShape.OMc,
        material: 'spruce',
        finish: 'satin',
        color: 'pecan',
        numberOfStrings: 6
    }
]