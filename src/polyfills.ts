import 'core-js/es6';
import 'core-js/es7/map';
import 'core-js/es7/reflect';

// these polyfills should always be placed below core-js
import 'mutationobserver-shim/dist/mutationobserver.min';
import '@webcomponents/custom-elements/custom-elements.min';

require('zone.js/dist/zone');

if (process.env.ENV === 'production') {
    // Production
} else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
