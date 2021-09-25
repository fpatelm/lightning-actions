public with sharing class ContactController {
    
    

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        try {
            throw new AuraHandledException('Error');
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
