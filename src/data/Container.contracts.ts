export interface IContainer {
  /**
   * List of stored objects
   */
  list: Record<string, unknown>[]

  /**
   * Method to add new object to stored list
   * @param newObject
   */
  addObject (newObject: Record<string, unknown>): void;

  /**
   * Method to delete object to stored list
   * @param index of object to delete
   */
  deleteObject (index: number): void;

  /**
   * Method to shuffle stored list
   */
  shuffleList (): void;
}
