import { LightningElement,track, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import {fireEvent} from 'c/pubsub';

export default class PublishComponent extends LightningElement {
    @track message;
    @wire(CurrentPageReference) pageRef;
    handleChange(event)
    {
        this.message = event.target.value;
    }
    handlePublish()
    {
        fireEvent(this.pageRef,'sendmessage',this.message); 
    }
}