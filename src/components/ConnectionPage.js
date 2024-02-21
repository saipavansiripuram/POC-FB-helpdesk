import React, {useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const ConnectionPage = () => {
  const navigate = useNavigate();

  const [sdkInitialized, setSdkInitialized] = useState(false);
  
  function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    console.log('Welcome!  Fetching your information.... ');
    window.FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }
  useEffect(() => {
    // Load the Facebook SDK asynchronously
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: '6641970259241710',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v19.0'
      });
      setSdkInitialized(true); 
    };

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);
  window.fbAsyncInit = function() {
    // <!-- Initialize the SDK with your app and the Graph API version for your app -->
    window.FB.init({
              appId            : '6641970259241710',
              xfbml            : true,
              version          : 'v19.0'
            });
    // <!-- If you are logged in, automatically get your name and email adress, your public profile information -->
    window.FB.login(function(response) {
              if (response.authResponse) {
                   console.log('Welcome!  Fetching your information.... ');
                   window.FB.api('/me', {fields: 'name, email'}, function(response) {
                       document.getElementById("profile").innerHTML = "Good to see you, " + response.name + ". i see your email address is " + response.email
                   });
              } else { 
                  //  <!-- If you are not logged in, the login dialog will open for you to login asking for permission to get your public profile and email -->
                   console.log('User cancelled login or did not fully authorize.'); }
    }); 
};

  const handleConnectPage = () => {
    if (sdkInitialized) {
      // Check if the user is already logged in
      window.FB.getLoginStatus(response => {
        if (response.status === 'connected') {
          // User is logged in
          testAPI();  
          navigate("/chat");
        } else {
          // User is not logged in, initiate login process
          window.FB.login(loginResponse => {
            if (loginResponse.authResponse) {
              // User successfully logged in
              navigate("/chat");
            } else {
              // User cancelled login or encountered an error
              console.log('Login cancelled or encountered an error.');
              navigate("/chat");
            }
          }, { scope: 'email' }); // Add any additional permissions you need
        }
      });
    }
  };

  // const handleConnectPage = async () =>{
  //  console.log("Clicked");
  //  navigate("/chat");

  // }
  return (
    <div className="bg-[#1e4d90] backdrop-opacity-10  w-full h-screen ">
      <Header/>

      <div className="w-full md:w-4/12 absolute p-16 mx-auto  my-44 right-0 left-0  bg-white bg-opacity-100 rounded-xl text-white">
        <h1 className="text-xl text-black text-center font-medium p-4">
          Facebook Page Integration
        </h1>
        <button className="p-4 my-6 bg-blue-800 hover:bg-blue-600 text-white  w-full rounded-lg" 
        onClick={handleConnectPage}
        >
          Connect Page
        </button>
      </div>
    </div>
    
  );
};

export default ConnectionPage;
