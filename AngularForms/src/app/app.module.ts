import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestBootstrapComponent } from './test-bootstrap/test-bootstrap.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestMaterialUiComponent } from './test-material-ui/test-material-ui.component';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ChildComponent } from './child/child.component';
import { UserChildComponent } from './user-child/user-child.component';
import { ChildParentComponent } from './child-parent/child-parent.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { PipsDemoComponent } from './pips-demo/pips-demo.component';
import { MypipePipe } from './Pipes/mypipe.pipe';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RedELDirective } from './Directive/red-el.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    TestBootstrapComponent,
    TestMaterialUiComponent,
    TodoListComponent,
    ChildComponent,
    UserChildComponent,
    ChildParentComponent,
    TwowayBindingComponent,
    PipsDemoComponent,
    MypipePipe,
    TemplateFormComponent,
    ReactiveFormComponent,
    RedELDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBadgeModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
