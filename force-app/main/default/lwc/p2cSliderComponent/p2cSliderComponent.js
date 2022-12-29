import { LightningElement,api,track } from 'lwc';

export default class P2cSliderComponent extends LightningElement {
    @track val=20;
    changeHandler(event)
    {
        this.val = event.target.value;
    }
    @api resetSlider()
    {
        this.val = 50;
    }
}