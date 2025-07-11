# Imagen base
FROM node:18

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos necesarios
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del proyecto
COPY . .

# Expone el puerto
EXPOSE 3000

# Comando para correr la app
CMD ["npm", "start"]