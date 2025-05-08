# Utiliser l'image Node.js officielle LTS
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et yarn.lock pour installer les dépendances
COPY package.json yarn.lock ./

# Installer les dépendances
RUN yarn install

# Copier tout le code source dans le conteneur
COPY . .

# Construire le projet Next.js
RUN yarn build

# Exposer le port sur lequel Next.js va écouter
EXPOSE 3000

# Démarrer l'application
CMD ["yarn", "start"]