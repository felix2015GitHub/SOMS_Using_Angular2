export class Product {
  constructor(
    public id: number,
    public name: string,
    public type: string,
    public attribute: string,
    public price: number,
    public count: number,
    public status: string,
    public alterEgo?: string
  ) {  }
}