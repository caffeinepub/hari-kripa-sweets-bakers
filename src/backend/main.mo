import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Array "mo:core/Array";

actor {
  type MenuItem = {
    id : Nat;
    name : Text;
    price : Nat;
    description : Text;
  };

  module MenuItem {
    public func compare(item1 : MenuItem, item2 : MenuItem) : Order.Order {
      Nat.compare(item1.id, item2.id);
    };

    public func compareByPrice(item1 : MenuItem, item2 : MenuItem) : Order.Order {
      Nat.compare(item1.price, item2.price);
    };

    public func compareByName(item1 : MenuItem, item2 : MenuItem) : Order.Order {
      Text.compare(item1.name, item2.name);
    };
  };

  type RestaurantInfo = {
    name : Text;
    description : Text;
    address : Text;
    phone : Text;
    email : Text;
  };

  let restaurantInfo : RestaurantInfo = {
    name = "Hari Kripa Sweets & Bakers";
    description = "Experience authentic sweets, snacks, and baked goods at Hari Kripa! We use traditional recipes and high-quality ingredients to bring you the best of Indian cuisine. Visit us for a delightful culinary journey!";
    address = "123 Main Street, City, State, 12345";
    phone = "(555) 123-4567";
    email = "info@harikripasweets.com";
  };

  let menu = [
    {
      id = 1;
      name = "Rasgulla";
      price = 50;
      description = "Soft and spongy cottage cheese balls soaked in sugar syrup.";
    },
    {
      id = 2;
      name = "Gulab Jamun";
      price = 45;
      description = "Deep-fried milk solids soaked in flavored sugar syrup.";
    },
    {
      id = 3;
      name = "Paneer Samosa";
      price = 30;
      description = "Crispy pastry filled with spiced cottage cheese and vegetables.";
    },
    {
      id = 4;
      name = "Chocolate Cake";
      price = 70;
      description = "Rich and moist chocolate cake with creamy frosting.";
    },
  ];

  public query ({ caller }) func getRestaurantInfo() : async RestaurantInfo {
    restaurantInfo;
  };

  public query ({ caller }) func getMenuItem(id : Nat) : async MenuItem {
    switch (menu.find(func(item) { item.id == id })) {
      case (null) { Runtime.trap("Menu item not found") };
      case (?item) { item };
    };
  };

  public query ({ caller }) func getMenuSortedByName() : async [MenuItem] {
    menu.sort(MenuItem.compareByName);
  };

  public query ({ caller }) func getMenuSortedByPrice() : async [MenuItem] {
    menu.sort(MenuItem.compareByPrice);
  };
};
