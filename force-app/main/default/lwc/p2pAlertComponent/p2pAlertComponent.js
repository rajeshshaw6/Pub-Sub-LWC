import { LightningElement,api } from 'lwc';

export default class P2pAlertComponent extends LightningElement {
    @api message;
    @api cardHeading;
    @api number;
    @api isValid;
}