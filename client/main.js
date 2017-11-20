import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';
import { Session } from 'meteor/session';
import './main.html';

myapp = new Mongo.Collection('reso');                                                  // CREATING COLLECTIONS
mystudent = new Mongo.Collection('student');
theuser = new Mongo.Collection('latest');
thestudent=new Mongo.Collection('thestudent');
studenttab=new Mongo.Collection('studenttab');
cgpa=new Mongo.Collection('cgpa');
scgpa=new Mongo.Collection('scgpa');
current=new Mongo.Collection('current');
messageapp = new Mongo.Collection('messageapp');
mydata = new Mongo.Collection('mydata'); 
personal=new Mongo.Collection('personal');
markstab=new Mongo.Collection('markstab');

Meteor.subscribe('allpersonal');
Meteor.subscribe('allstudenttab');

Meteor.subscribe('allmessage');
Meteor.subscribe('allcgpa');
Meteor.subscribe('allscgpa');

Meteor.subscribe('allmarks');

Template.body.helpers({
     markstab: function()
      {       
        return markstab.find();
      }
});
Template.body.helpers({
      personal: function()
      {       
        return personal.find();
      }
});
Template.body.helpers({
      reso: function()
      {       
        return myapp.find();
      }
});
Template.body.helpers({
      current: function()
      {       
        return current.find();
      }
});
Template.body.helpers({
      student: function()
      {       
        return mystudent.find();
      }
});
Template.body.helpers({
      latest: function()
      {       
        return theuser.find();
      }
});
Template.body.helpers({
      thestudent: function()
      {       
        return thestudent.find();
      }
});
Template.body.helpers({
      studenttab: function()
      {       
        return studenttab.find();
      }
});
Template.body.helpers({
      cgpa: function()
      {       
        return cgpa.find();
      }
});
Template.body.helpers({
      scgpa: function()
      {       
        return scgpa.find();
      }
});
Template.body.helpers({
      messageapp: function()
      {       
        return messageapp.find();
      }
});
Template.body.helpers({
      mydata: function()
      {       
        return mydata.find();
      }
});

/*                                      // 141363**************     
markstab.insert({enroll:"141363",subject:["a1","a2","a3","a4","b1","b2","b3","b4","c1","c2","c3","c4"],subjectname:["Mathematics 1","Physics 1 ","Electircal Circuit","C Programming","Mathematics 2","Physics 2","DS","GCP","Environemtal","OOPs","Algorithm","Digital Electronics"],marks1:[10,20,20],marks2:[10,21,20],marks3:[10,19,21],marks4:[15,18,10],marks5:[9,15,12],marks6:[8,20,15],marks7:[7,21,30],marks8:[6,14,29], marks9:[8,11,28],marks10:[9,12,26],marks11:[10,13,27],marks12:[11,14,15]}); 
markstab.insert({enroll:"141364",subject:["a1","a2","a3","a4","b1","b2","b3","b4","c1","c2","c3","c4"],subjectname:["Mathematics 1","Physics 1 ","Electircal Circuit","C Programming","Mathematics 2","Physics 2","DS","GCP","Environemtal","OOPs","Algorithm","Digital Electronics"],marks1:[10,20,15],marks2:[11,21,16],marks3:[12,22,17],marks4:[13,23,18],marks5:[14,24,19],marks6:[15,18,20],marks7:[9,15,21],marks8:[8,14,22], marks9:[7,13,23],marks10:[6,12,24],marks11:[5,11,25],marks12:[4,10,26]}); 
markstab.insert({enroll:"141365",subject:["a1","a2","a3","a4","b1","b2","b3","b4","c1","c2","c3","c4"],subjectname:["Mathematics 1","Physics 1 ","Electircal Circuit","C Programming","Mathematics 2","Physics 2","DS","GCP","Environemtal","OOPs","Algorithm","Digital Electronics"],marks1:[10,20,20],marks2:[10,21,20],marks3:[10,19,21],marks4:[15,18,10],marks5:[9,15,12],marks6:[8,20,15],marks7:[7,21,30],marks8:[6,14,29], marks9:[8,11,28],marks10:[9,12,26],marks11:[10,13,27],marks12:[11,14,15]}); 
markstab.insert({enroll:"141366",subject:["a1","a2","a3","a4","b1","b2","b3","b4","c1","c2","c3","c4"],subjectname:["Mathematics 1","Physics 1 ","Electircal Circuit","C Programming","Mathematics 2","Physics 2","DS","GCP","Environemtal","OOPs","Algorithm","Digital Electronics"],marks1:[10,20,20],marks2:[10,21,20],marks3:[10,19,21],marks4:[15,18,10],marks5:[9,15,12],marks6:[8,20,15],marks7:[7,21,30],marks8:[6,14,29], marks9:[8,11,28],marks10:[9,12,26],marks11:[10,13,27],marks12:[11,14,15]}); 
markstab.insert({enroll:"141367",subject:["a1","a2","a3","a4","b1","b2","b3","b4","c1","c2","c3","c4"],subjectname:["Mathematics 1","Physics 1 ","Electircal Circuit","C Programming","Mathematics 2","Physics 2","DS","GCP","Environemtal","OOPs","Algorithm","Digital Electronics"],marks1:[10,20,20],marks2:[10,21,20],marks3:[10,19,21],marks4:[15,18,10],marks5:[9,15,12],marks6:[8,20,15],marks7:[7,21,30],marks8:[6,14,29], marks9:[8,11,28],marks10:[9,12,26],marks11:[10,13,27],marks12:[11,14,15]}); 
markstab.insert({enroll:"141368",subject:["a1","a2","a3","a4","b1","b2","b3","b4","c1","c2","c3","c4"],subjectname:["Mathematics 1","Physics 1 ","Electircal Circuit","C Programming","Mathematics 2","Physics 2","DS","GCP","Environemtal","OOPs","Algorithm","Digital Electronics"],marks1:[10,20,20],marks2:[10,21,20],marks3:[10,19,21],marks4:[15,18,10],marks5:[9,15,12],marks6:[8,20,15],marks7:[7,21,30],marks8:[6,14,29], marks9:[8,11,28],marks10:[9,12,26],marks11:[10,13,27],marks12:[11,14,15]}); 
*/
                                            
studenttab.insert({enroll:"141363",subject:"a1",subjectname:"Mathematics 1",t1:10,t2:20,t3:20});
studenttab.insert({enroll:"141363",subject:"a2",subjectname:"Physics 1 ",t1:10,t2:21,t3:20});
studenttab.insert({enroll:"141363",subject:"a3",subjectname:"Electircal Circuit",t1:10,t2:19,t3:21});
studenttab.insert({enroll:"141363",subject:"a4",subjectname:"C Programming",marks:[15,18,10]});
studenttab.insert({enroll:"141363",subject:"b1",subjectname:"Mathematics 2",marks:[9,15,12]});
studenttab.insert({enroll:"141363",subject:"b2",subjectname:"Physics 2",marks:[8,20,15]});
studenttab.insert({enroll:"141363",subject:"b3",subjectname:"DS",marks:[7,21,30]});
studenttab.insert({enroll:"141363",subject:"b4",subjectname:"GCP",marks:[6,14,29]});
studenttab.insert({enroll:"141363",subject:"c1",subjectname:"Environemtal",marks:[8,11,28]});
studenttab.insert({enroll:"141363",subject:"c2",subjectname:"OOPs",marks:[9,12,26]});
studenttab.insert({enroll:"141363",subject:"c3",subjectname:"Algorithm",marks:[10,13,27]});
studenttab.insert({enroll:"141363",subject:"c4",subjectname:"Digital Electronics",marks:[11,14,15]});

    /*


                                    //141364 
studenttab.insert({enroll:"141364",subject:"a1",subjectname:"Mathematics 1",marks:[10,20,15]});
studenttab.insert({enroll:"141364",subject:"a2",subjectname:"Physics 1 ",marks:[11,21,16]});
studenttab.insert({enroll:"141364",subject:"a3",subjectname:"Electircal Circuit",marks:[12,22,17]});
studenttab.insert({enroll:"141364",subject:"a4",subjectname:"C Programming",marks:[13,23,18]});
studenttab.insert({enroll:"141364",subject:"b1",subjectname:"Mathematics 2",marks:[14,24,19]});
studenttab.insert({enroll:"141364",subject:"b2",subjectname:"Physics 2",marks:[15,18,20]});
studenttab.insert({enroll:"141364",subject:"b3",subjectname:"DS",marks:[9,15,21]});
studenttab.insert({enroll:"141364",subject:"b4",subjectname:"GCP",marks:[8,14,22]});
studenttab.insert({enroll:"141364",subject:"c1",subjectname:"Environemtal",marks:[7,13,23]});
studenttab.insert({enroll:"141364",subject:"c2",subjectname:"OOPs",marks:[6,12,24]});
studenttab.insert({enroll:"141364",subject:"c3",subjectname:"Algorithm",marks:[5,11,25]});
studenttab.insert({enroll:"141364",subject:"c4",subjectname:"Digital Electronics",marks:[4,10,26]});

                                  //141365
studenttab.insert({enroll:"141365",subject:"a1",subjectname:"Mathematics 1",marks:[11,18,15]});
studenttab.insert({enroll:"141365",subject:"a2",subjectname:"Physics 1 ",marks:[12,17,14]});
studenttab.insert({enroll:"141365",subject:"a3",subjectname:"Electircal Circuit",marks:[13,16,13]});
studenttab.insert({enroll:"141365",subject:"a4",subjectname:"C Programming",marks:[14,15,12]});
studenttab.insert({enroll:"141365",subject:"b1",subjectname:"Mathematics 2",marks:[15,17,11]});
studenttab.insert({enroll:"141365",subject:"b2",subjectname:"Physics 2",marks:[10,19,10]});
studenttab.insert({enroll:"141365",subject:"b3",subjectname:"DS",marks:[11,19,10]});
studenttab.insert({enroll:"141365",subject:"b4",subjectname:"GCP",marks:[12,21,8]});
studenttab.insert({enroll:"141365",subject:"c1",subjectname:"Environemtal",marks:[13,22,7]});
studenttab.insert({enroll:"141365",subject:"c2",subjectname:"OOPs",marks:[14,23,6]});
studenttab.insert({enroll:"141365",subject:"c3",subjectname:"Algorithm",marks:[15,24,5]});
studenttab.insert({enroll:"141365",subject:"c4",subjectname:"Digital Electronics",marks:[16,25,4]});

                                        //141366
studenttab.insert({enroll:"141366",subject:"a1",subjectname:"Mathematics 1",marks:[10,20,15]});
studenttab.insert({enroll:"141366",subject:"a2",subjectname:"Physics 1 ",marks:[11,21,16]});
studenttab.insert({enroll:"141366",subject:"a3",subjectname:"Electircal Circuit",marks:[12,22,17]});
studenttab.insert({enroll:"141366",subject:"a4",subjectname:"C Programming",marks:[13,23,18]});
studenttab.insert({enroll:"141364",subject:"b1",subjectname:"Mathematics 2",marks:[14,24,19]});
studenttab.insert({enroll:"141364",subject:"b2",subjectname:"Physics 2",marks:[15,18,20]});
studenttab.insert({enroll:"141364",subject:"b3",subjectname:"DS",marks:[9,15,21]});
studenttab.insert({enroll:"141364",subject:"b4",subjectname:"GCP",marks:[8,14,22]});
studenttab.insert({enroll:"141364",subject:"c1",subjectname:"Environemtal",marks:[7,13,23]});
studenttab.insert({enroll:"141364",subject:"c2",subjectname:"OOPs",marks:[6,12,24]});
studenttab.insert({enroll:"141364",subject:"c3",subjectname:"Algorithm",marks:[5,11,25]});
studenttab.insert({enroll:"141364",subject:"c4",subjectname:"Digital Electronics",marks:[4,10,26]});
*/
//*****************************************CGPA**********************************

personal.insert({enroll:"141363",name:"Vikhyat Midha",fname:"Parvinder Midha",email:"vikhyatmidha5@gmail.com",phone:"9413895314"});
personal.insert({enroll:"141364",name:"Aman Singh",fname:"Raghav Singh",email:"singhaman@gmail.com",phone:"9413895314"});
personal.insert({enroll:"141365",name:"Arun Gupta",fname:"Venky Gupta",email:"gupta@gmail.com",phone:"9413895314"});
personal.insert({enroll:"141366",name:"Ranbir kapoor",fname:"Rishi Kapoor",email:"ranbirkapoor@gmail.com",phone:"9413895314"});
personal.insert({enroll:"141367",name:"Abhishek Sharma",fname:"Ranveer Sharma",email:"abhishek@gmail.com",phone:"9413895314"});
personal.insert({enroll:"141368",name:"Girish sethi",fname:"Gagan Sethi",email:"girish@gmail.com",phone:"9413895314"});

var vk=personal.findOne({enroll:"141363"},{name:1}).name;
console.log(vk);

cgpa.insert({enroll:"141363",score:[7.1,6.2,6.7,6.3]});
cgpa.insert({enroll:"141364",score:[9.5,8.3,7.9,7.3]});
cgpa.insert({enroll:"141365",score:[9.1,8.2,8.7,8.3]});
cgpa.insert({enroll:"141366",score:[8.1,7.2,7.7,6.3]});
cgpa.insert({enroll:"141367",score:[7.1,7.2,7.7,7.3]});
cgpa.insert({enroll:"141368",score:[9.1,9.2,8.7,8.3]});


scgpa.insert({enroll:"141363",score:[7.1,6.5,6.5,6.7]});
scgpa.insert({enroll:"141364",score:[9.1,8.2,7.7,7.3]});
scgpa.insert({enroll:"141365",score:[9.1,8.9,8.9,8.5]});
scgpa.insert({enroll:"141366",score:[8.0,7.2,7.9,6.5]});
scgpa.insert({enroll:"141367",score:[7.8,7.3,7.5,7.5]});
scgpa.insert({enroll:"141368",score:[9.2,9.5,8.8,8.8]});




//***************************   Default Session starts ******************************

Session.setDefault('page', 'home');

UI.body.helpers({
        isPage: function(page){
            return Session.equals('page', page)
        }
});

function Projbody(userid)
{

   


    
   Template.about.myname = function() {
     var myname=personal.findOne({enroll:userid}).name;
   // var myname = "Hello "+userid; 
     console.log(personal.findOne({enroll:userid}).name);
    return myname;
    }

    //********************* messaging Starts here ***************************

     Template.messaging.events({
     'submit .messageform': function(event, template)
     {
        var ourmessage=event.target.yourmessage.value;
        var receive=event.target.receiver.value;
        
        
          messageapp.insert({
            message: ourmessage,
            receive: receive,
            sender: userid,
            createdAt: new Date()
        });

        event.target.yourmessage.value="";
        event.target.receiver.value="";

        return false;
     }   
     });
     //*************************  Messaging ends Here ****************************
      Template.Personal.thename = function() {
     var thename=personal.findOne({enroll:userid}).name;
   // var myname = "Hello "+userid; 
     console.log(personal.findOne({enroll:userid}).name);
    return thename;
    }
    Template.Personal.fathername = function() {
     var fathername=personal.findOne({enroll:userid}).fname;
   // var myname = "Hello "+userid; 
    // console.log(personal.findOne({enroll:userid}).fname);
    return fathername;
    }
    Template.Personal.email = function() {
     var email=personal.findOne({enroll:userid}).email;
   // var myname = "Hello "+userid; 
    // console.log(personal.findOne({enroll:userid}).fname);
    return email;
    }
    Template.Personal.phone = function() {
     var phone=personal.findOne({enroll:userid}).phone;
   // var myname = "Hello "+userid; 
    // console.log(personal.findOne({enroll:userid}).fname);
    return phone;
    }
      
      

    //***********************************   Chart start here ****************************
      var cu=Session.get('usercurrent');

      
/*
      ab1=cgpa.findOne({enroll:cu},{score:1,_id:0}).score[0];
 ab2=cgpa.findOne({enroll:cu},{score:1,_id:0}).score[1];
 ab3=cgpa.findOne({enroll:cu},{score:1,_id:0}).score[2];
 ab4=cgpa.findOne({enroll:cu},{score:1,_id:0}).score[3];

var newdata =[ab1,ab2,ab3,ab4];
console.log(newdata);
a1=scgpa.findOne({enroll:cu},{score:1,_id:0}).score[0];
 a2=scgpa.findOne({enroll:cu},{score:1,_id:0}).score[1];
 a3=scgpa.findOne({enroll:cu},{score:1,_id:0}).score[2];
 a4=scgpa.findOne({enroll:cu},{score:1,_id:0}).score[3];

var newdata2 =[a1,a2,a3,a4];
*/
 ab1=studenttab.findOne({enroll:cu},{t1:1,_id:0}).t1;
 ab2=studenttab.findOne({enroll:cu},{t2:1,_id:0}).t2;
 ab3=studenttab.findOne({enroll:cu},{t3:1,_id:0}).t3;
 

 /*
 ab2=studenttab.findOne({enroll:cu},{score:1,_id:0}).score[1];
 ab3=studenttab.findOne({enroll:cu},{score:1,_id:0}).score[2];
 ab4=studenttab.findOne({enroll:cu},{score:1,_id:0}).score[3];
*/
var newdata =[ab1,ab2,ab3];
console.log(newdata);
a1=scgpa.findOne({enroll:cu},{score:1,_id:0}).score[0];
 a2=scgpa.findOne({enroll:cu},{score:1,_id:0}).score[1];
 a3=scgpa.findOne({enroll:cu},{score:1,_id:0}).score[2];
 a4=scgpa.findOne({enroll:cu},{score:1,_id:0}).score[3];

var newdata2 =[a1,a2,a3,a4];   
  



    

    // **********************************   Chart end here ******************************

 
}  //   ***************projbody ends here*********************************




UI.body.events({
        'click .clickChangesPage': function(event, template){
          if(event.currentTarget.getAttribute('data-page')=='about')
          { 
            var enroll = $('.enroll').val();
            var pswd = $('.pswd').val();
            userid= enroll;
                                                                                       //   AUTHENTICATION
                     if(enroll=="141363" && pswd=="141363")
                    {
                     
                      
                    userid= enroll; 
                     Session.set('page', event.currentTarget.getAttribute('data-page'));
                     current.update({_id:"o59NJo9XGaSBBWddr"},{$set:{enroll:userid}});
                      Session.set('usercurrent',userid);
                      Projbody(userid);
                    
                    }
                  else  if(enroll=="141364" && pswd=="141364")
                   {
                    
                     userid= enroll;
                     Session.set('page', event.currentTarget.getAttribute('data-page'));
                     current.update({_id:"o59NJo9XGaSBBWddr"},{$set:{enroll:userid}});
                     Session.set('usercurrent',userid);
                     Projbody(userid);
                   }
                  else  if(enroll=="141365" && pswd=="141365")
                   {   
                     
                     userid= enroll;
                     Session.set('page', event.currentTarget.getAttribute('data-page'));
                    current.update({_id:"o59NJo9XGaSBBWddr"},{$set:{enroll:userid}});
                    Session.set('usercurrent',userid);
                    Projbody(userid);
                      
                   }
                  else  if(enroll=="141366" && pswd=="141366")
                   {
                    
                    userid= enroll;
                     Session.set('page', event.currentTarget.getAttribute('data-page'));
                     current.update({_id:"o59NJo9XGaSBBWddr"},{$set:{enroll:userid}});
                      Session.set('usercurrent',userid);
                      Projbody(userid);
            

                   }
                  else if(enroll=="141367" && pswd=="141367")
                   {
                   
                    userid= enroll;
                        
                     Session.set('page', event.currentTarget.getAttribute('data-page'));
                     current.update({_id:"o59NJo9XGaSBBWddr"},{$set:{enroll:userid}});
                     Projbody(userid);

                  }
                  else if(enroll=="141368" && pswd=="141368")
                  {
                    
                    userid= enroll; 
                     Session.set('page', event.currentTarget.getAttribute('data-page'));
                     current.update({_id:"o59NJo9XGaSBBWddr"},{$set:{enroll:userid}});
                      Session.set('usercurrent',userid);
                     Projbody(userid);

                }
                  else if(enroll=="t1" && pswd=="t1")
                {
                    
                      
                    userid= enroll;  
                     Session.set('page', event.currentTarget.getAttribute('data-page'));
                     current.update({_id:"o59NJo9XGaSBBWddr"},{$set:{enroll:userid}});
                      Session.set('usercurrent',userid);
                      Projbody(userid);
                   

                }
                  else if(enroll=="t2" && pswd=="t2")
                {
                     
                    userid= enroll;
                     Session.set('page', event.currentTarget.getAttribute('data-page'));
                     current.update({_id:"o59NJo9XGaSBBWddr"},{$set:{enroll:userid}});
                      Session.set('usercurrent',userid);
                      Projbody(userid);
                   
                }


                else{
                      alert('INCORECT UserId or Password');
                    }

            
          }

          else{
               Session.set('page', event.currentTarget.getAttribute('data-page'));
               Projbody(userid);
          }
          
        }
    });

//****************************  Authentication ends here************************

     $( document ).ready(function() {
    //Get the context of the canvas element we want to select
    var ctx = document.getElementById("myChart").getContext("2d");
    var myNewChart = new Chart(ctx).Bar(data,options);


    

    
  });

var options = {
         responsive: false,
        ///Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: true,

        //String - Colour of the grid lines
        scaleGridLineColor: "rgba(0,0,0,.05)",

        //Number - Width of the grid lines
        scaleGridLineWidth: 1,

        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,

        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,

        //Boolean - Whether the line is curved between points
        bezierCurve: true,

        //Number - Tension of the bezier curve between points
        bezierCurveTension: 0.4,

        //Boolean - Whether to show a dot for each point
        pointDot: true,

        //Number - Radius of each point dot in pixels
        pointDotRadius: 4,

        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth: 1,

        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius: 20,

        //Boolean - Whether to show a stroke for datasets
        datasetStroke: true,

        //Number - Pixel width of dataset stroke
        datasetStrokeWidth: 2,

        //Boolean - Whether to fill the dataset with a colour
        datasetFill:false,

        //String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

    };
var data = {
  labels : ["English","Maths","Science","Alogorithm","DS"],

  datasets : [
    { 

      fillColor : "rgba(220,220,220,0.5)",
      strokeColor : "rgba(220,220,220,1)",
      pointColor : "rgba(220,220,220,1)",
      pointStrokeColor : "#fff",
      
      data : [75,65,90,81,21]
    },
    {
      fillColor : "rgba(151,187,205,0.5)",
      strokeColor : "rgba(151,187,205,1)",
      pointColor : "rgba(151,187,205,1)",
      pointStrokeColor : "#fff",
      data : [28,48,40,19,96]
    }
    
  ]
}


Template.charts.onRendered(function() {
    // Get the context of the canvas element we want to select
    var ctx  = document.getElementById("myChart").getContext("2d");
    var ctx2 = document.getElementById("myChart2").getContext("2d");
    var ctx3 = document.getElementById("myChart3").getContext("2d");
    var ctx4 = document.getElementById("myChart4").getContext("2d");
    var ctx5 = document.getElementById("myChart5").getContext("2d");

    // Set the options
    var options = {

        ///Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: true,

        //String - Colour of the grid lines
        scaleGridLineColor: "rgba(0,0,0,.05)",

        //Number - Width of the grid lines
        scaleGridLineWidth: 1,

        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,

        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,

        //Boolean - Whether the line is curved between points
        bezierCurve: true,

        //Number - Tension of the bezier curve between points
        bezierCurveTension: 0.4,

        //Boolean - Whether to show a dot for each point
        pointDot: true,

        //Number - Radius of each point dot in pixels
        pointDotRadius: 4,

        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth: 1,

        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius: 20,

        //Boolean - Whether to show a stroke for datasets
        datasetStroke: true,

        //Number - Pixel width of dataset stroke
        datasetStrokeWidth: 2,

        //Boolean - Whether to fill the dataset with a colour
        datasetFill: true,

        //String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

    };

    var options2 = {
        //Boolean - Whether to show lines for each scale point
        scaleShowLine: true,

        //Boolean - Whether we show the angle lines out of the radar
        angleShowLineOut: true,

        //Boolean - Whether to show labels on the scale
        scaleShowLabels: false,

        // Boolean - Whether the scale should begin at zero
        scaleBeginAtZero: true,

        //String - Colour of the angle line
        angleLineColor: "rgba(0,0,0,.1)",

        //Number - Pixel width of the angle line
        angleLineWidth: 1,

        //String - Point label font declaration
        pointLabelFontFamily: "'Arial'",

        //String - Point label font weight
        pointLabelFontStyle: "normal",

        //Number - Point label font size in pixels
        pointLabelFontSize: 10,

        //String - Point label font colour
        pointLabelFontColor: "#666",

        //Boolean - Whether to show a dot for each point
        pointDot: true,

        //Number - Radius of each point dot in pixels
        pointDotRadius: 3,

        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth: 1,

        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius: 20,

        //Boolean - Whether to show a stroke for datasets
        datasetStroke: true,

        //Number - Pixel width of dataset stroke
        datasetStrokeWidth: 2,

        //Boolean - Whether to fill the dataset with a colour
        datasetFill: true,

        //String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

    }

    // Set the data
    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [random(), random(), random(), random(), random(), random(), random()]
        }, {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [random(), random(), random(), random(), random(), random(), random()]
        }]
    };
    var data2 = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [{
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [random(), random(), random(), random(), random(), random(), random()]
        }, {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [random(), random(), random(), random(), random(), random(), random()]
        }]
    };

    var data3 = [{
            value: random(),
            color: "#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        }, {
            value: random(),
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        }, {
            value: random(),
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        }, {
            value: random(),
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "Grey"
        }, {
            value: random(),
            color: "#4D5360",
            highlight: "#616774",
            label: "Dark Grey"
        }

    ];
    var data4 = [
    {
        value: random(),
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: random(),
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: random(),
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
    ]

    // draw the charts
    var myLineChart = new Chart(ctx).Line(data, options);
    var myRadarChart = new Chart(ctx2).Radar(data2, options2);
    var myPolarArea = new Chart(ctx3).PolarArea(data3, {
        segmentStrokeColor: "#000000"
    });
    // For a pie chart
    var myPieChart = new Chart(ctx4).Pie(data4,{
        animateScale: true
    });

    // And for a doughnut chart
    var myDoughnutChart = new Chart(ctx5).Doughnut(data4,{
        animateScale: true
    });
});

Template.moreCharts.onRendered(function() {
    var ctx  = document.getElementById("myChart").getContext("2d");

    var rand1 = random();
    var rand2 = random();
    var rand3 = random();
    var data = [
    {
        value: rand1,
        color:"#723970",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: rand2,
        color: "#8BB65E",
        highlight: "#5AD3D1",
        label: "VIKHYAT"
    },
    {
        value: rand3,
        color: "#CB3970",
        highlight: "#FFC870",
        label: "Yellow"
    }
    ]
    var myPieChart = new Chart(ctx).Pie(data);
});

function random() {
    return Math.floor((Math.random() * 100) + 1);
}