
  # Rick & Morty Backend API

  ![Texto alternativo](https://miro.medium.com/v2/resize:fit:1358/format:webp/1*ENMJyVnsHHu9ksNkO1NkDg.jpeg)



  Este proyecto es una API backend construida con Node.js, Express, GraphQL y Sequelize, que permite consultar y almacenar personajes de la serie Rick and Morty. Utiliza una base de datos relacional y cacheo con Redis para mejorar el rendimiento.

  ## Características
  - Node version 20.19.4
  - API GraphQL para consultar personajes con filtros.
  - Sincronización periódica de personajes desde la API oficial de Rick and Morty.
  - Cacheo de consultas con Redis.
  - Logger de peticiones HTTP.
  - Setup inicial para crear la base de datos y la tabla
  - Seeder inicial de personajes.
  - Compatible con MySQL y PostgreSQL.

  ## Estructura del Proyecto

  ```
  .
  ├── src/
  │   ├── app.ts
  │   ├── index.ts
  │   ├── db/
  │   ├── decorators/
  │   ├── graphql/
  │   ├── jobs/
  │   ├── middleware/
  │   ├── models/
  │   ├── seed/
  │   ├── services/
  │   └── utils/
  ├── .env
  ├── .env.example
  ├── .gitignore
  ├── package.json
  ├── tsconfig.json
  ```

  ## Instalación

  1. Clona el repositorio.
  2. Instala las dependencias:

    ```sh
    npm install
    ```

  3. Copia el archivo `.env.example` a `.env` y configura tus variables de entorno:

    ```sh
    cp .env.example .env
    ```

  4. Asegúrate de tener una base de datos MySQL y Redis corriendo.

  ## Scripts

  ====================IMPORTANTE====================
  - **setup:** 
    Asegúrate de correr el setup para crear la tabla en la base de datos.
    ```sh
    npm run setup
    ```
    - **Seed la base de datos:**  
    ```sh
    npm run seed
    ```
    ===============================================
  - **Desarrollo:**  
    ```sh
    npm run dev
    ```
  - **Build:**  
    ```sh
    npm run build
    ```
  - **Producción:**  
    ```sh
    npm start
    ```

  ## ERD
```text
+------------------+
|   characters     |
+------------------+
| id (PK)          |
| rmId             |
| name             |
| status           |
| species          |
| type             |
| gender           |
| origin           |
| image            |
| createdAt        |
| updatedAt        |
+------------------+
```

  ## Uso

  Una vez iniciado el servidor, accede a la consola de GraphQL en:  
  [http://localhost:3001/graphql](http://localhost:3001/graphql) (o el puerto configurado en `.env`).

  ### Ejemplo de consulta

  ```graphql
  query {
    characters(filter: { name: "Rick", status: "Alive", limit: 5 }) {
      id
      name
      status
      species
      origin
      image
    }
  }
  ```

  ## Autor

  Alejandro Pulgarin

  ---

  > Prueba técnica para Blossom Full Stack.

  ![Texto alternativo](https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/ab553cdc-e15d-4597-b65f-bec9201fd2dd/614517ed-3837-11f0-b9dc-12119106e6a1?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=4320)