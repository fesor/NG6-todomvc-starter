import angular from 'angular';
import 'angular-component';
import Components from './components/components';
import services from './services/services';
import 'normalize.css';

import AppComponent from './app.component';

angular.module('app', [
  Components.name,
  services.name
])
.component('app', AppComponent);
