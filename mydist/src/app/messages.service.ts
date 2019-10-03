import { Injectable } from '@angular/core';
import {Message} from './models/message.model';
import {Messages} from './models/messages.model';
import {User} from './models/user.model';
@Injectable({
  providedIn: 'root'
})
export class MessagesService {
textmessagecontainer:Messages;
  constructor() {this.textmessagecontainer={messages:[]}; }

  initMessage():Array<Message>{


    this.textmessagecontainer.messages.push({ User: new User("Abhii"), timestamp: new Date(),comment:"Wow great picture Dood!!!" });
    this.textmessagecontainer.messages.push({ User: new User("Gowthaman"), timestamp: new Date(),comment:"Thank you bro:)" });
    this.textmessagecontainer.messages.push({ User: new User("Abhii"), timestamp: new Date(),comment:"ok give treat!" });
  
    return this.textmessagecontainer.messages;
  
    }
}
