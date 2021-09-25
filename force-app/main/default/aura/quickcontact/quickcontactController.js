({
    doInit: function(component, event, helper) {
        // Prepare a new record from template
        component.find("contactRecordCreator").getNewRecord(
            "Contact", // sObject type (entityAPIName)
            null,      // recordTypeId
            false,     // skip cache?
            $A.getCallback(function() {
                var rec = component.get("v.newContact");
             
                if((rec === null)) {
                    console.log("Error initializing record template: "  );
                }
                else {
                    console.log("Record template initialized: " + rec.apiName);
                }
            })
        );
    },

    cancel : function(component, event, helper) {
        $A.get("e.force:closeQuickAction").fire();
    },

    createcontact : function(component, event, helper){
        var last = component.get("v.lastname");
        console.log(last);
        console.log(component.get("v.recordId"));
        component.set("v.simpleNewContact.AccountId", component.get("v.recordId"));
        component.find("contactRecordCreator").saveRecord(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                // record is saved successfully
                var resultsToast = $A.get("e.force:showToast");
                resultsToast.setParams({
                    "title": "Saved",
                    "message": "The record was saved."
                });
                resultsToast.fire();
            } else if (saveResult.state === "INCOMPLETE") {
                // handle the incomplete state
                console.log("User is offline, device doesn't support drafts.");
            } else if (saveResult.state === "ERROR") {
                // handle the error state
                console.log('Problem saving contact, error: ' +
                             JSON.stringify(saveResult.error));
            } else {
                console.log('Unknown problem, state: ' + saveResult.state +
                            ', error: ' + JSON.stringify(saveResult.error));
            }
        });
    }
})
