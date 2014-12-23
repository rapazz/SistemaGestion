'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: 'sistemagestion-rapazz.c9.io',
  SESSION_SECRET: "workspace-secret",

  GOOGLE_ID: '831491199430-n94n4hak4dufamvu2ck9n5b5b7vmo97j.apps.googleusercontent.com',
  GOOGLE_SECRET: 'qraRGD5-AYW3YY6miTUK7KOe',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
