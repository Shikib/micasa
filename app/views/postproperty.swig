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
        <div class="input-field col s12">
          <input id="cs-country" type="text" class="validate">
          <label for="country">Country</label>
        </div>
        <div class="input-field col s6">
          <input id="cs-price" type="text" class="validate">
          <label for="cs-price">Price (Thousands)</label>
        </div>
      </div>

      <div class="row"> 
        <div class="input-field col s12">
          <input id="cs-age" type="text" class="validate">
          <label for="cs-age">Property Age</label>
        </div>
        <div class="input-field col s6">
          <input id="cs-space" type="text" class="validate">
          <label for="cs-space">Floor Space (sq. metres)</label>
        </div>
      </div>


      <div class="row"> 
        <div class="input-field col s12">
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
        <div class="input-field col s12">
          <input id="cr-country" type="text" class="validate">
          <label for="country">Country</label>
        </div>
        <div class="input-field col s6">
          <input id="cr-price" type="text" class="validate">
          <label for="cr-price">Price (Thousands)</label>
        </div>
      </div>

      <div class="row"> 
        <div class="input-field col s12">
          <input id="cr-age" type="text" class="validate">
          <label for="cr-age">Property Age</label>
        </div>
        <div class="input-field col s6">
          <input id="cr-space" type="text" class="validate">
          <label for="cr-space">Floor Space (sq. metres)</label>
        </div>
      </div>


      <div class="row"> 
        <div class="input-field col s12">
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
        <div class="input-field col s12">
          <input id="rs-country" type="text" class="validate">
          <label for="country">Country</label>
        </div>
      </div>


      <div class="row"> 
        <h5>Minimum Price (Thousands)</h5>
        <p class="range-field">
          <input type="range" id="rs-min-price" value="0" min="0" max="10000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Price (Thousands)</h5>
        <p class="range-field">
          <input type="range" id="rs-max-price" value="10000" min="0" max="10000" />
        </p>
      </div>

      <br><br>

      <div class="row"> 
        <h5>Minimum Property Age</h5>
        <p class="range-field">
          <input type="range" id="rs-min-age" value="0" min="0" max="100" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Property Age</h5>
        <p class="range-field">
          <input type="range" id="rs-max-age" value="100" min="0" max="100" />
        </p>
      </div>
   
      <br><br>

      <div class="row"> 
        <h5>Minimum Floor Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="rs-min-space" value="0" min="0" max="10000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Floor Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="rs-max-space" value="10000" min="0" max="10000" />
        </p>
      </div>

      <br><br>

      <div class="row">
        <h5>Furnishing Required</h5>  
        <select id="rs-furnishing">
          <option value="D">Doesn't Matter</option>
          <option value="Y">Yes it must be furnished</option>
          <option value="N">No I hate furniture</option>
        </select>
      </div>

      <br><br>

      <div class="row">
        <h5>Garage Required</h5>  
        <select id="rs-garage">
          <option value="D">Doesn't Matter</option>
          <option value="Y">Yes I need a garage</option>
          <option value="N">No I hate cars</option>
        </select>
      </div>

      <br><br>

      <div class="row">
        <h5>Garden required</h5>  
        <select id="rs-garden">
          <option value="D">Doesn't Matter</option>
          <option value="Y">Yes. Gardening is my favourite pastime</option>
          <option value="N">No I hate nature</option>
        </select>
      </div>

      <button id="rs-submit" class="btn waves-effect waves-light" type="submit" name="action">Submit
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
        <div class="input-field col s12">
          <input id="rr-country" type="text" class="validate">
          <label for="country">Country</label>
        </div>
      </div>

      <div class="row"> 
        <h5>Minimum Monthly Rent</h5>
        <p class="range-field">
          <input type="range" id="rr-min-price" value="0" min="0" max="10000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Monthly Rent</h5>
        <p class="range-field">
          <input type="range" id="rr-max-price" value="10000" min="0" max="10000" />
        </p>
      </div>

      <br><br>

      <div class="row"> 
        <h5>Minimum Property Age</h5>
        <p class="range-field">
          <input type="range" id="rr-min-age" value="0" min="0" max="100" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Property Age</h5>
        <p class="range-field">
          <input type="range" id="rr-max-age" value="100" min="0" max="100" />
        </p>
      </div>
   
      <br><br>

      <div class="row"> 
        <h5>Minimum Floor Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="rr-min-space" value="0" min="0" max="10000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Floor Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="rr-max-space" value="10000" min="0" max="10000" />
        </p>
      </div>

      <br><br>

      <div class="row">
        <h5>Furnishing Required</h5>  
        <select id="rr-furnishing">
          <option value="D">Doesn't Matter</option>
          <option value="Y">Yes it must be furnished</option>
          <option value="N">No I hate furniture</option>
        </select>
      </div>

      <br><br>

      <div class="row">
        <h5>Garage Required</h5>  
        <select id="rr-garage">
          <option value="D">Doesn't Matter</option>
          <option value="Y">Yes I need a garage</option>
          <option value="N">No I hate cars</option>
        </select>
      </div>

      <br><br>

      <div class="row">
        <h5>Garden required</h5>  
        <select id="rr-garden">
          <option value="D">Doesn't Matter</option>
          <option value="Y">Yes. Gardening is my favourite pastime</option>
          <option value="N">No I hate nature</option>
        </select>
      </div>

      <br><br>

      <div class="row">
        <h5>Pets Must Be Allowed</h5>  
        <select id="rr-pets">
          <option value="D">Doesn't Matter</option>
          <option value="Y">Yes. Pets are a necessity.</option>
          <option value="N">No. I hate pets.</option>
        </select>
      </div>

      <button id="rr-submit" class="btn waves-effect waves-light" type="submit" name="action">Submit
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
