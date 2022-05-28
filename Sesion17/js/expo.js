function etapas (a){
    
    var edad = a; 

    if (edad >=65 && edad<=120){
        document.write("ANCIANO");
    }else if (edad >=31 && edad<=64){
        document.write("ADULTO");
    }else if (edad >=18 && edad<=30){
        document.write("JOVEN");
    }else if (edad >=13 && edad<=17){
        document.write("ADOLESCENTE");
    }else if (edad >=2 && edad<=12){
        document.write("NIÑO");
    }else if (edad >=0 && edad<=1){
        document.write("BEBÉ");
    }else{
        document.write("EDAD INCORRECTA");
    }

}

