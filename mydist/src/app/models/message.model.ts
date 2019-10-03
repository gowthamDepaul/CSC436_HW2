import { User } from './user.model';

export class Message {
    User:User;
    timestamp: Date;
    comment: string;

    constructor(myUser?: User, myDate?: Date, myText?:string) {
        this.User = myUser;
        this.timestamp = myDate;
        this.comment = myText;
        
 }
}
