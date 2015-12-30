import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {TodoService} from './todoService'
bootstrap(AppComponent, [TodoService]);