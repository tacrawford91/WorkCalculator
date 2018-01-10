
var config = {
    apiKey: "AIzaSyAf27asdzPJL7ZMJvhnX0Bi8n95m5p1bGw",
    authDomain: "work-calculator-13c3e.firebaseapp.com",
    databaseURL: "https://work-calculator-13c3e.firebaseio.com",
    projectId: "work-calculator-13c3e",
    storageBucket: "",
    messagingSenderId: "140341633697"
  };
  
  firebase.initializeApp(config);
    //set db varible 
    var database = firebase.database();
    //form field emty vars
    var employeeName;
    var role;
    var startDate;
    var monthlyRate;


    $(".submitBtn").on("click",function() {
        //stop refresh
        event.preventDefault();
        // grab input fields and save to varible
        employeeName = $(".employeeName").val().trim();
        role = $(".role").val().trim();
        startDate = $(".startDate").val().trim();
        monthlyRate = $(".monthlyRate").val().trim();
     
        database.ref().push({
            employeeName: employeeName,
            role: role,
            startDate = startDate,
            monthlyRate = monthlyRate
        })

    })