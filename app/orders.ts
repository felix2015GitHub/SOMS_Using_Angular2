export class Order {
  constructor(
    public serial: string,
    public status: string,
    public name: string,
    public count: number,
    public orderName: string,
    public orderEmail: string
  ) {  }
}