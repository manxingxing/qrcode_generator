var express = require('express');
var router = express.Router();
const QRCode = require('qrcode');

/* GET users listing. */
router.get('/', (req, res, next) => {
  let data = req.query.data;
  if (!data) {
    res.status(400).end();
    return;
  }
  let width = 150;
  if (req.query.w) {
    width = parseInt(req.query.w, 10)
  }
  res.contentType('image/png');
  QRCode.toFileStream(res, data, { width: width, margin: 0.5 })
});

module.exports = router;
