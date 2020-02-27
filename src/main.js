import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoctorService } from './../src/doctor-service';


$(document).ready(function () {
  $('#issueForm').submit(function (event) {    
    event.preventDefault();
    $("#results").empty();
    const issue = $('#userIssueInput').val();

    (async () => {
      let doctorService = new DoctorService;
      const issueResult = await doctorService.getDoctorByIssue(issue);
      if (!issueResult.data){
        $("#results").html("It looks like there was an issue with the BetterDoctor API. Please try again.")
        $("#results").removeClass('hidden');
      }
      else if (issueResult.data == 0){
        $("#results").html("It looks like there are no results for your current search. Please try again.")
        $("#results").removeClass('hidden');
      }
      else { getDoctorbyIssue(issueResult.data);}
    })();

    function getDoctorbyIssue(doctors) {
      doctors.forEach(function(doctor){
        doctor.practices.forEach(function(practice){
          $("#results").append("<li>" + practice.name + "<br>" + practice.phones[0].number + "<br>" + practice.visit_address.street + "<br>" + practice.visit_address.city + "," + practice.visit_address.state + "<br>"  + practice.visit_address.zip + "<br>" + "</li>");
          if (practice.accepts_new_patients === true){
            $("#results").append("<br>" + "This office is currently accepting new patients" + "<br>" + "</li>");
          } else {
            $("#results").append("<br>" + "This office is not currently accepting new patients: " + "</li>");
          }
          if (practice.website){
            $("#results").append("<br>" + practice.website + "<br>");
          } else {
            $("#results").append("<br>" + "This doctor doesn't currently have a website" + "<br>");
          }
          $("#results").removeClass('hidden');
        });
      });
    }
  });

  $('#DoctorByNameForm').submit(function (event) {    
    event.preventDefault();
    $("#nameResults").empty();
    const name = $('#userDoctorNameInput').val();
    
    (async () => {
      let doctorService = new DoctorService;
      const nameResult = await doctorService.getDoctorByName(name);
      if (!nameResult.data){
        $("#nameResults").html("It looks like there was an issue with the BetterDoctor API. Please try again.")
        $("#nameResults").removeClass('hidden');
      }
      else if (nameResult.data == 0){
        $("#nameResults").html("It looks like there are no results for your current search. Please try again.")
        $("nameRresults").removeClass('hidden');
      }
      else {getDoctorByName(nameResult.data);}
    })();
    
    function getDoctorByName(doctors) {
      doctors.forEach(function(doctor){
        doctor.practices.forEach(function(practice){
          $("#nameResults").append("<li>" + practice.name + "<br>" + practice.phones[0].number + "<br>" + practice.visit_address.street + "<br>" + practice.visit_address.city + "," + practice.visit_address.state + "<br>"  + practice.visit_address.zip + "<br>" + "</li>");
          if (practice.accepts_new_patients === true){
            $("#nameResults").append("<br>" + "This office is currently accepting new patients" + "<br>" + "</li>");
          } else {
            $("#nameResults").append("<br>" + "This office is not currently accepting new patients: " + "</li>");
          }
          if (practice.website){
            $("#nameResults").append("<br>" + practice.website + "<br>");
          } else {
            $("#nameResults").append("<br>" + "This doctor doesn't currently have a website" + "<br>");
          }
          $("#nameResults").removeClass('hidden');
        });
      });
    }
  });
});