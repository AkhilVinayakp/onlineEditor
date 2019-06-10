import { Component } from "@angular/core";

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent
{
    title = 'dashbord';
    user:u1={}
    constructor()
    {
        this.user.name="fsasa";
    }
}
interface u1{
    name?:string
    age?:number

}