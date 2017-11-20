import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Session } from 'meteor/session';
myapp = new Mongo.Collection('reso');
mystudent = new Mongo.Collection('student');
record2 = new Mongo.Collection('record2');
mydata = new Mongo.Collection('mydata');
studenttab=new Mongo.Collection('studenttab');
cgpa=new Mongo.Collection('cgpa');
scgpa=new Mongo.Collection('scgpa');
current=new Mongo.Collection('current');
messageapp = new Mongo.Collection('messageapp');
personal=new Mongo.Collection('personal');
Meteor.startup(() => {
  // code to run on server at startup

  Meteor.publish("chart1", function () {
    return record2.find({},{dataentry:1,_id:0});
    
  });

  Meteor.publish("chart2", function () {
    return record2.find({},{dataentry:1,_id:0});
    
  });
  Meteor.publish('allpersonal', function() {
  return personal.find();
});

  
  Meteor.publish('allstudenttab', function() {
  return studenttab.find();
});

Meteor.publish('allcgpa', function() {
  return cgpa.find();
});
Meteor.publish('allscgpa', function() {
  return scgpa.find();
});
Meteor.publish('allmarks', function() {
  return markstab.find();
});
Meteor.publish('allmessage', function() {
  return messageapp.find();
});



});



