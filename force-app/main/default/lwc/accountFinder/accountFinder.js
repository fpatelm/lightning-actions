import { LightningElement, wire } from 'lwc';
import queryAccountsByRevenue from '@salesforce/apex/AccountListControllerLwc.queryAccountsByRevenue';

export default class AccountFinder extends LightningElement {
    annualRevenue = null;
    handleChange(event){
        this.annualRevenue = event.detail.value;
    }
    reset(){
        this.annualRevenue = null;
        console.log('reset click event');
    }

    @wire(queryAccountsByRevenue, {annualRevenue: '$annualRevenue'})
    accounts;
}