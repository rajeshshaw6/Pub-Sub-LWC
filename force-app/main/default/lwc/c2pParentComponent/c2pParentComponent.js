import { LightningElement, track } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    @track showModal = false;
    @track msg;
    clickHandler()
    {
        this.showModal = true;
    }
    closeHandler(event)
    {
        this.msg=event.detail.message;
        this.showModal=false;
    }
}