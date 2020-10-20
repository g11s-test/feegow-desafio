# Feegoo Desafio
<b>Features que pretendia e que não consegui terminar pelo tempo:
* Documentação das rotas utilizando Swagger.
* Docker do Backend
* CI/CD Utilizando as actions do github e subindo na Azure ou Amazon (processo parecido com o projeto treino-azure-typescript em meu github)</b>

Para rodar o projeto pós baixar o repositório:

# Frontend
Você tem a opção utilizando o docker dentro da pasta frontend, basta rodar o comando <b>docker-compose build</b> e quando finalizar rodar o <b>docker-compose up</b>.<br />
Ficará disponível o frontend no seguinte endereço: <b>http://localhost:3000</b>

Ou, fazer o processo manualmente instalando os pacotes do package.json com <b>npm install</b> e em seguida npm start<br />
Ficará disponível também no endereço: <b>http://localhost:3000</b>

# Backend
Instalar os pacotes do composer e do npm, você pode fazer isso com o comando <b>npm install && composer install</b><br />
Criar uma cópia do .env.example para .env<br />
Configurar as variáveis do env de acordo com o seu banco mysql local ou docker(com imagem do mysql)<br />
Configurar a variável FEEGOW_TOKEN(token dado por vocês) no .env<br />
Rodar o comando <b>php artisan key:generate</b> e em seguida <b>php artisan serve</b>

# Atenção
O frontend é dependente do backend, precisa ter ambos rodando simultaneamente para buscar os dados.

# Documentação da API da Feegow
<b>Mais informações:</b> https://docs.feegow.com/

# Rotas do Backend
<b>URL:</b> baseURL/api/feegow/sources/list<br />
<b>Descrição:</b> Rota de listagem de origens<br />
<b>Método</b>: GET

<b>URL:</b> baseURL/api/feegow/specialties/list<br />
<b>Descrição:</b> Rota de listagem de especialidades<br />
<b>Método</b>: GET

<b>URL:</b> baseURL/api/feegow/professionals/list<br />
<b>Descrição:</b> Rota de listagem de profissionais<br />
<b>Método</b>: GET

<b>URL:</b> baseURL/api/schedules<br />
<b>Descrição:</b> Rota de listagem de schedules<br />
<b>Método</b>: GET

<b>URL:</b> baseURL/api/schedules<br />
<b>Descrição:</b> Rota de criação de schedules<br />
<b>Método</b>: POST

<b>URL:</b> baseURL/api/schedules/{id}<br />
<b>Descrição:</b> Rota de listagem de schedules por ID<br />
<b>Método</b>: GET

<b>URL:</b> baseURL/api/schedules/{id}<br />
<b>Descrição:</b> Rota de atualização de schedules por ID<br />
<b>Método</b>: PUT

<b>URL:</b> baseURL/api/schedules/{id}<br />
<b>Descrição:</b> Rota de deletar schedules por ID<br />
<b>Método</b>: DELETE
