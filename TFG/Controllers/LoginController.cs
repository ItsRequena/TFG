﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TFG.Controllers
{
    public class LoginController : Controller
    {
        public ActionResult Login()
        {
            return View();
        }


        public ActionResult Register()
        {
            return View();
        }

        public ActionResult Menu()
        {
            return View("~/Views/Menu/Menu.cshtml");
        }

        public ActionResult Ejercicios()
        {
            return View("~/Views/Menu/Ejercicio.cshtml");
        }
    }
}