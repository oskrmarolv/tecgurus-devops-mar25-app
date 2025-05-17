// routes/indes.jx

const express = require('express');
const router = express.Router();

const debugMiddleware = require('../middlewares/debug.middleware');

const ResponseData = {
  status: {
    code: 0,
    codeText: "APP::success",
    desc: "Success!!"
  },
  data: [ ],
  __t: null
};


// routes...

router.get('/auth/loggedin', debugMiddleware, function(req, res, next) {
  // c o d e ...
  const dataPayload = JSON.parse(JSON.stringify(ResponseData));

  if ( !req.session.hasOwnProperty('user') ) {
    dataPayload.status = {
      code: 104,
      codeText: "AUTH::Unauthorized",
      desc: "Unauthenticated or unauthorized users."
    };
    dataPayload.__t = Date.now()
    return res.status(401).json(dataPayload);
  }

  dataPayload.__t = Date.now()
  res.status(200).json(dataPayload);
});

router.get('/api/notes', debugMiddleware, function(req, res, next) {
  // c o d e ...
  const dataPayload = JSON.parse(JSON.stringify(ResponseData));

  dataPayload.data = [
    {
      title: "Primer nota",
      body: "Esta es una primera nota de ejemplo...",
      createdAt: "2025/04/26 10:23:47"
    },
    {
      title: "Segunda Nota",
      body: "Esta es una primera nota de ejemplo...",
      createdAt: "2025/04/26 10:25:47"
    }
  ];

  dataPayload.__t = Date.now();


  return res.status(200).json(dataPayload);
});

router.post('/api/notes', debugMiddleware, function(req, res, next) {
  // c o d e ...
  const dataPayload = JSON.parse(JSON.stringify(ResponseData));
  dataPayload.__t = Date.now();

  res.status(200).json(dataPayload);
});


module.exports = router;
