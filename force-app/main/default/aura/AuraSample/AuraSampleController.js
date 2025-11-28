({
    SaveRecord : function(component, event, helper) {
        var action=component.get('c.InsertCandidate');
        action.setParams({
          CanName:component.get('v.Cname'),
          CanEmail:component.get('v.CEmail'),
          CanPhone:component.get('v.CPhone')
        });
        action.setCallback(this,function(response)
    {
        var status=response.getState();
        if(status=='SUCCESS')
        {
            alert('Record Committed Successfully');
        }
        else {
            alert('Failed to commit the record.');
        }
    });
    $A.enqueueAction(action);
    }
})