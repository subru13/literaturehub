const firebaseConfig = {
    apiKey: "AIzaSyCq1_J6QujVrArjoh2d6XqGs3a6q86_9QI",
    authDomain: "lithubwebsite.firebaseapp.com",
    projectId: "lithubwebsite",
    storageBucket: "lithubwebsite.appspot.com",
    messagingSenderId: "208279880588",
    appId: "1:208279880588:web:2d4b4b6cd0ddfc8d9e4ca9",
    measurementId: "G-6D1QTXK2VD"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  function signupCheck()
  {
    var username=document.getElementById("signupUsername").value;
    localStorage.setItem("username", username);
    var password =document.getElementById("signupPassword").value;
    localStorage.setItem("password", password);
    window.location="lithubmain.html";
  }

  function signinCheck()
  {
    if (localStorage.getItem("username") = username)
    {
      window.alert("Please enter the password!")
    }
    else if (localStorage.getItem("password") = password)
    {
      window.location="lithubmain.html";
    }
  }

  function newpost()
  {
    if (document.getElementById("post_input").value.length = [1-100] )
    {
      localstorage.setItem("post", document.getElementById("post_input").innerHTML);
      var post = localStorage.getItem("post");
      document.getElementById("post_text").innerHTML=results[0].label;
    }
  }