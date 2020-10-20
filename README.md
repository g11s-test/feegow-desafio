# Feegoo Desafio
Para rodar o projeto pós baixar o repositório:

# Frontend
Você tem a opção utilizando o docker, basta rodar o comando <b>docker-compose build</b> e quando finalizar rodar o <b>docker-compose up</b>.
Ficará disponível o frontend no seguinte endereço: <b>http://localhost:3000</b>

Ou, fazer o processo manualmente instalando os pacotes do package.json com <b>npm install</b> e em seguida npm install
Ficará disponível também no endereço: <b>http://localhost:3000</b>

# Backend
Instalar os pacotes do composer e do npm, você pode fazer isso com o comando <b>npm install && composer install</b>
Criar uma cópia do .env.example para .env
Configurar as variáveis do env de acordo com o seu banco mysql local ou docker(com imagem do mysql)
Configurar a variável FEEGOW_TOKEN(token dado por vocês) no .env
Rodar o comando <b>php artisan key:generate</b> e em seguida <b>php artisan serve</b>

# Atenção
O frontend é dependente do backend, precisa ter ambos rodando simultâneo para buscar os dados.

# Documentação da API da Feegow
<b>Mais informações:</b> https://docs.feegow.com/

# Rotas do Backend
<b>URL:</b> baseURL/api/feegow/sources/list
<b>Descrição:</b> Rota de listagem de origens
<b>Método</b>: GET

<b>URL:</b> baseURL/api/feegow/specialties/list
<b>Descrição:</b> Rota de listagem de especialidades
<b>Método</b>: GET

<b>URL:</b> baseURL/api/feegow/professionals/list
<b>Descrição:</b> Rota de listagem de profissionais
<b>Método</b>: GET

<b>URL:</b> baseURL/api/schedules
<b>Descrição:</b> Rota de listagem de schedules
<b>Método</b>: GET

<b>URL:</b> baseURL/api/schedules
<b>Descrição:</b> Rota de criação de schedules
<b>Método</b>: POST

<b>URL:</b> baseURL/api/schedules/{id}
<b>Descrição:</b> Rota de listagem de schedules por ID
<b>Método</b>: GET

<b>URL:</b> baseURL/api/schedules/{id}
<b>Descrição:</b> Rota de atualização de schedules por ID
<b>Método</b>: PUT

<b>URL:</b> baseURL/api/schedules/{id}
<b>Descrição:</b> Rota de deletar schedules por ID
<b>Método</b>: DELETE

<b>Features que pretendia e que não consegui terminar pelo tempo:
* Documentação das rotas utilizando Swagger.
* Docker do Backend
* CI/CD Utilizando as actions do github e subindo na Azure ou Amazon (processo parecido com o projeto treino-azure-typescript em meu github)</b>
