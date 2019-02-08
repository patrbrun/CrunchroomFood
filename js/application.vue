<template>
  <div>
    <div v-show="inserted==false">
          <head>
              <meta charset="UTF-8">
              <meta name="description" content="">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
              <!-- The above 4 meta tags *must* come first in the head; any other head content must come *after* these tags -->

              <!-- Title -->
              <title>Crunchroom</title>

              <!-- Favicon -->
              <link rel="icon" href="\assets\static\favicon.ico">

              <!-- Core Stylesheet -->

          </head>
        <body>

            <!-- ##### Header Area Start ##### -->
            <header class="header-sarea">

                <!-- Top Header Area -->
                <div class="top-header-area">
                    <div class="container h-100">
                        <div class="row h-100 align-items-center justify-content-between">
   
                            <!-- Breaking News -->
                            <div class="col-12 col-sm-6">
                                <div class="breaking-news">
                                    <div id="breakingNewsTicker" class="ticker">
                                        <ul>
                                            <li><a href="#">Crunchroom</a></li>
                                            <li><a href="#">The best recipes are here</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <!-- Top Social Info -->
                            <div class="col-12 col-sm-6">
                                <div class="top-social-info text-right">
                                    <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                                    <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Navbar Area -->
                <div class="delicious-main-menu">
                    <div class="classy-nav-container breakpoint-off">
                        <div class="container">
                            <!-- Menu -->
                            <nav class="classy-navbar justify-content-between" id="deliciousNav">

  
                                <!-- Navbar Toggler -->
                                <div class="classy-navbar-toggler">
                                    <span class="navbarToggler"><span></span><span></span><span></span></span>
                                </div>

                                <!-- Menu -->
                                <div class="classy-menu">

                                    <!-- close btn -->
                                    <div class="classycloseIcon">
                                        <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <!-- ##### Header Area End ##### -->

            <!-- ##### Hero Area Start ##### -->
            <section class="hero-area">
                <div class="hero-slides owl-carousel">
                    <!-- Single Hero Slide -->
                    <div class="single-hero-slide bg-img" style="background-image: url(http://www.birds.com/wp-content/uploads/home/bird4.jpg)">
                        <div class="container h-100">
                            <div class="row h-100 align-items-center">
                                <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                                    <div class="hero-slides-content" data-animation="fadeInUp" data-delay="100ms">
                                        <h2 data-animation="fadeInUp" data-delay="300ms">Crunchroom</h2>
                                        <p data-animation="fadeInUp" data-delay="700ms">Have food in your fridge but don't know what to cook? We can help. Just select your ingredients and we will show you possible recipes. With Crunchroom, cooking has never been faster and easier!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        <!-- ##### Hero Area End ##### -->

      
        <!-- ##### Choose ingredients / Best recipe ##### -->
        <div>
          <section class="best-receipe-area">
                  <div class="container">
                      <div class="row">
                          <div class="col-12">
                              <div class="section-heading">
                                  <h3>Ingredients</h3>
                              </div>
                          </div>
                      </div>
                    
                    <!-- Receipe Post Search --> 
                  <div class="receipe-post-search mb-80">
                      <div class="container">
                          <form action="#" method="post">
                              <div class="row">
                                  <div class="col-12 col-lg-3">
                                  </div>
                                  <div class="col-12 col-lg-3">
                                      <input type="search" name="search" placeholder="Search for an ingredient">
                                  </div>
                                  <div class="col-12 col-lg-3 text-right">
                                      <button type="submit" class="btn delicious-btn">Search</button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
                  <section class="best-receipe-area">
                      <div class="row">
                          <div class="col-12">
                                <div class="section-heading">
                                  <h3>Or select a popular one below:</h3>
                              </div>
                          </div>
                      </div>
                    

                          <!-- Single Best Receipe Area -->
                      <div class="custom-control custom-checkbox custom-control-inline">
                        <input type="checkbox" value="Rice" class="custom-control-input" id="defaultInline1" v-model="checkedNames">
                        <label class="custom-control-label" for="defaultInline1"><h5>Rice</h5></label>
                      </div>

                      <div class="custom-control custom-checkbox custom-control-inline">
                        <input type="checkbox" value="Carrot" class="custom-control-input" id="defaultInline2" v-model="checkedNames">
                        <label class="custom-control-label" for="defaultInline2"><h5>Carrot</h5></label>
                      </div>

                      <div class="custom-control custom-checkbox custom-control-inline">
                          <input type="checkbox" value="Onion" class="custom-control-input" id="defaultInline3" v-model="checkedNames">
                          <label class="custom-control-label" for="defaultInline3"><h5>Onion</h5></label>
                        </div>

                        <div class="custom-control custom-checkbox custom-control-inline">
                          <input type="checkbox" value="Eggs" class="custom-control-input" id="defaultInline4" v-model="checkedNames">
                          <label class="custom-control-label" for="defaultInline4"><h5>Eggs</h5></label>
                        </div>

                        <div class="custom-control custom-checkbox custom-control-inline">
                          <input type="checkbox" value="Cheese" class="custom-control-input" id="defaultInline5" v-model="checkedNames">
                          <label class="custom-control-label" for="defaultInline5"><h5>Cheese</h5></label>
                        </div>

                        <div class="custom-control custom-checkbox custom-control-inline">
                          <input type="checkbox" value="Milk" class="custom-control-input" id="defaultInline6" v-model="checkedNames">
                          <label class="custom-control-label" for="defaultInline6"><h5>Milk</h5></label>
                        </div>

                        <div class="custom-control custom-checkbox custom-control-inline">
                          <input type="checkbox" value="Chicken" class="custom-control-input" id="defaultInline7" v-model="checkedNames">
                          <label class="custom-control-label" for="defaultInline7"><h5>Chicken</h5></label>
                        </div>

                        {{checkedNames}}
                    </section>
                  </div>
              </section>
        </div>
        <!-- ##### Footer Area Start ##### -->
        <footer class="footer-area">
            <div class="container h-100">
                <div class="row h-100">
                    <div class="col-12 h-100 d-flex flex-wrap align-items-center justify-content-between">
                        <!-- Footer Info -->
                        <div> <h5>Copyright by Crunchroom 2018. All rights reserved.</h5>                    </div>
                        <!-- Footer Logo -->
                      <!-- <div class="footer-logo">
                            <a href="index.html"><img src="img/core-img/logor.png" alt=""></a>-->
                        </div>
                    </div>
                </div>
        </footer>
        <!-- ##### Footer Area Start ##### -->

        <!-- ##### All Javascript Files ##### -->
        <!-- jQuery-2.2.4 js -->
    </body>
          <div>
                  <div v-show="inserted==false">
                    <ul class="app-inputs">
                        <div class="app-input-group">
                            <input class="foodItem" type="text" v-model="foodItem" placeholder="Food item" id="app-input0">
                            <span class="app-icon app-add glyphicon glyphicon-plus"  @click="addFoodItem"></span>
                        </div>
                        <li v-for="(item, index) in extraFoodItems" :key="item.id">
                            <div class="app-input-group">number
                                <input class="extraFoodItem" type="text" placeholder="Food item" v-model="item.name" v-bind:id="'app-input'+item.id">
                                <span class="app-icon app-remove glyphicon glyphicon-minus" @click="deleteRow(index)"></span>
                            </div>
                        </li>
                    </ul>
                    <button class="app-large-btn btn btn-primary" @click="confirm">CONFIRM</button>
                  </div>





                  <div v-show="inserted==true && recipeChosen==false">
                    <li v-for="(item, index) in foodItems" :key="item.id">
                            <div class="boxed"> {{item.name}}</div>
                            <button @click="chooseRecipe">Choose</button>
                    </li>
                  </div>






                  <div class="filledForm" v-show="inserted==true && recipeChosen==true"></div>
            </div>
      </div>
      <div v-show="this.recipes.length > 0 && inserted==true && recipeChosen==false">
          <head>

            <!-- Title -->
            <title>Crunchroom - Suggested recipes</title>

            <!-- Favicon -->
            <link rel="icon" href="../../../static/favicon.ico">

            <!-- Core Stylesheet -->
            <link rel="stylesheet" href="style.css">

        </head>

        <body>

        <!-- ##### Header Area Start ##### -->
            <header class="header-area">

                    <!-- Top Header Area -->
                    <div class="top-header-area">
                        <div class="container h-100">
                            <div class="row h-100 align-items-center justify-content-between">
                                <!-- Breaking News -->
                                <div class="col-12 col-sm-6">
                                    <div class="breaking-news">
                                        <div id="breakingNewsTicker" class="ticker">
                                            <ul>
                                                <li><a href="#">Crunchroom</a></li>
                                                <li><a href="#">The best recipes are here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                                      
                </header>
                <!-- ##### Header Area End ##### -->

                <!-- ##### About Area Start ##### -->
                <section class="about-area section-padding-80">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="section-heading">
                                    <h3>Here are our suggested recipes:</h3>
                                </div>
                            </div>
                        </div>

                        <div v-if="this.recipes[0]" class="row align-items-center mt-70">
                            <!-- Single Cool Fact -->
                            <div class="col-12 col-sm-6 col-lg-3">
                                <div class="single-cool-fact">
                                    <img src="../../../static/images/core-img/chicken.jpg" alt="">
                                    <h6>{{this.recipes[0].recipe}}</h6>
                                
                                </div>
                            </div>

                            <!-- Single Cool Fact -->
                            <div v-if="this.recipes[1]" class="col-12 col-sm-6 col-lg-3">
                                <div class="single-cool-fact">
                                    <img src="../../../static/images/core-img/burger.jpg" alt="">
                                    <h6>{{this.recipes[1].recipe}}</h6>
                                </div>
                            </div>

                            <!-- Single Cool Fact -->
                            <div v-if="this.recipes[2]" class="col-12 col-sm-6 col-lg-3">
                                <div class="single-cool-fact">
                                    <img src="../../../static/images/core-img/potato.jpg" alt="">
                                    <h6>{{this.recipes[2].recipe}}</h6>
                                </div>
                            </div>

                            <!-- Single Cool Fact -->
                            <div v-if="this.recipes[3]" class="col-12 col-sm-6 col-lg-3">
                                <div class="single-cool-fact">
                                    <img src="../../../static/images/core-img/pancake.jpg" alt="">
                                    <h6>{{this.recipes[3].recipe}}</h6>
                                </div>
                            </div>
                        </div>
                  </div>
              </section>
        </body>
      </div>
  </div>

</template>

<style scoped>
  a {
    color: #AA9080;
    background-color: #2020AA;
  }
</style>

<script src="js/jquery/jquery-2.2.4.min.js"></script>
    <!-- Popper js -->
    <script src="js/bootstrap/popper.min.js"></script>
    <!-- Bootstrap js -->
    <script src="js/bootstrap/bootstrap.min.js"></script>
    <!-- All Plugins js -->
    <script src="js/plugins/plugins.js"></script>
    <!-- Active js -->
    <script src="js/active.js"></script>

<script>
import axios from "axios";

  export default {
    data () {
      return {
        foodItem: '',
        recipes: [],
        count: 0,
        extraFoodItems: [],
        foodItems: [],
        inserted: false,
        recipeChosen: false,
        checkedNames: []
      }
    },
    methods: {
      addFoodItem: function() {
        //let new_id = this.foodItems.length + 1
        this.extraFoodItems.push({
          name: ''
        }); 
      },
      deleteRow: function (index) {
          this.extraFoodItems.splice(index, 1);
      },
      confirm: function() {
        console.log("wat");
        this.foodItems.push({name: this.foodItem})
        for (let i = 0; i < this.extraFoodItems.length; i++){
          this.foodItems.push({name: this.extraFoodItems[i].name})
        }
        console.log(this.foodItems);
        axios.post("/api/request", {
                        items: this.foodItems,
                    })
                    .then(response => {
                      console.log(response.data[0])
                      for (let j = 0; j < response.data[0].length; j++) {
                        this.recipes.push({recipe: response.data[0][j].recipe.name, method: response.data[0][j].recipe.method, id: response.data[0][j].recipe.id});
                      }
                      this.inserted = true;      
                    }).catch(error => {
                      console.log(error);
                    });

      },
      getRecipies: function() {
        console.log("pppp");
        let allItems = []
        axios.get("api/items")
          .then(response => {
            allItems = response.items;
          }).catch(error => {
            console.log(error);
          })
        this.foodItems.push({name: this.foodItem, count: this.count})
        for (let i = 0; i < this.extraFoodItems.length; i++){
          this.foodItems.push({name: this.extraFoodItems[i].name, count: this.extraFoodItems[i].count})
        }
        this.inserted = true;
        console.log(this.foodItems);
        axios.post("/api/request", {
                        items: this.foodItems,
                    })
                    .then(response => {
                                //axios.get("api/recipies", {
                                //  params: {
//
 //                                 }
 //                               })
 //                                 .then(response => )
                            }).catch(error => {
                                console.log(error);
                            });
      },
      chooseRecipe: function() {
        this.recipeChosen == true;

      }
    }
  }
</script>

<style>

@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i");
/* :: 2.0 Import All CSS */
@import url(css/bootstrap.min.css);
@import url(css/owl.carousel.min.css);
@import url(css/animate.css);
@import url(css/magnific-popup.css);
@import url(css/font-awesome.min.css);
@import url(css/custom-icon.css);
@import url(css/classy-nav.min.css);
@import url(css/nice-select.min.css);
/* :: 3.0 Base CSS */
* {
  margin: 0;
  padding: 0; }

body {
  font-family: "Open Sans", sans-serif;
  font-size: 14px; }

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #000000;
  line-height: 1.3;
  font-weight: 600; }

p {
  color: #9b9b9b;
  font-size: 14px;
  line-height: 2;
  font-weight: 400; }

a,
a:hover,
a:focus {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  text-decoration: none;
  outline: 0 solid transparent;
  color: #000000;
  font-weight: 600;
  font-size: 14px;
  color: #474747; }

ul,
ol {
  margin: 0; }
  ul li,
  ol li {
    list-style: none; }

img {
  height: auto;
  max-width: 100%; }

/* Spacing */
.mt-15 {
  margin-top: 15px !important; }

.mt-30 {
  margin-top: 30px !important; }

.mt-50 {
  margin-top: 50px !important; }

.mt-70 {
  margin-top: 70px !important; }

.mt-100 {
  margin-top: 100px !important; }

.mb-15 {
  margin-bottom: 15px !important; }

.mb-30 {
  margin-bottom: 30px !important; }

.mb-50 {
  margin-bottom: 50px !important; }

.mb-70 {
  margin-bottom: 70px !important; }

.mb-80 {
  margin-bottom: 80px !important; }

.mb-100 {
  margin-bottom: 100px !important; }

.ml-15 {
  margin-left: 15px !important; }

.ml-30 {
  margin-left: 30px !important; }

.ml-50 {
  margin-left: 50px !important; }

.mr-15 {
  margin-right: 15px !important; }

.mr-30 {
  margin-right: 30px !important; }

.mr-50 {
  margin-right: 50px !important; }

/* Height */
.height-400 {
  height: 400px !important; }

.height-500 {
  height: 500px !important; }

.height-600 {
  height: 600px !important; }

.height-700 {
  height: 700px !important; }

.height-800 {
  height: 800px !important; }

/* Section Padding */
.section-padding-80 {
  padding-top: 80px;
  padding-bottom: 80px; }

.section-padding-80-0 {
  padding-top: 80px;
  padding-bottom: 0; }

.section-padding-0-80 {
  padding-top: 0;
  padding-bottom: 80px; }

  input[type=text] {
  width: 130px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}

/* When the input field gets focus, change its width to 100% */
input[type=text]:focus {
  width: 100%;
}

/* Section Heading */
.section-heading {
  position: relative;
  z-index: 1;
  margin-bottom: 80px;
  color: #474747;
  text-align: center; }
  .section-heading h3 {
    font-size: 30px;
    color: #474747;
    margin-bottom: 0; }
  .section-heading.text-left {
    text-align: left !important; }
  .section-heading.white h3 {
    color: #ffffff; }

/* Preloader 
#preloader {
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5000; }
  #preloader img {
    width: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 10; }
  #preloader .circle-preloader {
    display: block;
    width: 60px;
    height: 60px;
    border: 2px solid #ccc;
    border-bottom-color: #1c8314;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    animation: spin 1s infinite linear; }
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg); } }
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg); } }*/

/* Miscellaneous */
.bg-img {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat; }

.bg-white {
  background-color: #ffffff !important; }

.bg-dark {
  background-color: #000000 !important; }

.bg-transparent {
  background-color: transparent !important; }

.font-bold {
  font-weight: 700; }

.font-light {
  font-weight: 300; }

.bg-overlay {
  position: relative;
  z-index: 2;
  background-position: center center;
  background-size: cover; }
  .bg-overlay::after {
    background-color: rgba(10, 12, 18, 0.55);
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: ""; }

.mfp-image-holder .mfp-close,
.mfp-iframe-holder .mfp-close {
  color: #ffffff;
  right: 0;
  padding-right: 0;
  width: 30px;
  height: 30px;
  background-color: #40ba37;
  line-height: 30px;
  text-align: center;
  position: absolute;
  top: 0;
  right: -30px; }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .mfp-image-holder .mfp-close,
    .mfp-iframe-holder .mfp-close {
      right: 0; } }
  @media only screen and (max-width: 767px) {
    .mfp-image-holder .mfp-close,
    .mfp-iframe-holder .mfp-close {
      right: 0; } }

input:focus,
textarea:focus {
  outline: none;
  box-shadow: none;
  border-color: transparent; }

.nice-select {
  border: none;
  background-color: #f3f5f8;
  border-radius: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: #2f2f2f; }
  .nice-select span {
    color: #2f2f2f; }
  .nice-select::after {
    right: 20px; }
  .nice-select .list {
    background-color: #ffffff;
    border: none;
    border-radius: 0;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
    margin-top: 0;
    width: 100%; }

/* ScrollUp */
#scrollUp {
  background-color: #40ba37;
  border-radius: 0;
  bottom: 60px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
  color: #ffffff;
  font-size: 24px;
  height: 40px;
  line-height: 38px;
  right: 60px;
  text-align: center;
  width: 40px;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms; }
  #scrollUp:hover {
    background-color: #141414; }
  @media only screen and (max-width: 767px) {
    #scrollUp {
      bottom: 30px;
      right: 30px; } }

/* Button */
.delicious-btn {
  display: inline-block;
  min-width: 160px;
  height: 60px;
  color: #ffffff;
  border: none;
  border-left: 3px solid #1c8314;
  border-radius: 0;
  padding: 0 30px;
  font-size: 16px;
  line-height: 58px;
  font-weight: 600;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  text-transform: capitalize;
  background-color: #40ba37; }
  .delicious-btn.active, .delicious-btn:hover, .delicious-btn:focus {
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    position: relative;
    background-color: #1c8314;
    border-color: #40ba37; }
  .delicious-btn.btn-2 {
    background-color: #1c8314;
    border-color: #40ba37; }
    .delicious-btn.btn-2.active, .delicious-btn.btn-2:hover, .delicious-btn.btn-2:focus {
      background-color: #40ba37;
      border-color: #1c8314; }
  .delicious-btn.btn-3 {
    background-color: #474747;
    border-color: #1c8314; }
    .delicious-btn.btn-3.active, .delicious-btn.btn-3:hover, .delicious-btn.btn-3:focus {
      background-color: #40ba37;
      border-color: #1c8314; }
  .delicious-btn.btn-4 {
    background-color: transparent;
    border: 3px solid #40ba37;
    line-height: 53px;
    color: #40ba37; }
    @media only screen and (max-width: 767px) {
      .delicious-btn.btn-4 {
        height: 40px;
        line-height: 33px; } }
    .delicious-btn.btn-4.active, .delicious-btn.btn-4:hover, .delicious-btn.btn-4:focus {
      line-height: 53px;
      color: #ffffff;
      background-color: #40ba37; }
      @media only screen and (max-width: 767px) {
        .delicious-btn.btn-4.active, .delicious-btn.btn-4:hover, .delicious-btn.btn-4:focus {
          height: 40px;
          line-height: 33px; } }
  @media only screen and (max-width: 767px) {
    .delicious-btn {
      height: 40px;
      line-height: 39px; } }


/* :: 5.0 Header Area CSS */
.header-area {
  position: relative;
  z-index: 100;
  width: 100%; }
  .header-area .top-header-area {
    width: 100%;
    height: 50px;
    background-color: #ffffff;
    border-bottom: 1px solid #dddee9; }
    @media only screen and (max-width: 767px) {
      .header-area .top-header-area {
        height: 70px; } }
    .header-area .top-header-area .breaking-news {
      position: relative;
      z-index: 1; }
      .header-area .top-header-area .breaking-news .ticker {
        width: 100%;
        text-align: left;
        position: relative;
        overflow: hidden; }
        .header-area .top-header-area .breaking-news .ticker ul {
          width: 100%;
          position: relative;
          z-index: 1; }
          .header-area .top-header-area .breaking-news .ticker ul li {
            display: none;
            width: 100%; }
            .header-area .top-header-area .breaking-news .ticker ul li a {
              font-size: 14px;
              color: #b6b6b6;
              font-style: italic; }
              .header-area .top-header-area .breaking-news .ticker ul li a:hover, .header-area .top-header-area .breaking-news .ticker ul li a:focus {
                color: #40ba37; }
    
  .header-area .delicious-main-menu {
    position: relative;
    width: 100%;
    z-index: 100;
    height: 145px; }
    @media only screen and (max-width: 767px) {
      .header-area .delicious-main-menu {
        height: 80px; } }
    .header-area .delicious-main-menu .classy-nav-container {
      background-color: transparent; }
    .header-area .delicious-main-menu .classy-navbar {
      height: 145px;
      padding: 0; }
      @media only screen and (max-width: 767px) {
        .header-area .delicious-main-menu .classy-navbar {
          height: 80px; } }
      .header-area .delicious-main-menu .classy-navbar .classynav ul li a {
        font-weight: 600; }
        .header-area .delicious-main-menu .classy-navbar .classynav ul li a:hover, .header-area .delicious-main-menu .classy-navbar .classynav ul li a:focus {
          font-weight: 600; }
      .header-area .delicious-main-menu .classy-navbar .classynav > ul > li > a {
        text-transform: uppercase;
        padding: 12px 18px 11px;
        background-color: transparent;
        border-bottom: 3px solid transparent;
        line-height: 1;
        color: #474747;
        font-weight: 600; }
        .header-area .delicious-main-menu .classy-navbar .classynav > ul > li > a:hover, .header-area .delicious-main-menu .classy-navbar .classynav > ul > li > a:focus {
          font-size: 14px;
          color: #ffffff;
          background-color: #40ba37;
          border-bottom: 3px solid #1c8314; }
          .header-area .delicious-main-menu .classy-navbar .classynav > ul > li > a:hover::after, .header-area .delicious-main-menu .classy-navbar .classynav > ul > li > a:focus::after {
            color: #ffffff; }
      .header-area .delicious-main-menu .classy-navbar .classynav > ul > li.active > a {
        color: #ffffff;
        background-color: #40ba37;
        border-bottom: 3px solid #1c8314; }
        .header-area .delicious-main-menu .classy-navbar .classynav > ul > li.active > a::after {
          color: #ffffff; }
    .header-area .delicious-main-menu .classynav .search-btn {
      color: #b6b6b6;
      margin-left: 150px;
      cursor: pointer;
      -webkit-transition-duration: 500ms;
      transition-duration: 500ms; }
      .header-area .delicious-main-menu .classynav .search-btn i {
        -webkit-transition-duration: 500ms;
        transition-duration: 500ms; }
      .header-area .delicious-main-menu .classynav .search-btn:hover i, .header-area .delicious-main-menu .classynav .search-btn:focus i {
        color: #40ba37; }
      @media only screen and (min-width: 992px) and (max-width: 1199px) {
        .header-area .delicious-main-menu .classynav .search-btn {
          margin-left: 50px; } }
      @media only screen and (min-width: 768px) and (max-width: 991px) {
        .header-area .delicious-main-menu .classynav .search-btn {
          margin-left: 30px;
          margin-top: 30px; } }
      @media only screen and (max-width: 767px) {
        .header-area .delicious-main-menu .classynav .search-btn {
          margin-left: 30px;
          margin-top: 30px; } }
  @media only screen and (max-width: 767px) {
    .header-area .nav-brand img {
      max-width: 90px; } }

/* :: 6.0 Welcome Area CSS */
.hero-area {
  position: relative;
  z-index: 1;
  margin-left: 4%;
  margin-right: 4%; }

.hero-slides {
  position: relative;
  z-index: 1; }
  .hero-slides .single-hero-slide {
    width: 100%;
    height: 820px;
    position: relative;
    z-index: 1; }
    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      .hero-slides .single-hero-slide {
        height: 650px; } }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      .hero-slides .single-hero-slide {
        height: 650px; } }
    @media only screen and (max-width: 767px) {
      .hero-slides .single-hero-slide {
        height: 650px; } }
    .hero-slides .single-hero-slide .hero-slides-content {
      position: relative;
      z-index: 1;
      padding: 60px 50px;
      background-color: rgba(24, 24, 24, 0.54); }
      @media only screen and (max-width: 767px) {
        .hero-slides .single-hero-slide .hero-slides-content {
          padding: 30px 20px; } }
      .hero-slides .single-hero-slide .hero-slides-content h2 {
        font-size: 30px;
        color: #ffffff;
        margin-bottom: 30px;
        font-weight: 600; }
        @media only screen and (max-width: 767px) {
          .hero-slides .single-hero-slide .hero-slides-content h2 {
            font-size: 24px; } }
      .hero-slides .single-hero-slide .hero-slides-content p {
        font-size: 16px;
        margin-bottom: 50px;
        color: #ffffff; }
  .hero-slides .owl-prev,
  .hero-slides .owl-next {
    background-color: transparent;
    width: 40px;
    height: 40px;
    line-height: 40px;
    color: #ffffff;
    top: 50%;
    margin-top: -20px;
    left: 4%;
    position: absolute;
    z-index: 10;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    opacity: 0;
    visibility: hidden;
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
    border-bottom: 3px solid #1c8314; }
    @media only screen and (max-width: 767px) {
      .hero-slides .owl-prev,
      .hero-slides .owl-next {
        font-size: 13px; } }
  .hero-slides .owl-next {
    left: auto;
    right: 4%; }
  .hero-slides:hover .owl-prev, .hero-slides:hover .owl-next {
    opacity: 1;
    visibility: visible; }
  .hero-slides .owl-dots {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    bottom: 50px;
    z-index: 10;
    width: 80%;
    left: 17%; }
    .hero-slides .owl-dots .owl-dot {
      font-size: 16px;
      font-weight: 600;
      color: #ffffff;
      margin-right: 10px; }
      .hero-slides .owl-dots .owl-dot.active {
        color: #1c8314; }

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .breakpoint-on .classynav ul li.cn-dropdown-item > a::after,
  .breakpoint-on .classynav ul li.megamenu-item > a::after {
    top: 10px; } }
@media only screen and (max-width: 767px) {
  .breakpoint-on .classynav ul li.cn-dropdown-item > a::after,
  .breakpoint-on .classynav ul li.megamenu-item > a::after {
    top: 10px; } }

/* :: 7.0 Top Catagory Area */
.single-top-catagory {
  position: relative;
  z-index: 2;
  margin-bottom: 80px;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  overflow: hidden; }
  .single-top-catagory img {
    width: 100%; }
  .single-top-catagory::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 5;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    background: -webkit-linear-gradient(to right, #000, rgba(0, 0, 0, 0.1));
    background: linear-gradient(to right, #000, rgba(0, 0, 0, 0.1)); }
  .single-top-catagory .top-cta-content {
    position: absolute;
    top: 50%;
    left: 40px;
    width: auto;
    height: auto;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: 10; }
    .single-top-catagory .top-cta-content h3 {
      font-size: 30px;
      color: #ffffff;
      font-weight: 600;
      margin-bottom: 5px; }
      @media only screen and (max-width: 767px) {
        .single-top-catagory .top-cta-content h3 {
          font-size: 18px; } }
    .single-top-catagory .top-cta-content h6 {
      color: #ffffff;
      margin-bottom: 30px;
      display: block;
      font-weight: 400; }
      @media only screen and (max-width: 767px) {
        .single-top-catagory .top-cta-content h6 {
          margin-bottom: 10px; } }



/* :: 15.0 Receipe Area */
.receipe-post-search {
  position: relative;
  z-index: 20; }
  .receipe-post-search form input {
    width: 100%;
    height: 60px;
    background-color: #f3f5f8;
    font-size: 14px;
    padding: 0 20px;
    border: none; }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .receipe-post-search .col-12 {
      margin-bottom: 30px; } }
  @media only screen and (max-width: 767px) {
    .receipe-post-search .col-12 {
      margin-bottom: 15px; } }

.receipe-slider {
  position: relative;
  z-index: 1; }
  .receipe-slider .owl-prev,
  .receipe-slider .owl-next {
    background-color: transparent;
    width: 40px;
    height: 40px;
    line-height: 40px;
    color: #ffffff;
    top: 50%;
    margin-top: -20px;
    left: 4%;
    position: absolute;
    z-index: 10;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    opacity: 0;
    visibility: hidden;
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
    border-bottom: 3px solid #1c8314; }
    @media only screen and (max-width: 767px) {
      .receipe-slider .owl-prev,
      .receipe-slider .owl-next {
        font-size: 14px; } }
  .receipe-slider .owl-next {
    left: auto;
    right: 4%; }
  .receipe-slider:hover .owl-prev, .receipe-slider:hover .owl-next {
    opacity: 1;
    visibility: visible; }

.receipe-headline span {
  font-size: 14px;
  display: block;
  color: #a4a4a4;
  margin-bottom: 0; }
.receipe-headline h2 {
  font-size: 36px;
  color: #474747;
  margin-bottom: 30px; }
  @media only screen and (max-width: 767px) {
    .receipe-headline h2 {
      font-size: 24px; } }
.receipe-headline .receipe-duration {
  border-left: 3px solid #40ba37;
  padding: 15px; }
  .receipe-headline .receipe-duration h6 {
    font-size: 15px;
    margin-bottom: 5px; }
    .receipe-headline .receipe-duration h6:last-child {
      margin-bottom: 0; }

.receipe-ratings .ratings {
  margin-bottom: 30px; }
.receipe-ratings i {
  font-size: 18px;
  color: #fbb710;
  padding: 0 3px; }

.single-preparation-step {
  position: relative;
  z-index: 1;
  margin-bottom: 50px; }
  .single-preparation-step h4 {
    color: #474747;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 60px;
    flex: 0 0 60px;
    max-width: 60px;
    width: 60px;
    margin-bottom: 0; }

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .ingredients {
    margin-bottom: 80px; } }
@media only screen and (max-width: 767px) {
  .ingredients {
    margin-bottom: 80px; } }
.ingredients h4 {
  color: #474747;
  margin-bottom: 30px; }
.ingredients .custom-checkbox .custom-control-label::before {
  border-radius: 0; }
.ingredients .custom-control-label::before {
  width: 30px;
  height: 30px;
  background-color: #f3f5f8; }
.ingredients .custom-control {
  padding-left: 2.5rem;
  margin-bottom: 30px;
  min-height: 35px; }
.ingredients .custom-control-label {
  margin-bottom: 0;
  padding-top: 5px;
  font-size: 16px;
  font-weight: 600;
  color: #2f2f2f; }
.ingredients .custom-control-label::after {
  top: 10px;
  left: 5px;
  width: 20px;
  height: 20px; }
.ingredients .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #40ba37; }

/* :: 16.0 Footer Area CSS */
.footer-area {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 140px;
  background-color: #ffffff; }
  @media only screen and (max-width: 767px) {
    .footer-area {
      height: 150px;
      border-top: 1px solid #ebebeb;
      margin-top: 30px; } }
    .footer-area p {
    color: #4b4b4b;
    font-weight: 600;
    margin-bottom: 0;
    padding-left: 15px; }
    @media only screen and (max-width: 767px) {
      .footer-area p {
        padding-left: 0; } }
    .footer-area p a {
      color: #4b4b4b;
      font-weight: 600; }
      .footer-area p a:hover, .footer-area p a:focus {
        color: #40ba37; }
  @media only screen and (max-width: 767px) {
    .footer-area .footer-logo {
      max-width: 90px; } }



/* :: 17.0 Breadcumb Area CSS */
.breadcumb-area {
  position: relative;
  z-index: 10;
  width: 92%;
  height: 190px;
  margin-left: 4%;
  margin-right: 4%; }
  @media only screen and (max-width: 767px) {
    .breadcumb-area {
      height: 120px; } }
  .breadcumb-area .breadcumb-text h2 {
    font-size: 30px;
    margin-bottom: 0;
    color: #ffffff; }
    @media only screen and (max-width: 767px) {
      .breadcumb-area .breadcumb-text h2 {
        font-size: 24px; } }

/* About Us Area */
.sub-heading {
  line-height: 2;
  font-size: 18px;
  text-align: center; }

/* :: 18.0 Contact Area CSS */
.map-area {
  position: relative;
  z-index: 2; }
  .map-area #googleMap {
    width: 100%;
    height: 680px; }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      .map-area #googleMap {
        height: 500px; } }
    @media only screen and (max-width: 767px) {
      .map-area #googleMap {
        height: 350px; } }

.single-contact-information {
  position: relative;
  z-index: 1; }
  .single-contact-information h6 {
    font-size: 14px;
    border-bottom: 2px solid #40ba37;
    display: inline-block;
    color: #40ba37; }

.contact-form-area .form-control {
  height: 52px;
  width: 100%;
  background-color: #f3f5f8;
  font-size: 12px;
  font-style: italic;
  margin-bottom: 15px;
  border: none;
  border-left: 3px solid #f3f5f8;
  border-radius: 0;
  padding: 15px 30px;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms; }
  .contact-form-area .form-control:focus {
    border-left: 3px solid #40ba37;
    box-shadow: none; }
.contact-form-area textarea.form-control {
  height: 200px;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms; }

/* :: 19.0 Elements Area CSS */
.elements-title h2 {
  font-size: 30px;
  margin-bottom: 70px;
  color: #4b4b4b; }

.single-pie-bar h6 {
  font-size: 18px;
  margin-bottom: 0; }

.single-cool-fact {
  position: relative;
  text-align: center;
  z-index: 1;
  margin-bottom: 80px; }
  .single-cool-fact img {
    display: block;
    margin: 0 auto 10px; }
  .single-cool-fact h3 {
    font-size: 48px;
    margin-bottom: 10px;
    color: #40ba37;
    font-weight: 700; }
  .single-cool-fact h6 {
    font-size: 18px;
    margin-bottom: 0; }

/* Accordians */
.single-accordion.panel {
  background-color: #ffffff;
  border: 0 solid transparent;
  border-radius: 4px;
  box-shadow: 0 0 0 transparent;
  margin-bottom: 15px; }
.single-accordion:last-of-type {
  margin-bottom: 0; }
.single-accordion h6 {
  margin-bottom: 0;
  text-transform: uppercase; }
  .single-accordion h6 a {
    border-radius: 0;
    background-color: #40ba37;
    color: #ffffff;
    border-left: 3px solid #1c8314;
    display: block;
    margin: 0;
    padding: 20px 60px 20px 20px;
    position: relative;
    font-size: 14px;
    text-transform: capitalize;
    font-weight: 600; }
    .single-accordion h6 a span {
      font-size: 10px;
      position: absolute;
      right: 20px;
      text-align: center;
      top: 23px; }
      .single-accordion h6 a span.accor-open {
        opacity: 0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        filter: alpha(opacity=0); }
    .single-accordion h6 a.collapsed {
      background-color: #f3f5f8;
      color: #9b9b9b;
      border-left: 3px solid #40ba37; }
      .single-accordion h6 a.collapsed span.accor-close {
        opacity: 0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        filter: alpha(opacity=0); }
      .single-accordion h6 a.collapsed span.accor-open {
        opacity: 1;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
        filter: alpha(opacity=100); }
.single-accordion .accordion-content {
  border-top: 0 solid transparent;
  box-shadow: none; }
  .single-accordion .accordion-content p {
    padding: 20px 15px 5px;
    margin-bottom: 0; }

/* Tabs CSS*/
.delicious-tabs-content {
  position: relative;
  z-index: 1; }
  .delicious-tabs-content .nav-tabs {
    border-bottom: none;
    margin-bottom: 50px; }
    .delicious-tabs-content .nav-tabs .nav-link {
      background-color: #f3f5f8;
      color: #9b9b9b;
      border: none;
      border-left: 3px solid #40ba37;
      padding: 0 15px;
      height: 50px;
      line-height: 50px;
      margin: 0 2px;
      border-radius: 0;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 5px; }
      @media only screen and (min-width: 992px) and (max-width: 1199px) {
        .delicious-tabs-content .nav-tabs .nav-link {
          padding: 0 10px; } }
      @media only screen and (max-width: 767px) {
        .delicious-tabs-content .nav-tabs .nav-link {
          padding: 0 10px; } }
      .delicious-tabs-content .nav-tabs .nav-link.active {
        background-color: #40ba37;
        color: #ffffff;
        border-left: 3px solid #1c8314; }
  .delicious-tabs-content .tab-content h6 {
    font-size: 18px; }

/* Features Area */
.single-feature-area {
  position: relative;
  z-index: 1; }
  .single-feature-area h5 {
    margin-bottom: 0;
    padding-left: 30px; }

  .app-inputs {
        list-style: none;
        padding-left: 0;
  }

  .app-content {
        position: relative;
    }

    .app-input-group {
        position: relative;
        margin-bottom: 0.3em;
    }

  .app-icon {
        cursor: pointer;
  }


  .app-remove {
        color:firebrick;
        margin-left: 30px;
        right: 0.5em;
    }

    .app-add {
        color:dodgerblue; 
        margin-left: 30px;
        right: 0.5em;
    }

    .boxed {
      border: 1px solid green ;
      background-color: #cfc;
      border-radius: 5px;
    }

    .bg-img {
      background-image: url("../static/images/bg-img/bg7.jpg");
    }

</style>