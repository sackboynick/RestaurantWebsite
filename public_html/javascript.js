$(function() {
  $("#danishIconIndex").click(function() {
    indexToDanish();
  });
});

$(function() {
  $("#englishIconIndex").click(function() {
    indexToEng();
  });
});

$(function() {
  $("#danishIconBeveragesMenu").click(function() {
    BeverageMenuToDanish();
  });
});

$(function() {
  $("#englishIconBeveragesMenu").click(function() {
    BeverageMenuToEng();
  });
});

$(function() {
  $("#danishIconDessertsMenu").click(function() {
    DessertsMenuToDanish();
  });
});

$(function() {
  $("#englishIconDessertsMenu").click(function() {
    DessertsMenuToEng();
  });
});

$(function() {
  $("#danishIconFeedbacks").click(function() {
    FeedbacksToDanish();
  });
});

$(function() {
  $("#englishIconFeedbacks").click(function() {
    FeedbacksToEng();
  });
});

$(function() {
  $("#danishIconFindUs").click(function() {
    FindUsToDanish();
  });
});

$(function() {
  $("#englishIconFindUs").click(function() {
    FindUsToEng();
  });
});

$(function() {
  $("#danishIconMainDishesMenu").click(function() {
    MainDishesMenuToDanish();
  });
});

$(function() {
  $("#englishIconMainDishesMenu").click(function() {
    MainDishesMenuToEng();
  });
});
$(function() {
  $("#danishIconMenu").click(function() {
    MenuToDanish();
  });
});

$(function() {
  $("#englishIconMenu").click(function() {
    MenuToEng();
  });
});

$(function() {
  $("#danishIconMenuAppetizers").click(function() {
    MenuAppetizersToDanish();
  });
});

$(function() {
  $("#englishIconMenuAppetizers").click(function() {
    MenuAppetizersToEng();
  });
});
$(function() {
  $("#danishIconMenuPasta").click(function() {
    MenuPastaToDanish();
  });
});

$(function() {
  $("#englishIconMenuPasta").click(function() {
    MenuPastaToEng();
  });
});

$(function() {
  $("#danishIconOfUs").click(function() {
    OfUsToDanish();
  });
});

$(function() {
  $("#englishIconOfUs").click(function() {
    OfUsToEng();
  });
});

$(function() {
  $("#danishIconSecondDishesMenu").click(function() {
    SecondDishesMenuToDanish();
  });
});

$(function() {
  $("#englishIconSecondDishesMenu").click(function() {
    SecondDishesMenuToEng();
  });
});


function getLanguage() {
  return parseInt(document.cookie.charAt(5));
}


function startIndex() {
  if (getLanguage() == 0) {
    indexToDanish();
  } else if (getLanguage() == 1) {
    indexToEng();
  }
}

function startBeveragesMenu() {
  if (getLanguage() == 0) {
    BeverageMenuToDanish();
  } else if (getLanguage() == 1) {
    BeverageMenuToEng();
  }
}

function startDessertsMenu() {
  if (getLanguage() == 0) {
    DessertsMenuToDanish();
  } else if (getLanguage() == 1) {
    DessertsMenuToEng();
  }
}

function startFeedbacks() {
  if (getLanguage() == 0) {
    FeedbacksToDanish();
  } else if (getLanguage() == 1) {
    FeedbacksToEng();
  }
}

function startFindUS() {
  if (getLanguage() == 0) {
    FindUsToDanish();
  } else if (getLanguage() == 1) {
    FindUsToEng();
  }
}

function startMainDishesMenu() {
  if (getLanguage() == 0) {
MainDishesMenuToDanish();
  } else if (getLanguage() == 1) {
MainDishesMenuToEng();
  }
}

function startMenu() {
  if (getLanguage() == 0) {
    MenuToDanish();
  } else if (getLanguage() == 1) {
    MenuToEng();
  }
}

function startMenuAppetizers() {
  if (getLanguage() == 0) {
    MenuAppetizersToDanish();
  } else if (getLanguage() == 1) {
    MenuAppetizersToEng();
  }
}

function startMenuPasta() {
  if (getLanguage() == 0) {
    MenuPastaToDanish();
  } else if (getLanguage() == 1) {
    MenuPastaToEng();
  }
}

function startOfUs() {
  if (getLanguage() == 0) {
    OfUsToDanish();
  } else if (getLanguage() == 1) {
    OfUsToEng();
  }
}

function startSecondDishes() {
  if (getLanguage() == 0) {
    SecondDishesMenuToDanish();
  } else if (getLanguage() == 1) {
    SecondDishesMenuToEng();
  }
}




function indexToEng() {
  document.cookie = "lang=1;SameSite=Lax";

  /*ALL*/
  document.getElementById("feedbacksLink").innerHTML = "FEEDBACKS";
  document.getElementById("ofUsLink").innerHTML = "ABOUT US";
  document.getElementById("findUsLink").innerHTML = "FIND US";
  document.getElementById("footerContent").innerHTML = "Footer Content(English)";
  document.getElementById("footerParagraph").innerHTML = "Footer Paragraph(English)";
  document.getElementById("contactUsLink").innerHTML = "Contact us";
  document.getElementById("report").innerHTML = "See inspection reports";
  document.getElementById("restaurantLink").innerHTML = "Restaurant";



  /*INDEX*/
  document.getElementById("presentationTextSpan").innerHTML = "(English)Website features:<br>-Completely responsive and adaptable to every browser size.<br>-Available languages are Danish and English, but any other language can be added.<br>-Most useful links are clear and visible.";
  document.getElementById("monday").innerHTML = "Monday";
  document.getElementById("tuesday").innerHTML = "Monday";
  document.getElementById("wednesday").innerHTML = "Wednesday";
  document.getElementById("thursday").innerHTML = "Thursday";
  document.getElementById("friday").innerHTML = "Friday";
  document.getElementById("saturday").innerHTML = "Saturday";
  document.getElementById("sunday").innerHTML = "Sunday";
}

function FeedbacksToEng(){
  document.cookie = "lang=1;SameSite=Lax";

  /*ALL*/
  document.getElementById("feedbacksLink").innerHTML = "FEEDBACKS";
  document.getElementById("ofUsLink").innerHTML = "ABOUT US";
  document.getElementById("findUsLink").innerHTML = "FIND US";
  document.getElementById("footerContent").innerHTML = "Footer Content(English)";
  document.getElementById("footerParagraph").innerHTML = "Footer Paragraph(English)";
  document.getElementById("contactUsLink").innerHTML = "Contact us";
  document.getElementById("report").innerHTML = "See inspection reports";
  document.getElementById("restaurantLink").innerHTML = "Restaurant";

  /*FEEDBACKS*/
  document.getElementById("presentationTextFeedback").innerHTML = "Our staff works hard every day to deliver high quality service and to please our customers' tastes.";
  document.getElementById("feedback1").innerHTML = "Posted on February 19, 2016";
  document.getElementById("feedbackBody1").innerHTML = "(English)Lorem ipsum...";
  document.getElementById("feedback2").innerHTML = "Posted on February 19, 2016";
  document.getElementById("feedbackBody2").innerHTML = "(English)Lorem ipsum...";
  document.getElementById("feedback3").innerHTML = "Posted on February 19, 2016";
  document.getElementById("feedbackBody3").innerHTML = "(English)Lorem ipsum...";

}

function FindUsToEng(){
  document.cookie = "lang=1;SameSite=Lax";

  /*ALL*/
  document.getElementById("feedbacksLink").innerHTML = "FEEDBACKS";
  document.getElementById("ofUsLink").innerHTML = "ABOUT US";
  document.getElementById("findUsLink").innerHTML = "FIND US";
  document.getElementById("footerContent").innerHTML = "Footer Content(English)";
  document.getElementById("footerParagraph").innerHTML = "Footer Paragraph(English)";
  document.getElementById("contactUsLink").innerHTML = "Contact us";
  document.getElementById("report").innerHTML = "See inspection reports";
  document.getElementById("restaurantLink").innerHTML = "Restaurant";

  /*FIND US*/
  document.getElementById("connect").innerHTML = "CONNECT";

}

function OfUsToEng(){
  document.cookie = "lang=1;SameSite=Lax";

  /*ALL*/
  document.getElementById("feedbacksLink").innerHTML = "FEEDBACKS";
  document.getElementById("ofUsLink").innerHTML = "ABOUT US";
  document.getElementById("findUsLink").innerHTML = "FIND US";
  document.getElementById("footerContent").innerHTML = "Footer Content(English)";
  document.getElementById("footerParagraph").innerHTML = "Footer Paragraph(English)";
  document.getElementById("contactUsLink").innerHTML = "Contact us";
  document.getElementById("report").innerHTML = "See inspection reports";
  document.getElementById("restaurantLink").innerHTML = "Restaurant";

  /*OF US*/
  document.getElementById("connect").innerHTML = "CONNECT";
  document.getElementById("cardOfUsTitle1").innerHTML = "Check our best feedbacks";
  document.getElementById("cardOfUsButton1").innerHTML = "See feedbacks";
  document.getElementById("cardOfUsTitle2").innerHTML = "Check our prelibate menu";
  document.getElementById("cardOfUsButton2").innerHTML = "See menu";
  document.getElementById("presentationOfUs").innerHTML = "(English)Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est atque cumque eum delectus sint!";

}

function MenuToEng() {
  document.cookie = "lang=1;SameSite=Lax";

  /*ALL*/
  document.getElementById("feedbacksLink").innerHTML = "FEEDBACKS";
  document.getElementById("ofUsLink").innerHTML = "ABOUT US";
  document.getElementById("findUsLink").innerHTML = "FIND US";
  document.getElementById("footerContent").innerHTML = "Footer Content(English)";
  document.getElementById("footerParagraph").innerHTML = "Footer Paragraph(English)";
  document.getElementById("contactUsLink").innerHTML = "Contact us";
  document.getElementById("report").innerHTML = "See inspection reports";
  document.getElementById("restaurantLink").innerHTML = "Restaurant";

  /*GENERIC MENU & MENU*/
  document.getElementById("appetizersCategory").innerHTML = "Appetizers";
  document.getElementById("pastaCategory").innerHTML = "Pasta";
  document.getElementById("mainDishesCategory").innerHTML = "Main Dishes";
  document.getElementById("secondDishesCategory").innerHTML = "Second Dishes";
  document.getElementById("dessertsCategory").innerHTML = "Desserts";
  document.getElementById("beveragesCategory").innerHTML = "Beverages";

  document.getElementById("titleMenu").src = "images/menuTitle.png";

}

function BeverageMenuToEng() {
  document.cookie = "lang=1;SameSite=Lax";

  /*ALL*/
  document.getElementById("feedbacksLink").innerHTML = "FEEDBACKS";
  document.getElementById("ofUsLink").innerHTML = "ABOUT US";
  document.getElementById("findUsLink").innerHTML = "FIND US";
  document.getElementById("footerContent").innerHTML = "Footer Content(English)";
  document.getElementById("footerParagraph").innerHTML = "Footer Paragraph(English)";
  document.getElementById("contactUsLink").innerHTML = "Contact us";
  document.getElementById("report").innerHTML = "See inspection reports";
  document.getElementById("restaurantLink").innerHTML = "Restaurant";

  /*GENERIC MENU & MENU*/
  document.getElementById("appetizersCategory").innerHTML = "Appetizers";
  document.getElementById("pastaCategory").innerHTML = "Pasta";
  document.getElementById("mainDishesCategory").innerHTML = "Main Dishes";
  document.getElementById("secondDishesCategory").innerHTML = "Second Dishes";
  document.getElementById("dessertsCategory").innerHTML = "Desserts";
  document.getElementById("beveragesCategory").innerHTML = "Beverages";

  /*BEVERAGES*/
  document.getElementById("beverage1Title").innerHTML = "Wine";
  document.getElementById("beverage1Text").innerHTML = "";
  document.getElementById("beverage2Title").innerHTML = "Wine";
  document.getElementById("beverage2Text").innerHTML = "";
  document.getElementById("beverage3Title").innerHTML = "Wine";
  document.getElementById("beverage3Text").innerHTML = "";
  document.getElementById("beverage4Title").innerHTML = "Wine";
  document.getElementById("beverage4Text").innerHTML = "";
}

function DessertsMenuToEng() {
  document.cookie = "lang=1;SameSite=Lax";

  /*ALL*/
  document.getElementById("feedbacksLink").innerHTML = "FEEDBACKS";
  document.getElementById("ofUsLink").innerHTML = "ABOUT US";
  document.getElementById("findUsLink").innerHTML = "FIND US";
  document.getElementById("footerContent").innerHTML = "Footer Content(English)";
  document.getElementById("footerParagraph").innerHTML = "Footer Paragraph(English)";
  document.getElementById("contactUsLink").innerHTML = "Contact us";
  document.getElementById("report").innerHTML = "See inspection reports";
  document.getElementById("restaurantLink").innerHTML = "Restaurant";

  /*GENERIC MENU & MENU*/
  document.getElementById("appetizersCategory").innerHTML = "Appetizers";
  document.getElementById("pastaCategory").innerHTML = "Pasta";
  document.getElementById("mainDishesCategory").innerHTML = "Main Dishes";
  document.getElementById("secondDishesCategory").innerHTML = "Second Dishes";
  document.getElementById("dessertsCategory").innerHTML = "Desserts";
  document.getElementById("beveragesCategory").innerHTML = "Beverages";

  /*DESSERTS*/
  document.getElementById("dessert1Title").innerHTML = "Créme caramel";
  document.getElementById("dessert1Text").innerHTML = "Créme caramel with fresh fruit.";
  document.getElementById("dessert2Title").innerHTML = "Mixed pastries";
  document.getElementById("dessert2Text").innerHTML = "A various assortment of pastries.";
  document.getElementById("dessert3Title").innerHTML = "Chocolate cake";
  document.getElementById("dessert3Text").innerHTML = "A piece of chocolate cake with blueburries.";
  document.getElementById("dessert4Title").innerHTML = "Fruit ice cream";
  document.getElementById("dessert4Text").innerHTML = "Strawberry, blueberry and vanilla ice cream.";

}

function MainDishesMenuToEng() {
  document.cookie = "lang=1;SameSite=Lax";

  /*ALL*/
  document.getElementById("feedbacksLink").innerHTML = "FEEDBACKS";
  document.getElementById("ofUsLink").innerHTML = "ABOUT US";
  document.getElementById("findUsLink").innerHTML = "FIND US";
  document.getElementById("footerContent").innerHTML = "Footer Content(English)";
  document.getElementById("footerParagraph").innerHTML = "Footer Paragraph(English)";
  document.getElementById("contactUsLink").innerHTML = "Contact us";
  document.getElementById("report").innerHTML = "See inspection reports";
  document.getElementById("restaurantLink").innerHTML = "Restaurant";

  /*GENERIC MENU & MENU*/
  document.getElementById("appetizersCategory").innerHTML = "Appetizers";
  document.getElementById("pastaCategory").innerHTML = "Pasta";
  document.getElementById("mainDishesCategory").innerHTML = "Main Dishes";
  document.getElementById("secondDishesCategory").innerHTML = "Second Dishes";
  document.getElementById("dessertsCategory").innerHTML = "Desserts";
  document.getElementById("beveragesCategory").innerHTML = "Beverages";

  /*MAIN DISHES*/
  document.getElementById("mainDish1Title").innerHTML = "Tomato soup";
  document.getElementById("mainDish1Text").innerHTML = "Tomato soup with herbs and tomatoes.";
  document.getElementById("mainDish2Title").innerHTML = "Fish soup";
  document.getElementById("mainDish2Text").innerHTML = "A soup of fresh fish.";
  document.getElementById("mainDish3Title").innerHTML = "Vegan salad";
  document.getElementById("mainDish3Text").innerHTML = "A vegan salad full of taste.";
  document.getElementById("mainDish4Title").innerHTML = "Maxi hamburger";
  document.getElementById("mainDish4Text").innerHTML = "Our best hamburger with classical ingredients.";

}

function MenuAppetizersToEng() {
  document.cookie = "lang=1;SameSite=Lax";

  /*ALL*/
  document.getElementById("feedbacksLink").innerHTML = "FEEDBACKS";
  document.getElementById("ofUsLink").innerHTML = "ABOUT US";
  document.getElementById("findUsLink").innerHTML = "FIND US";
  document.getElementById("footerContent").innerHTML = "Footer Content(English)";
  document.getElementById("footerParagraph").innerHTML = "Footer Paragraph(English)";
  document.getElementById("contactUsLink").innerHTML = "Contact us";
  document.getElementById("report").innerHTML = "See inspection reports";
  document.getElementById("restaurantLink").innerHTML = "Restaurant";

  /*GENERIC MENU & MENU*/
  document.getElementById("appetizersCategory").innerHTML = "Appetizers";
  document.getElementById("pastaCategory").innerHTML = "Pasta";
  document.getElementById("mainDishesCategory").innerHTML = "Main Dishes";
  document.getElementById("secondDishesCategory").innerHTML = "Second Dishes";
  document.getElementById("dessertsCategory").innerHTML = "Desserts";
  document.getElementById("beveragesCategory").innerHTML = "Beverages";

  /*APPETIZERS MENU*/
  document.getElementById("appetizer1Title").innerHTML = "Meat roll";
  document.getElementById("appetizer1Text").innerHTML = "A special roll of pork, ham and cheese (served with vegetables).";
  document.getElementById("appetizer2Title").innerHTML = "Mixed canapes";
  document.getElementById("appetizer2Text").innerHTML = "Differente canapes served with sauces.";
  document.getElementById("appetizer3Title").innerHTML = "Salad cake";
  document.getElementById("appetizer3Text").innerHTML = "Stuffed with mushrooms, ham and cheese.";
  document.getElementById("appetizer4Title").innerHTML = "Delicious steak";
  document.getElementById("appetizer4Text").innerHTML = "Steak slow-cooked and served with fresh vegetables.";

}

function MenuPastaToEng() {
  document.cookie = "lang=1;SameSite=Lax";

  /*ALL*/
  document.getElementById("feedbacksLink").innerHTML = "FEEDBACKS";
  document.getElementById("ofUsLink").innerHTML = "ABOUT US";
  document.getElementById("findUsLink").innerHTML = "FIND US";
  document.getElementById("footerContent").innerHTML = "Footer Content(English)";
  document.getElementById("footerParagraph").innerHTML = "Footer Paragraph(English)";
  document.getElementById("contactUsLink").innerHTML = "Contact us";
  document.getElementById("report").innerHTML = "See inspection reports";
  document.getElementById("restaurantLink").innerHTML = "Restaurant";

  /*GENERIC MENU & MENU*/
  document.getElementById("appetizersCategory").innerHTML = "Appetizers";
  document.getElementById("pastaCategory").innerHTML = "Pasta";
  document.getElementById("mainDishesCategory").innerHTML = "Main Dishes";
  document.getElementById("secondDishesCategory").innerHTML = "Second Dishes";
  document.getElementById("dessertsCategory").innerHTML = "Desserts";
  document.getElementById("beveragesCategory").innerHTML = "Beverages";

  /*PASTA MENU*/
  document.getElementById("pasta1Title").innerHTML = "Pasta with horse rags";
  document.getElementById("pasta1Text").innerHTML = "Pasta with horse rags and parmisan.";
  document.getElementById("pasta2Title").innerHTML = "Pasta with seafood";
  document.getElementById("pasta2Text").innerHTML = "Pasta with seafood.";
  document.getElementById("pasta3Title").innerHTML = "Gnocchi fantasy";
  document.getElementById("pasta3Text").innerHTML = "Tomatoes, seafood, and vegetables.";
  document.getElementById("pasta4Title").innerHTML = "Spaghetti with truffles";
  document.getElementById("pasta4Text").innerHTML = "Spaghetti with truffles and fresh cheese.";
}


function SecondDishesMenuToEng() {
  document.cookie = "lang=1;SameSite=Lax";

  /*ALL*/
  document.getElementById("feedbacksLink").innerHTML = "FEEDBACKS";
  document.getElementById("ofUsLink").innerHTML = "ABOUT US";
  document.getElementById("findUsLink").innerHTML = "FIND US";
  document.getElementById("footerContent").innerHTML = "Footer Content(English)";
  document.getElementById("footerParagraph").innerHTML = "Footer Paragraph(English)";
  document.getElementById("contactUsLink").innerHTML = "Contact us";
  document.getElementById("report").innerHTML = "See inspection reports";
  document.getElementById("restaurantLink").innerHTML = "Restaurant";

  /*GENERIC MENU & MENU*/
  document.getElementById("appetizersCategory").innerHTML = "Appetizers";
  document.getElementById("pastaCategory").innerHTML = "Pasta";
  document.getElementById("mainDishesCategory").innerHTML = "Main Dishes";
  document.getElementById("secondDishesCategory").innerHTML = "Second Dishes";
  document.getElementById("dessertsCategory").innerHTML = "Desserts";
  document.getElementById("beveragesCategory").innerHTML = "Beverages";

  /*SECOND DISHES*/
  document.getElementById("secondDish1Title").innerHTML = "Beef steak";
  document.getElementById("secondDish1Text").innerHTML = "A prelibate grilled steak.";
  document.getElementById("secondDish2Title").innerHTML = "Fish and chips";
  document.getElementById("secondDish2Text").innerHTML = "Fish and chips.";
  document.getElementById("secondDish3Title").innerHTML = "Salmon";
  document.getElementById("secondDish3Text").innerHTML = "A fresh piece of salmon with sour creme.";
  document.getElementById("secondDish4Title").innerHTML = "Meatballs";
  document.getElementById("secondDish4Text").innerHTML = "A dish of meatballs (served with french fries).";

}




function indexToDanish() {
  document.cookie = "lang=0;SameSite=Lax";

  /*ALL*/
  document.getElementById("feedbacksLink").innerHTML = "ANMELDELSER";
  document.getElementById("ofUsLink").innerHTML = "OM OS";
  document.getElementById("findUsLink").innerHTML = "FIND OS";
  document.getElementById("footerContent").innerHTML = "Footer Content(Danish)";
  document.getElementById("footerParagraph").innerHTML = "Footer Paragraph(Danish)";
  document.getElementById("contactUsLink").innerHTML = "Kontact os";
  document.getElementById("report").innerHTML = "Se kontrolrapporter";
  document.getElementById("restaurantLink").innerHTML = "Restaurant";

  /*INDEX*/
  document.getElementById("presentationTextSpan").innerHTML = "(Danish)Website features:<br>-Completely responsive and adaptable to every browser size.<br>-Available languages are Danish and English, but any other language can be added.<br>-Most useful links are clear and visible.";
  document.getElementById("monday").innerHTML = "Mandag";
  document.getElementById("tuesday").innerHTML = "Tirsdag";
  document.getElementById("wednesday").innerHTML = "Onsdag";
  document.getElementById("thursday").innerHTML = "Torsdag";
  document.getElementById("friday").innerHTML = "Fridat";
  document.getElementById("saturday").innerHTML = "Lørdag";
  document.getElementById("sunday").innerHTML = "Søndag";


}

function FeedbacksToDanish(){
  document.cookie = "lang=0;SameSite=Lax";

  /*ALL*/
  document.getElementById("feedbacksLink").innerHTML = "ANMELDELSER";
  document.getElementById("ofUsLink").innerHTML = "OM OS";
  document.getElementById("findUsLink").innerHTML = "FIND OS";
  document.getElementById("footerContent").innerHTML = "Footer Content(Danish)";
  document.getElementById("footerParagraph").innerHTML = "Footer Paragraph(Danish)";
  document.getElementById("contactUsLink").innerHTML = "Kontact os";
  document.getElementById("report").innerHTML = "Se kontrolrapporter";
  document.getElementById("restaurantLink").innerHTML = "Restaurant";

  /*FEEDBACKS*/
  document.getElementById("presentationTextFeedback").innerHTML = "Vores personale arbejder hårdt hver dag for at levere høj kvalitet til servicen og for at behage vores kunders smag.";
  document.getElementById("feedback1").innerHTML = "Opslået på February 19, 2016";
  document.getElementById("feedbackBody1").innerHTML = "(Danish)Lorem ipsum...";
  document.getElementById("feedback2").innerHTML = "Opslået på February 19, 2016";
  document.getElementById("feedbackBody2").innerHTML = "(Danish)Lorem ipsum...";
  document.getElementById("feedback3").innerHTML = "Opslået på February 19, 2016";
  document.getElementById("feedbackBody3").innerHTML = "(Danish)Lorem ipsum...";


}

function FindUsToDanish(){
  document.cookie = "lang=0;SameSite=Lax";

  /*ALL*/
  document.getElementById("feedbacksLink").innerHTML = "ANMELDELSER";
  document.getElementById("ofUsLink").innerHTML = "OM OS";
  document.getElementById("findUsLink").innerHTML = "FIND OS";
  document.getElementById("footerContent").innerHTML = "Footer Content(Danish)";
  document.getElementById("footerParagraph").innerHTML = "Footer Paragraph(Danish)";
  document.getElementById("contactUsLink").innerHTML = "Kontact os";
  document.getElementById("report").innerHTML = "Se kontrolrapporter";
  document.getElementById("restaurantLink").innerHTML = "Restaurant";

  /*FIND US*/
  document.getElementById("connect").innerHTML = "FORBINDE";

}

function OfUsToDanish(){
  document.cookie = "lang=0;SameSite=Lax";

  /*ALL*/
  document.getElementById("feedbacksLink").innerHTML = "ANMELDELSER";
  document.getElementById("ofUsLink").innerHTML = "OM OS";
  document.getElementById("findUsLink").innerHTML = "FIND OS";
  document.getElementById("footerContent").innerHTML = "Footer Content(Danish)";
  document.getElementById("footerParagraph").innerHTML = "Footer Paragraph(Danish)";
  document.getElementById("contactUsLink").innerHTML = "Kontact os";
  document.getElementById("report").innerHTML = "Se kontrolrapporter";
  document.getElementById("restaurantLink").innerHTML = "Restaurant";

  /*OF US*/
  document.getElementById("connect").innerHTML = "FORBINDE";
  document.getElementById("cardOfUsTitle1").innerHTML = "Tjek vores bedste tilbagemeldinger!";
  document.getElementById("cardOfUsButton1").innerHTML = "Se tilbagemeldinger";
  document.getElementById("cardOfUsTitle2").innerHTML = "Tjek vores prelibatmenu";
  document.getElementById("cardOfUsButton2").innerHTML = "Se menu";
  document.getElementById("presentationOfUs").innerHTML = "(Danish)Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est atque cumque eum delectus sint!";

}

function MenuToDanish(){
  document.cookie = "lang=0;SameSite=Lax";
  /*ALL*/
  document.getElementById("feedbacksLink").innerHTML = "ANMELDELSER";
  document.getElementById("ofUsLink").innerHTML = "OM OS";
  document.getElementById("findUsLink").innerHTML = "FIND OS";
  document.getElementById("footerContent").innerHTML = "Footer Content(Danish)";
  document.getElementById("footerParagraph").innerHTML = "Footer Paragraph(Danish)";
  document.getElementById("contactUsLink").innerHTML = "Kontact os";
  document.getElementById("report").innerHTML = "Se kontrolrapporter";
  document.getElementById("restaurantLink").innerHTML = "Restaurant";

  /*GENERIC MENU & MENU*/
  document.getElementById("appetizersCategory").innerHTML = "Forretter";
  document.getElementById("pastaCategory").innerHTML = "Pasta";
  document.getElementById("mainDishesCategory").innerHTML = "Hovedretter";
  document.getElementById("secondDishesCategory").innerHTML = "Anden retter";
  document.getElementById("dessertsCategory").innerHTML = "Desserter";
  document.getElementById("beveragesCategory").innerHTML = "Drikkevarer";

  document.getElementById("titleMenu").src = "images/menuTitleDanish.png";
}

function MenuAppetizersToDanish() {
  document.cookie = "lang=0;SameSite=Lax";

  /*ALL*/
  document.getElementById("feedbacksLink").innerHTML = "ANMELDELSER";
  document.getElementById("ofUsLink").innerHTML = "OM OS";
  document.getElementById("findUsLink").innerHTML = "FIND OS";
  document.getElementById("footerContent").innerHTML = "Footer Content(Danish)";
  document.getElementById("footerParagraph").innerHTML = "Footer Paragraph(Danish)";
  document.getElementById("contactUsLink").innerHTML = "Kontact os";
  document.getElementById("report").innerHTML = "Se kontrolrapporter";
  document.getElementById("restaurantLink").innerHTML = "Restaurant";

  /*GENERIC MENU & MENU*/
  document.getElementById("appetizersCategory").innerHTML = "Forretter";
  document.getElementById("pastaCategory").innerHTML = "Pasta";
  document.getElementById("mainDishesCategory").innerHTML = "Hovedretter";
  document.getElementById("secondDishesCategory").innerHTML = "Anden retter";
  document.getElementById("dessertsCategory").innerHTML = "Desserter";
  document.getElementById("beveragesCategory").innerHTML = "Drikkevarer";

  /*APPETIZERS MENU*/
  document.getElementById("appetizer1Title").innerHTML = "Kødrulle";
  document.getElementById("appetizer1Text").innerHTML = "En særlig rulle svinekød, skinke og ost (serveret med grøntsager).";
  document.getElementById("appetizer2Title").innerHTML = "Blandet kanape";
  document.getElementById("appetizer2Text").innerHTML = "Forskellige canapes serveret med saucer.";
  document.getElementById("appetizer3Title").innerHTML = "Salatkage";
  document.getElementById("appetizer3Text").innerHTML = "Fyldt med svampe, skinke og ost.";
  document.getElementById("appetizer4Title").innerHTML = "Lækker bøf";
  document.getElementById("appetizer4Text").innerHTML = "Bøf langsomt kogt og serveret med friske grøntsager.";

}

function MenuPastaToDanish() {
  document.cookie = "lang=0;SameSite=Lax";

  /*ALL*/
  document.getElementById("feedbacksLink").innerHTML = "ANMELDELSER";
  document.getElementById("ofUsLink").innerHTML = "OM OS";
  document.getElementById("findUsLink").innerHTML = "FIND OS";
  document.getElementById("footerContent").innerHTML = "Footer Content(Danish)";
  document.getElementById("footerParagraph").innerHTML = "Footer Paragraph(Danish)";
  document.getElementById("contactUsLink").innerHTML = "Kontact os";
  document.getElementById("report").innerHTML = "Se kontrolrapporter";
  document.getElementById("restaurantLink").innerHTML = "Restaurant";

  /*GENERIC MENU & MENU*/
  document.getElementById("appetizersCategory").innerHTML = "Forretter";
  document.getElementById("pastaCategory").innerHTML = "Pasta";
  document.getElementById("mainDishesCategory").innerHTML = "Hovedretter";
  document.getElementById("secondDishesCategory").innerHTML = "Anden retter";
  document.getElementById("dessertsCategory").innerHTML = "Desserter";
  document.getElementById("beveragesCategory").innerHTML = "Drikkevarer";

  /*PASTA MENU*/
  document.getElementById("pasta1Title").innerHTML = "Pasta med hesteklude";
  document.getElementById("pasta1Text").innerHTML = "Pasta med hesteklude og parmisan.";
  document.getElementById("pasta2Title").innerHTML = "Pasta med fisk og skaldyr";
  document.getElementById("pasta2Text").innerHTML = "Pasta med fisk og skaldyr.";
  document.getElementById("pasta3Title").innerHTML = "Gnocchi fantasi";
  document.getElementById("pasta3Text").innerHTML = "Tomater, skaldyr og grøntsager.";
  document.getElementById("pasta4Title").innerHTML = "Spaghetti med trøfler";
  document.getElementById("pasta4Text").innerHTML = "Spaghetti med trøfler og frisk ost.";

}

function MainDishesMenuToDanish() {
  document.cookie = "lang=0;SameSite=Lax";

  /*ALL*/
  document.getElementById("feedbacksLink").innerHTML = "ANMELDELSER";
  document.getElementById("ofUsLink").innerHTML = "OM OS";
  document.getElementById("findUsLink").innerHTML = "FIND OS";
  document.getElementById("footerContent").innerHTML = "Footer Content(Danish)";
  document.getElementById("footerParagraph").innerHTML = "Footer Paragraph(Danish)";
  document.getElementById("contactUsLink").innerHTML = "Kontact os";
  document.getElementById("report").innerHTML = "Se kontrolrapporter";
  document.getElementById("restaurantLink").innerHTML = "Restaurant";

  /*GENERIC MENU & MENU*/
  document.getElementById("appetizersCategory").innerHTML = "Forretter";
  document.getElementById("pastaCategory").innerHTML = "Pasta";
  document.getElementById("mainDishesCategory").innerHTML = "Hovedretter";
  document.getElementById("secondDishesCategory").innerHTML = "Anden retter";
  document.getElementById("dessertsCategory").innerHTML = "Desserter";
  document.getElementById("beveragesCategory").innerHTML = "Drikkevarer";

  /*MAIN DISHES*/
  document.getElementById("mainDish1Title").innerHTML = "Tomatsuppe";
  document.getElementById("mainDish1Text").innerHTML = "Tomatsuppe med urter og tomater.";
  document.getElementById("mainDish2Title").innerHTML = "Fiske suppe";
  document.getElementById("mainDish2Text").innerHTML = "En suppe med frisk fisk.";
  document.getElementById("mainDish3Title").innerHTML = "Vegansk salat";
  document.getElementById("mainDish3Text").innerHTML = "En vegansk salat fuld af smag.";
  document.getElementById("mainDish4Title").innerHTML = "Maxi hamburger";
  document.getElementById("mainDish4Text").innerHTML = "Vores bedste hamburger med klassiske ingredienser.";
}

function SecondDishesMenuToDanish() {
  document.cookie = "lang=0;SameSite=Lax";

  /*ALL*/
  document.getElementById("feedbacksLink").innerHTML = "ANMELDELSER";
  document.getElementById("ofUsLink").innerHTML = "OM OS";
  document.getElementById("findUsLink").innerHTML = "FIND OS";
  document.getElementById("footerContent").innerHTML = "Footer Content(Danish)";
  document.getElementById("footerParagraph").innerHTML = "Footer Paragraph(Danish)";
  document.getElementById("contactUsLink").innerHTML = "Kontact os";
  document.getElementById("report").innerHTML = "Se kontrolrapporter";
  document.getElementById("restaurantLink").innerHTML = "Restaurant";

  /*GENERIC MENU & MENU*/
  document.getElementById("appetizersCategory").innerHTML = "Forretter";
  document.getElementById("pastaCategory").innerHTML = "Pasta";
  document.getElementById("mainDishesCategory").innerHTML = "Hovedretter";
  document.getElementById("secondDishesCategory").innerHTML = "Anden retter";
  document.getElementById("dessertsCategory").innerHTML = "Desserter";
  document.getElementById("beveragesCategory").innerHTML = "Drikkevarer";

  /*SECOND DISHES*/
  document.getElementById("secondDish1Title").innerHTML = "Engelsk bøf";
  document.getElementById("secondDish1Text").innerHTML = "En prelibat grillet bøf.";
  document.getElementById("secondDish2Title").innerHTML = "Fisk og pomfritter";
  document.getElementById("secondDish2Text").innerHTML = "Fisk og pomfritter.";
  document.getElementById("secondDish3Title").innerHTML = "Laks";
  document.getElementById("secondDish3Text").innerHTML = "Et frisk stykke laks med sur creme.";
  document.getElementById("secondDish4Title").innerHTML = "Kødboller";
  document.getElementById("secondDish4Text").innerHTML = "En skål med kødboller (serveret med pommes frites).";

}

function DessertsMenuToDanish() {
  document.cookie = "lang=0;SameSite=Lax";

  /*ALL*/
  document.getElementById("feedbacksLink").innerHTML = "ANMELDELSER";
  document.getElementById("ofUsLink").innerHTML = "OM OS";
  document.getElementById("findUsLink").innerHTML = "FIND OS";
  document.getElementById("footerContent").innerHTML = "Footer Content(Danish)";
  document.getElementById("footerParagraph").innerHTML = "Footer Paragraph(Danish)";
  document.getElementById("contactUsLink").innerHTML = "Kontact os";
  document.getElementById("report").innerHTML = "Se kontrolrapporter";
  document.getElementById("restaurantLink").innerHTML = "Restaurant";

  /*GENERIC MENU & MENU*/
  document.getElementById("appetizersCategory").innerHTML = "Forretter";
  document.getElementById("pastaCategory").innerHTML = "Pasta";
  document.getElementById("mainDishesCategory").innerHTML = "Hovedretter";
  document.getElementById("secondDishesCategory").innerHTML = "Anden retter";
  document.getElementById("dessertsCategory").innerHTML = "Desserter";
  document.getElementById("beveragesCategory").innerHTML = "Drikkevarer";

  /*DESSERTS*/
  document.getElementById("dessert1Title").innerHTML = "Creme karamel";
  document.getElementById("dessert1Text").innerHTML = "Creme karamel med frisk frugt.";
  document.getElementById("dessert2Title").innerHTML = "Blandede kager";
  document.getElementById("dessert2Text").innerHTML = "Et varieret sortiment af bagværk.";
  document.getElementById("dessert3Title").innerHTML = "Chokoladekage";
  document.getElementById("dessert3Text").innerHTML = "Et stykke chokoladekage med blåbær.";
  document.getElementById("dessert4Title").innerHTML = "Frugtis";
  document.getElementById("dessert4Text").innerHTML = "Jordbær, blåbær og vanilleis.";
}

function BeverageMenuToDanish() {
  document.cookie = "lang=0;SameSite=Lax";

  /*ALL*/
  document.getElementById("feedbacksLink").innerHTML = "ANMELDELSER";
  document.getElementById("ofUsLink").innerHTML = "OM OS";
  document.getElementById("findUsLink").innerHTML = "FIND OS";
  document.getElementById("footerContent").innerHTML = "Footer Content(Danish)";
  document.getElementById("footerParagraph").innerHTML = "Footer Paragraph(Danish)";
  document.getElementById("contactUsLink").innerHTML = "Kontact os";
  document.getElementById("report").innerHTML = "Se kontrolrapporter";
  document.getElementById("restaurantLink").innerHTML = "Restaurant";

  /*GENERIC MENU & MENU*/
  document.getElementById("appetizersCategory").innerHTML = "Forretter";
  document.getElementById("pastaCategory").innerHTML = "Pasta";
  document.getElementById("mainDishesCategory").innerHTML = "Hovedretter";
  document.getElementById("secondDishesCategory").innerHTML = "Anden retter";
  document.getElementById("dessertsCategory").innerHTML = "Desserter";
  document.getElementById("beveragesCategory").innerHTML = "Drikkevarer";

  /*BEVERAGES*/
  document.getElementById("beverage1Title").innerHTML = "Vin";
  document.getElementById("beverage1Text").innerHTML = "";
  document.getElementById("beverage2Title").innerHTML = "Vin";
  document.getElementById("beverage2Text").innerHTML = "";
  document.getElementById("beverage3Title").innerHTML = "Vin";
  document.getElementById("beverage3Text").innerHTML = "";
  document.getElementById("beverage4Title").innerHTML = "Vin";
  document.getElementById("beverage4Text").innerHTML = "";

}
