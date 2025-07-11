# Usar una imagen base oficial de Node
FROM node:18

# Crear y usar un directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos del proyecto al contenedor
COPY package*.json ./
COPY . .

# Instalar dependencias
RUN npm install

# Exponer el puerto 
EXPOSE 3000

# Variable de entorno para producción
ENV NODE_ENV=production

# Comando para correr la app
CMD ["node", "src/app.js"]
