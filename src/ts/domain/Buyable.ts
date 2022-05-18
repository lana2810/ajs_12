export default interface Buyable {
  readonly id: number;
  readonly name: string;
  readonly price: number;
  readonly yearIssue?: number;
  readonly country?: string;
  readonly slogan?: string;
  readonly style?: string;
  readonly time?: number;
  readonly author?: string;
  readonly pages?: number;
}
