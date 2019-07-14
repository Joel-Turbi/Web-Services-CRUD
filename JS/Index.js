
$(document).ready(function () {

    function provincias() {


        $('#paises').change(function () {
            let pais = parseInt($('#paises option:selected').val());
            console.log(pais);

            $.post("/users/buscar", { "Id": pais }, function () {

                $.ajax({
                    url: "/users/ciudades",
                    type: "GET",
                    datatype: "json",
                    success: function (data) {
                        $('#provincias').text("");
                        $('#provincias').append(`<option value="" selected disabled>Selecione una provincia...</option>`);
                        $.each(data, function (index, obj) {
                            $('#provincias').append(`<option id="" value="${obj.Id}">${obj.Provincia}</option>`);
                            console.log(obj.Provincia);
                        });

                    }

                });


            });

        });
    }
    function paises() {

        $.ajax({
            url: "/users/contry",
            type: "GET",
            datatype: "json",
            success: function (data) {
                $('#paises').text("");
                $('#paises').append(`<option value="" selected disabled>Selecione un Pais...</option>`);
                $.each(data, function (index, obj) {
                    $('#paises').append(`<option id="" value="${obj.Id}">${obj.Pais}</option>`);
                    console.log(obj.Pais);
                });

            }
        });
    }
    function lista() {
        $.ajax({
            url: "/users/get",
            type: "GET",
            datatype: "json",
            success: function (data) {
                $('#campos').text("");
                $.each(data, function (index, obj) {
                    $('#campos').append(
                       `<tr>
                               <td>${obj.Nombre}</td>
                               <td>${obj.Apellido}</td>
                               <td>${obj.Edad}</td>
                               <td>${obj.Pais}</td>
                               <td>${obj.Provincia}</td>
                                  <td><button type="submit" id="eliminar" value="${obj.Id}" class="btn btn-outline-danger" >Eliminar</button></td>
                                     <td><button type="button" id="modificar" value="${obj.Id}" class="btn btn-outline-primary"data-toggle="modal" data-target="#exampleModal">Modificar</button></td>

                             </tr > `

                    );


                });
            }

        });
    }
    paises();
    provincias();
    lista();

 

    $('#enviar').click(function () {

        let nombre = $('#nombre').val();
        console.log(nombre);
        let apellido = $('#apellido').val();
        let edad = parseInt($('#edad').val());
        let pais = parseInt($('#paises option:selected').val());
        console.log("El valor del pais es " + pais);

        let provincia = parseInt($('#provincias option:selected').val());
        console.log(provincia);
        if (nombre.length != 0 && apellido.length != 0 && edad > 0 && pais > 0 && provincia > 0) {


            $.post("/users/enviar", {

                "Nombre": nombre,
                "Apellido": apellido,
                "Edad": edad,
                "Id_Pais": pais,
                "Id_Provincia": provincia
            },
                function () {
                    

                });
        }

        lista();
    });


    $(document).on('click', '#eliminar', function () {

        let id = $(this)[0];
        let dato = parseInt($(id).attr('value'));
        $.post('/users/eliminar', { 'Id': dato }, function () {

            lista();
        });

    });
    $(document).on('click', '#modificar', function () {
        paises();
        provincias();
        let num = $(this)[0];
        let id = $(num).val();
        // console.log("el id de modificarr es " + id);
        $.post('/users/buscar_user', { "Id": id }, function () {
            $.ajax({
                url: '/users/modificar_data',
                type: 'GET',
                datatype: 'json',
                success: function (data) {

                    $.each(data, function (index, obj) {

                        console.log(obj.Nombre);

                        $('#nombre1').attr("value",obj.Nombre);
                        $('#apellido1').attr("value",obj.Apellido);
                        $('#edad1').attr("value",obj.Edad);
                    });
                    $.ajax({
                        url: "/users/contry",
                        type: "GET",
                        datatype: "json",
                        success: function (data) {
                            $('#paises1').text("");
                            $('#paises1').append(`<option value="" selected disabled>Selecione un Pais...</option>`);
                            $.each(data, function (index, obj) {
                                $('#paises1').append(`<option id="" value="${obj.Id}">${obj.Pais}</option>`);
                                console.log(obj.Pais);
                            });

                        }
                    });

                }
            });

        });


    });


    $('#modif').click(function () {

        let nombre = $('#nombre1').val();
        console.log(nombre);
        let apellido = $('#apellido1').val();
        let edad = parseInt($('#edad1').val());
        let pais = parseInt($('#paises1 option:selected').val());
        console.log("El valor del pais es " + pais);

        let provincia = parseInt($('#provincias1 option:selected').val());
        console.log(provincia);
        if (nombre.length != 0 && apellido.length != 0 && edad > 0 && pais > 0 && provincia > 0) {


            $.post("/users/modificar", {

                "Nombre": nombre,
                "Apellido": apellido,
                "Edad": edad,
                "Id_Pais": pais,
                "Id_Provincia": provincia
            },
                function () {
                  

                });
        }

        lista();
    });

    $('#paises1').change(function () {
        let pais = parseInt($('#paises1 option:selected').val());
        console.log(pais);

        $.post("/users/buscar", { "Id": pais }, function () {

            $.ajax({
                url: "/users/ciudades",
                type: "GET",
                datatype: "json",
                success: function (data) {
                    $('#provincias1').text("");
                    $('#provincias1').append(`<option value="" selected disabled>Selecione una provincia...</option>`);
                    $.each(data, function (index, obj) {
                        $('#provincias1').append(`<option id="" value="${obj.Id}">${obj.Provincia}</option>`);
                        console.log(obj.Provincia);
                    });

                }

            });


        });

    });
});