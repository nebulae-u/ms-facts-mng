"use strict";
//var FeedParser = require("feedparser");
var fetch = require("node-fetch");
const { from } = require("rxjs");
const { mergeMap } = require("rxjs/operators");

class FeedParserClass {
  static getImportSharkAttacks$(feed) {
    return from(fetch(feed)).pipe(
      mergeMap((res) => res.json()),
      mergeMap((data) => from(data.results))
    );
  }

  static getSharkAttackDetailByCountry$(country) {
    const url = `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/global-shark-attack/records?where=country%3D%27${country}%27&limit=5`;
    // return fetch(url).then((res) => res.json());
    return from(fetch(url)).pipe(
      mergeMap((res) => res.json()),
      mergeMap((data) => from(data.results))
    );
  }

  static parseFeed$(feed) {
    return this.getImportSharkAttacks$(feed);
  }
}

/**
 * @returns {FeedParserClass}
 */
module.exports = FeedParserClass;
