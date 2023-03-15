import { Collection } from './Collection';
import { IDEnabled } from '../types';

export class SubCollection<DataType extends IDEnabled, SubCollections> extends Collection<DataType, SubCollections> {}
