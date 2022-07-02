import { cssKeywordList } from './getCssKeywordList_arrayExpanded'
import { createJsonFile } from '../util/forJson'
import alasql from 'alasql'

let excludedList = cssKeywordList

const getLikeSelectQuery: Function = (like: string): string => {
  return `SELECT * FROM ? WHERE keyword LIKE '${like}'`
}

const getNotLikeSelectQuery: Function = (like: string): string => {
  return getLikeSelectQuery(like).replace('LIKE', 'NOT LIKE')
}

const likeSelectExclude: Function = (like: string, from: object, groupLabel: string): object => {
  const likeResult = alasql(getLikeSelectQuery(like), [from])
  if (likeResult.length > 0) createJsonFile(likeResult, `dump/css-keywords/bySyntax/${groupLabel}`)
  const notLikeResult = alasql(getNotLikeSelectQuery(like), [from])
  return notLikeResult
}

const loop_likeSelectExclude__DESTRUCTIVE: Function = (staticWordList: Array<string>): void => {
  staticWordList.map((like: string) => {
    const fileName = `s_${like}_e`
    excludedList = likeSelectExclude(like, excludedList, fileName)
  })
}

const vendorPrefixList = [
  '-webkit-',
  '-moz-',
  '-ms-',
]

const s_prefix = vendorPrefixList.map((prefix: string) => `${prefix}%`)
const s_doubleColon_prefix = vendorPrefixList.map((prefix: string) => `::${prefix}%`)
const s_colon_prefix = vendorPrefixList.map((prefix: string) => `:${prefix}%`)
const s_atmark = ['@%']
const space_suffix_e = ['selectors', 'combinator'].map((suffix: string) => `% ${suffix}`)
const s_Pseudo_hyphen = ['Pseudo-%']
const s_doubleColon = ['::%']
const s_colon = [':%']

export const dumpCssKeywordList_bySyntax: Function = (): void => {
  loop_likeSelectExclude__DESTRUCTIVE(s_prefix)
  loop_likeSelectExclude__DESTRUCTIVE(s_doubleColon_prefix)
  loop_likeSelectExclude__DESTRUCTIVE(s_colon_prefix)
  loop_likeSelectExclude__DESTRUCTIVE(s_atmark)
  loop_likeSelectExclude__DESTRUCTIVE(space_suffix_e)
  loop_likeSelectExclude__DESTRUCTIVE(s_Pseudo_hyphen)
  loop_likeSelectExclude__DESTRUCTIVE(s_doubleColon)
  loop_likeSelectExclude__DESTRUCTIVE(s_colon)
  createJsonFile(excludedList, `dump/css-keywords/bySyntax/other`)
}