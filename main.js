$(function(){
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDTGBiPzYHLOYiSVsmB8pCuRIuO0CkXVEo",
      authDomain: "andys-bday.firebaseapp.com",
      databaseURL: "https://andys-bday.firebaseio.com",
      storageBucket: "andys-bday.appspot.com",
      messagingSenderId: "795875359618"
    };
    firebase.initializeApp(config);

    var database = firebase.database().ref();
    var dishes = firebase.database().ref('Dishes');
    var meals = firebase.database().ref('Meals');

    var meals;
    var dishes;

    dishes.on('value', function(snapshot){
        var data = snapshot.val();
        var dish_num = $('#dish_num');
        dish_num.empty();
        dishes = data;
        dish_num.append(data);

    });

    meals.on('value', function(snapshot){
        var data = snapshot.val();
        var meal_num = $('#meal_num');
        meals = data;
        meal_num.empty();
        meal_num.append(data);
    });


    $('#meal_btn').on('click', function(){
      event.preventDefault();
      alert('You have used a Meal Token. Please notify Daniel of the meal that you want via Text');
      console.log(meals);
      database.child('Meals').set(meals - 1);
    })

    $('#dish_btn').on('click', function(){
      event.preventDefault();
      alert('You have used a Dish Token. Daniel will complete the dishes upon returning.')
      console.log(dishes);
      database.child('Dishes').set(dishes - 1);
    })
});
