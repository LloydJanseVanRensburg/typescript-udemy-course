import { LinkedList } from './LinkedList';

import { CharactersCollection } from './CharcatersCollection';
import { NumbersCollection } from './NumbersCollection';

const n = new NumbersCollection([1, 9, 4, 6, -10, 2, 7, 200]);
n.sort();
console.log(n.data);

const c = new CharactersCollection('Xoogbywe');
c.sort();
console.log(c.data);

const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
