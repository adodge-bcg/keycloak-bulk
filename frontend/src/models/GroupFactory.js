import { Seq } from 'immutable'
import Group from './Group'

export default class GroupFactory {
  /**
   * Parse text.
   * @param {string} text groups as CSV or TSV
   * @returns {Group[]}
   */
  static parseText(text) {
    return Seq(text.split(/\n/))
      .map(line => line.split(/,|\t/))
      .filter(columns => columns.length === 1)
      .map(([name]) =>
        new Group({ name }))
      .toArray();
  }
}
