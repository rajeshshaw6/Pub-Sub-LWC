import { LightningElement, track, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener,unregisterAllListeners } from 'c/pubsub';

export default class SubscribeComponent extends LightningElement {
    @track incomingMessage;
    @wire(CurrentPageReference) pageRef;
    connectedCallback()
    {
        registerListener('sendmessage',this.handleMessage,this);
    }
    handleMessage(message)
    {
        this.incomingMessage = message;
    }
    disconnectedCallback()
    {
        unregisterAllListeners(this);
    }
}