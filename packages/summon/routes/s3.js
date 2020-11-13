
const router                  = require('koa-router')();
const AWS                     = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1'
});

const s3 = new AWS.S3();

router.prefix('/s3');


// For eample,
// curl 'http://localhost:3000/s3/get/quick-net/deploy/cdr0-net/startup-scripts/install-aws'
//
router.get('/get/*', async function (ctx, next) {

  // quick-net/deploy/cdr0-net/startup-scripts/install-nodejs

  const [blank, s3_, get, Bucket, ...KeyParts] = ctx.request.url.split('/');

  const Key       = KeyParts.join('/');
  const filename  = KeyParts[KeyParts.length - 1];
  const params    = {Bucket, Key};

  let   request   = s3.getObject(params);
  const data      = await request.promise();
  // console.log(inspect({data}, false, null, true));

  ctx.response.attachment(filename);
  ctx.response.etag           = data.ETag             || ctx.response.etag;
  ctx.response.lastModified   = data.LastModified     || ctx.response.lastModified;
  ctx.type                    = data.ContentType      || ctx.type;
  ctx.body                    = data.Body;

});

module.exports = router;
