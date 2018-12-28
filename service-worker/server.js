// Use the web-push library to hide the implementation details of the communication
// between the application server and the push service.
// For details, see https://tools.ietf.org/html/draft-ietf-webpush-protocol and
// https://tools.ietf.org/html/draft-ietf-webpush-encryption.
const webPush = require('web-push');

if (false) {
  console.log("You must set the VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY, you can use the following ones:");
  console.log(webPush.generateVAPIDKeys());
  return;
}

const VAPID_PUBLIC_KEY = "BCVx4eL0n5qU9uS477g00efSzCbc9T_zqRdiDvgtHZ38UeOVT7obbqmpt98mt0FWg7sJtVCCn1JtPhNgj9sQXAY"
const VAPID_PRIVATE_KEY = "URe6fS_2TN8suiwApX6O0YnbmixOcKMnfSAXx5a9WPE"

// Set the keys used for encrypting the push messages.
webPush.setVapidDetails(
  'https://serviceworke.rs/',
  VAPID_PUBLIC_KEY,
  VAPID_PRIVATE_KEY
);

module.exports = function(app) {
  app.get('/service-worker/vapidPublicKey', function(req, res) {
    res.send(VAPID_PUBLIC_KEY);
  });

  app.post('/service-worker/register', function(req, res) {
    // A real world application would store the subscription info.
    res.sendStatus(201);
  });

  app.post('/service-worker/sendNotification', function(req, res) {
    const subscription = req.body.subscription;
    const payload = null;
    const options = {
      TTL: req.body.ttl
    };

    setTimeout(function() {
      webPush.sendNotification(subscription, payload, options)
      .then(function() {
        res.sendStatus(201);
      })
      .catch(function(error) {
        res.sendStatus(500);
        console.log(error);
      });
    }, req.body.delay * 1000);
  });
};
