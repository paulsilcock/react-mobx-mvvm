import { observable, action } from 'mobx';

export class HomeViewModel {

    @observable
    text = "blah";

    @action
    onTextChange(newText) {
        this.text = newText;
    }

}