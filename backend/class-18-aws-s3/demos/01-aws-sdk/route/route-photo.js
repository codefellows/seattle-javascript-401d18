'use strict'

const multer = require('multer')
const tempDir = `${__dirname}/../temp`
const Photo = require('../model/photo')
const upload = multer({ dest: tempDir })
const debug = require('debug')('cfgram:route-photo')
const errorHandler = require('../lib/error-handler')
const bearerAuth = require('../lib/bearer-auth-middleware')

module.exports = function(router) {
  router.post('/api/photo', bearerAuth, upload.single('image'), (req, res) => {
    debug('POST /api/photo')

    console.log(req.file)

    return Photo.upload(req)
    .then(photoData => new Photo(photoData).save())
    .then(photo => res.json(photo))
    .catch(err => errorHandler(err, req, res))
  })
  router.get('/api/photo/:_id', bearerAuth, (req, res) => {

  })
  router.get('/api/photo', bearerAuth, (req, res) => {

  })
  router.put('/api/photo/:_id', bearerAuth, upload.single('image'), (req, res) => {

  })
  router.delete('/api/photo/:_id', bearerAuth, (req, res) => {

  })
}