# Front Angular + Spring Boot

Aplicación de ejemplo para conectar un cliente Angular con una API REST desarrollada con Spring Boot. El backend incluido en este repositorio sirve como punto de partida para probar los métodos HTTP y la configuración CORS.

## Estructura

```text
api/
├── pom.xml
├── mvnw
└── src/
    ├── main/java/com/example/api/
    │   ├── ApiApplication.java
    │   └── controller/EndpointController.java
    └── test/java/com/example/api/ApiApplicationTests.java
```

La carpeta `api/` contiene el backend Spring Boot. La carpeta `fold-angular/` conserva notas del trabajo de frontend; el código Angular no está documentado todavía en la raíz de este repositorio.

## Requisitos

- Java 17 o superior
- Maven Wrapper incluido (`api/mvnw`); no necesitas instalar Maven por separado

## Ejecutar la API

Desde la raíz del repositorio:

```bash
cd api
./mvnw spring-boot:run
```

En Windows PowerShell:

```powershell
cd api
.\mvnw.cmd spring-boot:run
```

Spring Boot inicia por defecto en `http://localhost:8080`.

## Endpoints disponibles

Todos los endpoints usan la ruta base `/api/endpoint`:

| Método | Ruta | Respuesta de ejemplo |
|---|---|---|
| GET | `/api/endpoint` | `Soy un endpoint GET` |
| POST | `/api/endpoint` | `Soy un endpoint POST` |
| PUT | `/api/endpoint` | `Soy un endpoint PUT` |
| PATCH | `/api/endpoint` | `Soy un endpoint PATCH` |
| DELETE | `/api/endpoint` | `Soy un endpoint DELETE` |

Son endpoints demostrativos: actualmente no reciben ni persisten datos.

Prueba rápida:

```bash
curl http://localhost:8080/api/endpoint
curl -X POST http://localhost:8080/api/endpoint
```

## Tests y compilación

Desde `api/`:

```bash
./mvnw test
./mvnw package
```

En Windows, sustituye `./mvnw` por `.\mvnw.cmd`.

## Próximas mejoras

- Documentar y enlazar el cliente Angular con instrucciones reproducibles.
- Restringir CORS al origen del frontend en lugar de permitir cualquier origen.
- Añadir pruebas de controlador para cada método HTTP.
- Incorporar DTOs y respuestas JSON cuando la API deje de ser un ejemplo básico.

## Estado

Proyecto educativo en evolución. Las instrucciones anteriores describen el backend que está presente actualmente; no implican que exista todavía una integración frontend-backend completa.
