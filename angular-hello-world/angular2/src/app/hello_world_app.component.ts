import {Component, View} from "angular2/core";

@Component({
   selector: 'my-app'
})

@View({
  template: '<h2>Hello World {{name}} !!</h2>'
})

export class MyHelloWorldClass {
name='Angular 2';


}


