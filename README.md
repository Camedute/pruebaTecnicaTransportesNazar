# **Transportes Nazar**
# *Prueba Técnica Mario Norambuena*

## Descripción de la prueba

### ⏱️ Cronograma y tiempo de desarrollo:
- El desarrollo de la prueba fue de un aproximado de 6 horas
- **Lunes**: Recepción de la prueba y análisis de las historias, junto con inicialización de `Backend` y `Frontend`
- **Martes**: Desarrollo del `Backend`
- **Miércoles**: Desarrollo del `Frontend` e inserción del `Backend` en `Hosting`
- **Jueves**: Desarrollo del `Hosting` (migración de `HTTP` a `HTTPS` para ser consumido por la `APP`), compilación y construcción de la aplicación en formato `APK`

#### 📖*Comentarios*
Lo más complicado que surgió a la hora de desarrollar la prueba, fue la implementación del `Backend` en el `Hosting`, para que siempre esté activo evitando pasos complicados, que no funcione bien la APP, entre otras cosas, el mayor problema que hubo, es que en móviles, por defecto los navegadores cambian de `HTTP` a `HTTPS`, causando que la aplicación devuelva un error; Por otra parte, la transformación de la imagen que se capturaba para ser enviada a la base de datos, y posteriormente ser transformada nuevamente para ser consumida por el Frontend 
* (`Imagen capturada` ➡️ `Varbinary` ➡️ `Base64`)

### 🖥️ *Backend (empleadosAPI)*
- `.NET Core` junto con `C#`
- Lógica de negocio y gestión de datos
- `SQL Server`
- Alojado en `SmarterASP.NET`

### 📱 *Frontend (empleadosAPP)*
- `React Native` y `Expo`
- Consumo de API con `Axios`
- Interfaz de gestión de empleados

## *Tecnologías*
- **Backend**: `.NET Core`, `C#`, `SQL Server`
- **Frontend**: `React Native`, `Expo`, `Axios`
- **Hosting**: `SmarterASP.NET`

## Instalación
- Archivo `pruebaTecnicaMN.APK` disponible para instalación en Android
- **Requiere conexión a Internet** para comunicación con backend y base de datos

## Funcionalidades
- Gestión de conductores
- Carga y administración de archivos
- Interfaz móvil

## Importante
La aplicación depende completamente de conexión a Internet para su funcionamiento correcto.
