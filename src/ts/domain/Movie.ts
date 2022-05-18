import Buyable from "./Buyable";

/**
 * @module user
 */

/**
 * Load user info by id
 *
 * @param {number} id user id
 * @returns {Object} user info
 */
export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly yearIssue: number,
    readonly country: string,
    readonly slogan: string,
    readonly style: string,
    readonly time: number
  ) {}
}
