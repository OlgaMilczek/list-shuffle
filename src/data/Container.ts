import { IContainer } from './Container.contracts'

export class Container implements IContainer {
  /**
   * @inheritDoc
   */
  public list: Record<string, unknown>[]

  constructor (objectList: Record<string, unknown>[] = []) {
    this.list = objectList
  }

  /**
   * @inheritDoc
   */
  public addObject (newObject: Record<string, unknown>): void {
    this.list.push(newObject)
  }

  /**
   * @inheritDoc
   */
  public deleteObject (index: number): void {
    this.list.slice(index, 1)
  }

  /**
   * @inheritDoc
   */
  public shuffleList (): void {
    const length: number = this.list.length
    for (let i: number = length - 1; i > 0; i--) {
      const newIndex: number = Math.floor(Math.random() * (i + 1));

      [this.list[i], this.list[newIndex]] = [this.list[newIndex], this.list[i]]
    }
  }
}
