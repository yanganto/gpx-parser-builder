import Gpx from '../src/gpx.js'
import fs from 'fs'
import should from 'should'

describe('gpx paser', () => {
  it('should parse track', done => {
    fs.readFile('./test/test.gpx', 'utf8', function (err,data) {
      if (err) {
        return console.log(err)
      }
      var gpx = new Gpx()
      gpx.parse(data)
      gpx.tracks[0][0].length.should.equal(108)
      done()
    })
  })

  it('should export track', done => {
    fs.readFile('./test/test.gpx', 'utf8', function (err,data) {
      if (err) {
        return console.log(err)
      }
      var gpx = new Gpx()
      gpx.parse(data)
      gpx.toString().should.type("string")
      done()
    })
  })
})
