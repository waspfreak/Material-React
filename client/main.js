import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../imports/client/routes';
import '../imports/client/Font';


/* When routing to a new page, scroll to top */
// Tracker.autorun(function() {
//   var current = Router.current();
//   Tracker.afterFlush(function() {
//     $(window).scrollTop(0);
//   });
// });
