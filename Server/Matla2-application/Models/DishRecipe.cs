using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Matla2_application.Models
{
    public class DishRecipe
    {
        int id;
        string name;
        string image;
        Ingredient[] ingredients;
        string cookingMethod;
        int time;

        public DishRecipe()
        {
        }



        public DishRecipe(string name, string image, Ingredient[] ingredients, string cookingMethod, int time)
        {

            this.name = name;
            this.image = image;
            this.ingredients = ingredients;
            this.cookingMethod = cookingMethod;
            this.time = time;
        }

        public int Id { get => id; set => id = value; }
        public string Name { get => name; set => name = value; }
        public string Image { get => image; set => image = value; }
        public Ingredient[] Ingredients { get => ingredients; set => ingredients = value; }
        public string CookingMethod { get => cookingMethod; set => cookingMethod = value; }
        public int Time { get => time; set => time = value; }


        public static void addDishRecipe(DishRecipe dish)
        {
            DBservices db = new DBservices();
            try
            {
                db.insert(dish);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }



        public static List<DishRecipe> getAllRecipe()
        {
            return DBservices.getAllRecipe();
        }
    }
}