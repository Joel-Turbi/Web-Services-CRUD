using CRUDWEP.Acciones;
using CRUDWEP.API_Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CRUDWEP.API
{

  
    [RoutePrefix("users")]
    public class usuariosController : ApiController
    {
        
        [HttpGet, Route("get")]
        public List<Persona> personas()
        {
            var accion = new Accion();

            var listado = accion.obtenerPersona();
            return listado;


        }

        [HttpGet, Route("contry")]

        public List<contry> paises()
        {

            var accion = new Accion();

            var listado = accion.ObtenerPaises();

            return listado;

        }

        [HttpPost,Route("buscar")]

        public void buscar(Ciudades Id)
        {
            puntero.id_puntero = Id.Id;

        }
        [HttpPost, Route("buscar_user")]

        public void buscar_user(Ciudades Id)
        {
            puntero.id_user = Id.Id;

        }
        [HttpGet, Route("ciudades")]

        public List<Ciudades> ciudades()
        {
            var accion = new Accion();

            var listado = accion.obtenerCiudades();

            return listado;

        }
        [HttpPost, Route("enviar")]
        public void enviar(DataP personas)
        {
            var accion = new Accion();

             accion.registrar(personas);

        }


        [HttpPost, Route("eliminar")]
        public void eliminar(Ciudades Id)
        {
            var accion = new Accion();

            accion.eliminar(Id);

        }

        [HttpGet, Route("modificar_data")]
        public List<Persona> data_modificar()
        {
            var accion = new Accion();

            var listado = accion.Data_Persona();
            return listado;
        }


        [HttpPost, Route("modificar")]
        public void Modificar(DataP persona)
        {
            var accion = new Accion();

            accion.Modificar(persona);
          
        }



    }
}
