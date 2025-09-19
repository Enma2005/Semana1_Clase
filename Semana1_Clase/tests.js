
//si dice que no puede tener varias cosas deberemos hacer una prueba para cada uno de los elementos
//  de esta para saber cual es el que realmente falla

//por ejemplo podemos probar si solo nos piden digitos hacemos una prueba para uno al principio otro al 
// final y otro en el medio

// array (entidad, campo, n.def, descripcion, codigoBooleano, mensaje)
//Preubas (entidades, campo, n.def, n.preuba, accion, valor, codigo/booleano)

//EJERCICIO DE CLASE TEORICA
//el atributo nombreDePila que pertenece a la entidad DATOS (alfabeticos con ñ y acentos y espacios)
// (permite que personas de alto estatus puedan poner I II III etc.. ) con un tamaño minimo de 2 y maximo de 35

array1=(
    array("DATOS" , 'nombreDePila', 1, 'comprobar que no tenga alfabeticos no permitidos(solo ñ tildes y espacios)', 'nombreDePila_formato_KO' , "no se permiten numeros o simbolos que no sean alfabeticos ñ o tildes y espacios"),
    array("DATOS" , 'nombreDePila', 2, 'comprobar Tamaño Mininimo', 'nombreDePila_tamaño_minimo_KO' , "el tamaño debe ser superior a 2"),
    array("DATOS" , 'nombreDePila', 3, 'comprobar Tamaño Maximo', 'nombreDePila_tamaño_maximo_KO' , "el tamaño debe ser inferior a 35")
);

arrayPruebas=(
    array("DATOS", "NombreDePila", 1, 1, "ADD", [{NombreDePila:"12enma"}], "nombreDePila_formato_KO"),
    array("DATOS", "NombreDePila", 1, 2, "ADD", [{NombreDePila:"enm1a"}], "nombreDePila_formato_KO"),
    array("DATOS", "NombreDePila", 1, 3, "ADD", [{NombreDePila:"enma22"}], "nombreDePila_formato_KO"),
    array("DATOS", "NombreDePila", 1, 4, "ADD", [{NombreDePila:"enm.a"}], "nombreDePila_formato_KO"),
    array("DATOS", "NombreDePila", 1, 5, "ADD", [{NombreDePila:".enma"}], "nombreDePila_formato_KO"),
    array("DATOS", "NombreDePila", 1, 6, "ADD", [{NombreDePila:"enma."}], "nombreDePila_formato_KO"),
    array("DATOS", "NombreDePila", 2, 7, "ADD", [{NombreDePila:"a"}], "nombreDePila_tamaño_minimo_KO"),
    array("DATOS", "NombreDePila", 3, 8, "ADD", [{NombreDePila:"Pablo Alejandro Puente Prieto MLVII Enma Romero Diz IV"}], "nombreDePila_tamaño_maximo_KO")
);
