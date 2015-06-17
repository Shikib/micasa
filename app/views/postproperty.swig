{% extends 'layout.swig' %}

{% block content%}
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
  <title>Micasa</title>

  <!-- CSS  -->
  <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  <link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
</head>
{% endblock %}

{% block content%}
<nav>
    <div class="nav-wrapper teal">
      <a href="#" class="brand-logo right">Micasa</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="/">Home</a></li>
        <li><a href="login">Login</a></li>
        <li><a href="signup">Sign up</a></li>
        <li><a href="search">Search</a></li>
      </ul>
    </div>
  </nav>

<!--   Icon Section   -->
<body>
  <div class="container" id="select-type">
    <div class="col s12 m4">
      <div class="icon-block"><a href="seller">
        <h2 class="center teal-text"><i class="mdi-navigation-arrow-back"></i></h2></a>
        <h5 class="center">Back to Seller</h5>
      </div>
     </div>

     <div class="row">
       <div class="col s12 m4">
         <div class="icon-block"><a id="cs-select" href="#">
           <h2 class="center teal-text"><i class="mdi-communication-business"></i></h2></a>
           <h5 class="center">Post your Commercial Property for Sale</h5>
         </div>
       </div>

        <div class="col s12 m4">
          <div class="icon-block"><a id="cr-select" href="#">
            <h2 class="center teal-text"><i class="mdi-communication-business"></i></h2></a>
            <h5 class="center">Post your Commercial Property for Rent</h5>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col s12 m4">
          <div class="icon-block"><a id="rs-select" href="#">
            <h2 class="center teal-text"><i class="mdi-action-home"></i></h2></a>
            <h5 class="center">Post your Residential Property for Sale</h5>

          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block"><a id="rr-select" href="#">
            <h2 class="center teal-text"><i class="mdi-action-home"></i></h2></a>
            <h5 class="center">Post your Residential Property for Rent</h5>

          </div>
        </div>
      </div>
    </div>

<div class="row" id="commercial-sale" style="display: none;">
    <form class="col s12">
      <div class="row">
        <h5>Location </h5>
        <div class="input-field col s6">
          <input id="cs-city" type="text" class="validate">
          <label for="city">City</label>
        </div>
        <div class="input-field col s6">
          <input id="cs-province" type="text" class="validate">
          <label for="province">Province</label>
        </div>
      </div>  

      <div class="row">
        <div class="input-field col s6">
          <input id="cs-country" type="text" class="validate">
          <label for="country">Country</label>
        </div>
        <div class="input-field col s6">
          <input id="cs-price" type="text" class="validate">
          <label for="cs-price">Price (Thousands)</label>
        </div>
      </div>

      <div class="row"> 
        <div class="input-field col s6">
          <input id="cs-age" type="text" class="validate">
          <label for="cs-age">Property Age</label>
        </div>
        <div class="input-field col s6">
          <input id="cs-space" type="text" class="validate">
          <label for="cs-space">Floor Space (sq. metres)</label>
        </div>
      </div>


      <div class="row"> 
        <div class="input-field col s6">
          <input id="cs-office" type="text" class="validate">
          <label for="cs-office">Office Count</label>
        </div>
        <div class="input-field col s6">
          <input id="cs-storage" type="text" class="validate">
          <label for="cs-storage">Storage Space (sq. metres)</label>
        </div>
      </div>


      <div class="row">
        <h5>Has Furnishing?</h5>  
        <select id="cs-furnishing">
          <option value="Y">Yes the property is furnished.</option>
          <option value="N">No the property is not furnished.</option>
        </select>
      </div>

      <button id="cs-post" class="btn waves-effect waves-light" type="submit" name="action">Submit
        <i class="mdi-content-send right"></i>
      </button>

    </form>
  </div> 

   
    <div class="row" id="commercial-rent" style="display: none;">
    <form class="col s12">
      <div class="row">
        <h5>Location </h5>
        <div class="input-field col s6">
          <input id="cr-city" type="text" class="validate">
          <label for="city">City</label>
        </div>
        <div class="input-field col s6">
          <input id="cr-province" type="text" class="validate">
          <label for="province">Province</label>
        </div>
      </div>  

      <div class="row">
        <div class="input-field col s6">
          <input id="cr-country" type="text" class="validate">
          <label for="country">Country</label>
        </div>
        <div class="input-field col s6">
          <input id="cr-price" type="text" class="validate">
          <label for="cr-price">Price</label>
        </div>
      </div>

      <div class="row"> 
        <div class="input-field col s6">
          <input id="cr-age" type="text" class="validate">
          <label for="cr-age">Property Age</label>
        </div>
        <div class="input-field col s6">
          <input id="cr-space" type="text" class="validate">
          <label for="cr-space">Floor Space (sq. metres)</label>
        </div>
      </div>


      <div class="row"> 
        <div class="input-field col s6">
          <input id="cr-office" type="text" class="validate">
          <label for="cr-office">Office Count</label>
        </div>
        <div class="input-field col s6">
          <input id="cr-storage" type="text" class="validate">
          <label for="cr-storage">Storage Space (sq. metres)</label>
        </div>
      </div>


      <div class="row">
        <h5>Has Furnishing?</h5>  
        <select id="cr-furnishing">
          <option value="Y">Yes the property is furnished.</option>
          <option value="N">No the property is not furnished.</option>
        </select>
      </div>

      <br><br>

      <div class="row">
        <h5>Pets Allowed?</h5>  
        <select id="cr-pets">
          <option value="Y">Yes. Pets are allowed on the property.</option>
          <option value="N">No. Pets are not allowed on the property.</option>
        </select>
      </div>

      <button id="cr-post" class="btn waves-effect waves-light" type="submit" name="action">Submit
        <i class="mdi-content-send right"></i>
      </button>
    </form>
  </div> 


    <div class="row" id="residential-sale" style="display: none;">
    <form class="col s12">
      <div class="row">
        <h5>Location </h5>
        <div class="input-field col s6">
          <input id="rs-city" type="text" class="validate">
          <label for="city">City</label>
        </div>
        <div class="input-field col s6">
          <input id="rs-province" type="text" class="validate">
          <label for="province">Province</label>
        </div>
      </div>  

      <div class="row">
        <div class="input-field col s6">
          <input id="rs-country" type="text" class="validate">
          <label for="country">Country</label>
        </div>
        <div class="input-field col s6">
          <input id="rs-price" type="text" class="validate">
          <label for="rs-price">Price (Thousands)</label>
        </div>
      </div>

      <div class="row"> 
        <div class="input-field col s6">
          <input id="rs-age" type="text" class="validate">
          <label for="rs-age">Property Age</label>
        </div>
        <div class="input-field col s6">
          <input id="rs-space" type="text" class="validate">
          <label for="rs-space">Floor Space (sq. metres)</label>
        </div>
      </div>

      <div class="row">
        <h5>Has Furnishing?</h5>  
        <select id="rs-furnishing">
          <option value="Y">Yes the property is furnished.</option>
          <option value="N">No the property is not furnished.</option>
        </select>
      </div>


      <br><br>

      <div class="row">
        <h5>Has Garage?</h5>  
        <select id="rs-garage">
          <option value="Y">Yes. The property has a garage.</option>
          <option value="N">No. The property does not have a garage.</option>
        </select>
      </div>

      <br><br>

      <div class="row">
        <h5>Has Garden?</h5>  
        <select id="rs-garden">
          <option value="Y">Yes. Property has a garden.</option>
          <option value="N">No. Property does not have a garden. </option>
        </select>
      </div>

      <button id="rs-post" class="btn waves-effect waves-light" type="submit" name="action">Submit
        <i class="mdi-content-send right"></i>
      </button>
    </form>
  </div> 


    <div class="row" id="residential-rent" style="display: none;">
    <form class="col s12">
      <div class="row">
        <h5>Location </h5>
        <div class="input-field col s6">
          <input id="rr-city" type="text" class="validate">
          <label for="city">City</label>
        </div>
        <div class="input-field col s6">
          <input id="rr-province" type="text" class="validate">
          <label for="province">Province</label>
        </div>
      </div>  

      <div class="row">
        <div class="input-field col s6">
          <input id="rr-country" type="text" class="validate">
          <label for="country">Country</label>
        </div>
        <div class="input-field col s6">
          <input id="rr-price" type="text" class="validate">
          <label for="rr-price">Price</label>
        </div>
      </div>

      <div class="row"> 
        <div class="input-field col s6">
          <input id="rr-age" type="text" class="validate">
          <label for="rr-age">Property Age</label>
        </div>
        <div class="input-field col s6">
          <input id="rr-space" type="text" class="validate">
          <label for="rr-space">Floor Space (sq. metres)</label>
        </div>
      </div>

      <div class="row">
        <h5>Has Furnishing?</h5>  
        <select id="rr-furnishing">
          <option value="Y">Yes the property is furnished.</option>
          <option value="N">No the property is not furnished.</option>
        </select>
      </div>


      <br><br>

      <div class="row">
        <h5>Has Garage?</h5>  
        <select id="rr-garage">
          <option value="Y">Yes. The property has a garage.</option>
          <option value="N">No. The property does not have a garage.</option>
        </select>
      </div>

      <br><br>

      <div class="row">
        <h5>Has Garden?</h5>  
        <select id="rr-garden">
          <option value="Y">Yes. Property has a garden.</option>
          <option value="N">No. Property does not have a garden.<option>
        </select>
      </div>


      <br><br>

      <div class="row">
        <h5>Pets Allowed?</h5>  
        <select id="rr-pets">
          <option value="Y">Yes. Pets are allowed.</option>
          <option value="N">No. Pets are not allowed.</option>
        </select>
      </div>

      <button id="rr-post" class="btn waves-effect waves-light" type="submit" name="action">Submit
        <i class="mdi-content-send right"></i>
      </button>
    </form>
  </div> 

    </div>



  <!--  Scripts-->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="materialize/js/materialize.js"></script>
  <script src="materialize/js/init.js"></script>
  <script src="js/postproperty.js"></script>
  <script src="js/main.js"></script>

</body>
{% endblock %}
