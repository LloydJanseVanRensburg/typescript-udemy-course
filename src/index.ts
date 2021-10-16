export class Sorter {
  collection: number[];

  constructor(collection: number[]) {
    this.collection = collection;
  }

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        let left = this.collection[j];
        let right = this.collection[j + 1];

        if (left > right) {
          let temp = left;
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = temp;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);

console.log(sorter.collection);
sorter.sort();
console.log(sorter.collection);
