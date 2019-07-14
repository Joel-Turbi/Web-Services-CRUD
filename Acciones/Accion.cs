using CRUDWEP.API_Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRUDWEP.Acciones
{
    public class Accion
    {
        public List<Persona> obtenerPersona()
        {
            using (var DB = new UsuariosEntities())
            {
                var listado = DB.Users.Join(DB.Paises, x => x.Id_pais, y => y.Id, (x, y) =>
                       new { x, y }).Join(DB.Provincias, w => w.x.Id_Provincia, z => z.Id, (w, z) =>
                               new { w, z }).Select(x => new Persona
                               {
                                   Id = x.w.x.Id,
                                   Nombre = x.w.x.Nombre,
                                   Apellido = x.w.x.Apellido,
                                   Edad = x.w.x.Edad,
                                   Pais = x.w.x.Paises.Pais,
                                   Provincia = x.w.x.Provincias.Provincia


                               }).ToList();

                return listado;


            }

        }

        public List<contry> ObtenerPaises()
        {
            using(var DB = new UsuariosEntities())
            {
                var listado = DB.Paises.Select(x => new contry
                {
                    Id = x.Id,
                    Pais = x.Pais
                }).ToList();
                return listado;


            }
        }

        public List<Ciudades> obtenerCiudades()
        {

            using (var DB = new UsuariosEntities())
            {
                var listado = DB.Provincias.Where(x=>x.Id_pro_pais==puntero.id_puntero).Select(x => new Ciudades
                {
                    Id = x.Id,
                    Provincia= x.Provincia
                }).ToList();
                return listado;


            }
        }

        public void registrar(DataP personas)
        {
            using (var DB = new UsuariosEntities())
            {
                var usuario = new Users {
                    Nombre=personas.Nombre,
                    Apellido=personas.Apellido,
                    Edad=personas.Edad,
                    Id_pais=personas.Id_Pais,
                    Id_Provincia=personas.Id_Provincia
                };

                DB.Users.Add(usuario);
                DB.SaveChanges();

            }


        }

        public void eliminar(Ciudades num)
        {

            using (var DB = new UsuariosEntities())
            {
                var eliminar = DB.Users.Find(num.Id);

                DB.Users.Remove(eliminar);
                DB.SaveChanges();
            }

        }

        public List<Persona> Data_Persona()
        {

            using (var DB = new UsuariosEntities())
            {
                var buscar = DB.Users.Where(x => x.Id ==puntero.id_user).Select(x =>

                    new Persona
                    {
                        Nombre = x.Nombre,
                        Apellido = x.Apellido,
                        Edad = x.Edad


                    }).ToList();



                return buscar;
            }

        }

        public void Modificar(DataP persona)
        {

            using (var DB = new UsuariosEntities())
            {
                var user = DB.Users.Where(x => x.Id == puntero.id_user).First();
                user.Nombre = persona.Nombre;
                user.Apellido = persona.Apellido;
                user.Edad = persona.Edad;
                user.Id_pais = persona.Id_Pais;
                user.Id_Provincia = persona.Id_Provincia;

                DB.Entry(user).State = System.Data.Entity.EntityState.Modified;
                DB.SaveChanges();
                   

            }

        }


    }
}