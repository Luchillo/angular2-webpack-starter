/*
 * Angular bootstraping
 */
import { platformBrowser } from '@angular/platform-browser';

/*
 * App Module
 * our top level module that holds all of our components
 */
import { AppModuleFactory } from './app/app.module.ngfactory';
// import { AppModuleFactory } from './app/app.module.ngfactory';

/*
 * Bootstrap our Angular app with a top level NgModule
 */
platformBrowser().bootstrapModuleFactory(AppModuleFactory);
