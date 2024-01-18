# CLI-SAMQS
### _Interface de linea de comandos para inicializacion rapida de proyectos_

### **_Comandos Basicos_**
en la actualidad solo esta configurado para proyectos de express

### **Inicializar un proyecto**
```
cli-samqs n <nombre-proyecto>
```


### **Generar un modulo**
Para la generacion de modulos se tienen diferentes opciones, las cuales permiten crear modulos creando un crud completo o creandolo un **CRUD** en base a una **base de datos**
```
cli-samqs g <nombre-modulo> --options
```

| OPTION            | ALIAS     | DESCRIPTION   |
| -----             | -----     | -----         |
| --resourse        | -res      | crea un modulo completo con archivos route, controller, model, interface |
| --resourse sql    | -ressql   | `Aun esta en desarrollo` crea un modulo completo con archivos route, controller, model, interface apartir de una tabla sql |
| --resourse mongo  | -resmongo | `Aun esta en desarrollo` crea un modulo completo con archivos route, controller, model, interface apartir de una entidad de mongo |
| --route           | -r        | `Aun esta en desarrollo` crea un archivo route |
| --interface       | -i        | `Aun esta en desarrollo` crea un archivo de definicion de tipos |
| --controller      | -c        | `Aun esta en desarrollo` crea un archivo controlador |
| --model           | -mo       | `Aun esta en desarrollo` crea un archivo model |
| --middleware      | -mid      | `Aun esta en desarrollo` crea un archivo middleware |

### ⚠️ ️**para observar la tabla anterior puede ejecutar el comando** ⚠️
```
cli-samqs g --help
```


para generar un recurso -ressql es necesario llamar a las variables de entonrno de la siguiente manera
