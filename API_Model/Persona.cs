using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRUDWEP.API_Model
{
    public class Persona
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int Edad { get; set; }
        public string Pais { get; set; }
        public string Provincia { get; set; }
    }
}