public without sharing class AccountListControllerLwc {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> queryAccounts(Integer numberOfEmployees){
        //System.debug('queryAccounts: ' + numberOfEmployees);
       List<Account> accounts =  [SELECT Name FROM Account WHERE NumberOfEmployees >= :numberOfEmployees];
        //System.debug(accounts);

        return accounts;
    }


    @AuraEnabled(cacheable=true)
    public static List<Account> queryAccountsByRevenue(Decimal annualRevenue){
        try {
            return [SELECT Name FROM Account WHERE AnnualRevenue >= :annualRevenue];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
