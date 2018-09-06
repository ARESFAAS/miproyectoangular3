import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { InputComponent } from './input/input.component';

  var config = {
    apiKey: "AIzaSyDm9RvOOylpVXyyevaKn3viMlD__NTFDb8",
    authDomain: "miproyectoangular3.firebaseapp.com",
    databaseURL: "https://miproyectoangular3.firebaseio.com",
    projectId: "miproyectoangular3",
    storageBucket: "miproyectoangular3.appspot.com",
    messagingSenderId: "162100241826"
  };


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
