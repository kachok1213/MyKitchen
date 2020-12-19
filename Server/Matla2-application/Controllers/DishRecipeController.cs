using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using Matla2_application.Models;

namespace WebApplication1.Controllers
{
    public class DishRecipeController : ApiController
    {

        public List<DishRecipe> Get()
        {
            return DishRecipe.getAllRecipe();
        }

        public int Post([FromBody] DishRecipe d)
        {
          //  DishRecipe d = new DishRecipe(name,image, ingredients,cookingMethod, time);

            try
            {
                DishRecipe.addDishRecipe(d);
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }


        }
    }
}