'use strict'

const fp = module.exports = {}

fp.map = (ctx, callback) => {
  // if(!Array.isArray(ctx)) throw new Error('must pass valid Array as argument')
  Array.prototype.map.call(ctx, callback)
}

fp.filter = (ctx, callback) => Array.prototype.filter.call(ctx, callback)
fp.reduce = (ctx, callback) => Array.prototype.reduce.call(ctx, callback)
fp.concat = (ctx, arr) => Array.prototype.concat.apply(ctx, arr)
fp.splice = (ctx, start, count) => Array.prototype.splice.call(ctx, start, count)