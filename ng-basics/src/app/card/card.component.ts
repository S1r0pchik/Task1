import {Component} from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent {
    title = "My card Title"
    text = "Hello"

    textColor = 'black';

    changeTitle() {
        this.title = "haha";
    }

    InputHandler(event: any) {
        const value = event.target.value;
        this.title = value;
    }

    changeHandler() {
        console.log(this.title);
    }
}