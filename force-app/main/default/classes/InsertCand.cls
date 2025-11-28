public with sharing class InsertCand {
    @AuraEnabled
    public static void InsertCandidate(String CanName,String CanEmail,String CanPhone) {
     Candidate__c CanDet= new Candidate__c();
        CanDet.First_Name__c =CanName;
        CanDet.Email_Adress__c=CanEmail;
        CanDet.Phone_Or_Mobile__c =CanPhone;
        insert CanDet;

    }
}