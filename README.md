# Vev webhook receiver
_For offline pages_

This example server **does not** use any authentication and is only intended to be used for testing purposes

## What it does
This is a webhook receiver that also acts as a web server to serve the published pages and all assets.
Only one project will be served at the time, and project paths are ignored. Page links are not supported.

## How to use
### Starting the server
* Clone repository
* `npm i`
  * Installs dependencies
* `npm run start`
  * Builds and starts the server application
* Note that the server needs to be exposed to the internet

### Setting up a Hosting in Vev
* Set up a webhook hosting, following the [Vev documentation](https://help.vev.design/en/articles/6165061-webhook-integrations)
* Go into the hosting settings for your newly created hosting, and check the option that says "Include asset URLs in payload"
  * This is a feature that is currently in closed beta
  * Enabling this option replaces all asset URLs so no assets are fetched from other places than the webserver hosting the site
* (Optional) set a custom assets folder name

## Example payload
The following is an example of a payload coming out of the Vev staging servers, so CDN URLs will be different from production use.
Using this payload for testing will not work, as assets are deleted after a period of 24 hours, it is only intended as an example.

```json
{
  "id": "upload_8153d234-28d7-4ca5-a9fa-b6d91ea5a1cf-1",
  "hosting": "1e57rhmlt-etlm2",
  "event": "PUBLISH",
  "payload": {
    "projectId": "ks9mFkexhm",
    "version": 27,
    "dir": "/awefasffsae",
    "pages": [],
    "css": [],
    "js": [],
    "other": [],
    "assetsFolder": "static",
    "assets": [
      "https://devcdn.vev.design/font/8TB-AbTUyy/Nikkyou-Sans.woff",
      "https://devcdn.vev.design/font/8TB-AbTUyy/Nikkyou-Sans.woff2",
      "https://devcdn.vev.design/font/s/lato/v23/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2",
      "https://devcdn.vev.design/font/s/lato/v23/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2",
      "https://devcdn.vev.design/font/s/lato/v23/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2",
      "https://devcdn.vev.design/font/s/lato/v23/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2",
      "https://devcdn.vev.design/font/s/lato/v23/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2",
      "https://devcdn.vev.design/font/s/lato/v23/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2",
      "https://devcdn.vev.design/font/s/lato/v23/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2",
      "https://devcdn.vev.design/font/s/lato/v23/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2",
      "https://devcdn.vev.design/font/s/lato/v23/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2",
      "https://devcdn.vev.design/font/s/lato/v23/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2",
      "https://devcdn.vev.design/font/s/lato/v23/S6uyw4BMUTPHjx4wXiWtFCc.woff2",
      "https://devcdn.vev.design/font/s/lato/v23/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2",
      "https://devcdn.vev.design/pkg/v1/16c4768c8e38f874564bdb30cf59976d.js",
      "https://js.vev.design/v/ks9mFkexhm/10bde63/vev.js",
      "https://storage.googleapis.com/devvev-public-temp/webhook-assets%2F1e57rhmlt-etlm2%2Fks9mFkexhm%2F27%2F8153d234-28d7-4ca5-a9fa-b6d91ea5a1cf-1%2Fstatic%2F1c33ba-uh_8-0a127588d70d16a2c54ff08321e228db.jpeg",
      "https://storage.googleapis.com/devvev-public-temp/webhook-assets%2F1e57rhmlt-etlm2%2Fks9mFkexhm%2F27%2F8153d234-28d7-4ca5-a9fa-b6d91ea5a1cf-1%2Fstatic%2F1c33ba-uh_8-851d146cc4d1425bb8ec1c84a9adf723.jpeg",
      "https://storage.googleapis.com/devvev-public-temp/webhook-assets%2F1e57rhmlt-etlm2%2Fks9mFkexhm%2F27%2F8153d234-28d7-4ca5-a9fa-b6d91ea5a1cf-1%2Fstatic%2F1c33ba-uh_8-aa2f695d9f4320a608a03655848f410f.jpeg",
      "https://storage.googleapis.com/devvev-public-temp/webhook-assets%2F1e57rhmlt-etlm2%2Fks9mFkexhm%2F27%2F8153d234-28d7-4ca5-a9fa-b6d91ea5a1cf-1%2Fstatic%2F1c33ba-uh_8-afaf36ab5e64121d6d128f1adac1b320.jpeg",
      "https://storage.googleapis.com/devvev-public-temp/webhook-assets%2F1e57rhmlt-etlm2%2Fks9mFkexhm%2F27%2F8153d234-28d7-4ca5-a9fa-b6d91ea5a1cf-1%2Fstatic%2F1c33ba-uh_8-f6a4f47e48eb41f34ecf7cc4d41277e8.jpeg",
      "https://storage.googleapis.com/devvev-public-temp/webhook-assets%2F1e57rhmlt-etlm2%2Fks9mFkexhm%2F27%2F8153d234-28d7-4ca5-a9fa-b6d91ea5a1cf-1%2Fstatic%2Fsylvester-fireworks-new-year-s-day-7669293-632e398e2bf4424273cb4bef7866076d.jpeg",
      "https://storage.googleapis.com/devvev-public-temp/webhook-assets%2F1e57rhmlt-etlm2%2Fks9mFkexhm%2F27%2F8153d234-28d7-4ca5-a9fa-b6d91ea5a1cf-1%2Fstatic%2Fsylvester-fireworks-new-year-s-day-7669293-895c8dd8f5c55f34a73645bd6a1d29f3.jpeg",
      "https://storage.googleapis.com/devvev-public-temp/webhook-assets%2F1e57rhmlt-etlm2%2Fks9mFkexhm%2F27%2F8153d234-28d7-4ca5-a9fa-b6d91ea5a1cf-1%2Fstatic%2Fsylvester-fireworks-new-year-s-day-7669293-9f22b117635efcfbfc79fe8be2e73a09.jpeg",
      "https://storage.googleapis.com/devvev-public-temp/webhook-assets%2F1e57rhmlt-etlm2%2Fks9mFkexhm%2F27%2F8153d234-28d7-4ca5-a9fa-b6d91ea5a1cf-1%2Fstatic%2Fsylvester-fireworks-new-year-s-day-7669293-c471ff065e7aa014e38b8b68e31a678b.jpeg",
      "https://storage.googleapis.com/devvev-public-temp/webhook-assets%2F1e57rhmlt-etlm2%2Fks9mFkexhm%2F27%2F8153d234-28d7-4ca5-a9fa-b6d91ea5a1cf-1%2Fstatic%2Fsylvester-fireworks-new-year-s-day-7669293-c804b8e2dd41a1fdeaae4a5aa12f8ab7.jpeg"
    ],
    "htmlFiles": [
      "https://storage.googleapis.com/devvev-public-temp/webhook-assets%2F1e57rhmlt-etlm2%2Fks9mFkexhm%2F27%2F8153d234-28d7-4ca5-a9fa-b6d91ea5a1cf-1%2Findex.html",
      "https://storage.googleapis.com/devvev-public-temp/webhook-assets%2F1e57rhmlt-etlm2%2Fks9mFkexhm%2F27%2F8153d234-28d7-4ca5-a9fa-b6d91ea5a1cf-1%2Fp2.html"
    ]
  }
}
```
