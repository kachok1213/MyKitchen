using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using Matla2_application.Models;

namespace Matla2_application.Controllers
{


    public class IngredientController : ApiController
    {

        public  List<Ingredient> Get()
        {
            return Ingredient.getIngredient();
        }


        //public int Post(string name,string image,int calories)
        //{
        //    Ingredient i = new Ingredient(name, image, calories);

        //    return Ingredient.addIngredient(i);


        //}
        public int Post([FromBody]Ingredient i)
        {


            return Ingredient.addIngredient(i);


        }

    }
}