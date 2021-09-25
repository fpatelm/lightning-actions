import { LightningElement, wire } from 'lwc';
import queryAccounts from '@salesforce/apex/AccountListControllerLwc.queryAccounts';

export default class AccountSearch extends LightningElement {
    numberOfEmployees = null;

    @wire(queryAccounts, {numberOfEmployees: '$numberOfEmployees'}) 
    accounts;

    handleChange(event){
        this.numberOfEmployees = event.detail.value;
    }
    reset(){
        this.numberOfEmployees = null;
    }
    
}