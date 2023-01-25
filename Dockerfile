# passo 1 - definir o ambiente para o app
FROM node:16

# passo 2 - criando um diretorio no container
WORKDIR /biascompiler-back

# passo 3 - copiar o package para dentro do container
COPY package*.json ./

# passo 4 - executar o npm install
RUN npm install

# passo 5 - vamos copiar todos os arquivos para o container
# todos incluindo o node_modules - com o .dockerignore não copiar o node_modules
COPY . ./biascompiler-back

# passo 6 - definir envs
ENV PORT=4002

# passo 7 - expor a porta da aplicação
EXPOSE 4002
RUN npx prisma generate

# passo 8 - executar a aplicação
CMD ["npm", "run", "dev"]
