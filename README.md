# Vev webhook receiver
_For offline pages_

This example server **does not** use any authentication and is only intended to be used for testing purposes

## What it does
This is a webhook receiver that also acts as a web server to serve the published pages and all assets

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
