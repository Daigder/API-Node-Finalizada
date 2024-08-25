# API-Node-Finalizada

## Primeira parte da atividade proposta:
Fazendo requisições HTTP - Extra Para encerrar este exercício, vamos adicionar uma validação no cep, para evitarmos enviar um cep inválido para a api que estamos consumindo. Portanto, será necessário adicionar uma condição que faça um teste entre o cep informado na chamada a nossa api, e uma expressão regular (RegEx) que validará essas informações. Em Javascript podemos criar uma expressão regular declarando uma variável/constante, passando o texto da expressão entre contra-barras (). A expressão regular para validar cep é: 4[0-9]5}-?[09143}$ No Javascript ficará: const cepRegex = /^[0-9]{5}-?[09]{3}$/; Para validar o cep informado contra a expressão regular usaremos cepRegex.test(cep), caso não seja válido deveremos retornar um status http 400 com a mensagem "CEP inválido. Formato: XXXXX-XXX

### Imagem do Cep Correta
![Imagem do cep correto projeto front e back](https://github.com/user-attachments/assets/4c335d4d-48f8-43db-9bfc-642bb7e9b35b)

### Imagem do Cep incorreta
![Imagem do cep incorreta do projeto front e back](https://github.com/user-attachments/assets/5181b7d5-6733-4b3b-9d43-e05539cbc990)

## Segunda parte da atividade proposta: 
Na segunda parte da atividade, vamos configurar e estabelecer uma conexão com o banco de dados PostgreSQL. Essa etapa é crucial para garantir que nossa aplicação possa se comunicar corretamente com o banco de dados, permitindo a leitura e gravação de dados. A configuração da conexão envolverá a especificação das credenciais de acesso, como o nome do banco de dados, usuário, senha e endereço do servidor PostgreSQL. Uma vez estabelecida a conexão, poderemos interagir com o banco de dados e realizar operações como consultas, inserções e atualizações de dados.

###  Agora vou começar a montar o banco no POSTGRES, usando os seguintes comandos:
![image](https://github.com/user-attachments/assets/3646eb3d-3741-4971-972e-dd1958075416)

###  Primeiro Comando:
O comando "npm run db:create:test" é usado para criar um banco de dados destinado ao ambiente de teste.

![image](https://github.com/user-attachments/assets/90b9352b-af45-418e-b060-05035121d102)

###  Segundo Comando:
O comando "npm run db:create:production" cria o banco de dados para o ambiente de produção. Este é o banco de dados onde são armazenados os dados reais dos usuários e das transações. É o banco que a versão final da aplicação utiliza quando está disponível para os usuários finais.

![image](https://github.com/user-attachments/assets/8c0e25b0-7027-483a-ad24-0a427524dee2)

###  Terceiro Comando:
o comando "npm run db:create:dev" cria um banco de dados para o ambiente de desenvolvimento. Esse banco é utilizado durante o desenvolvimento da aplicação, permitindo que os desenvolvedores testem e validem novas funcionalidades e alterações sem impactar o banco de dados de produção ou de teste.

![image](https://github.com/user-attachments/assets/d2ad2331-985f-4c4b-96e3-ab9ee47dd029)

###  Database Criadas: 
Na primeira vez que você for validar a database ela vai estar sem cor, basta clicar no icone para atualizar e irá ficar igual o da imagem.

![image](https://github.com/user-attachments/assets/3a05a53a-3a4a-4e8e-b119-ae648f008380)

###  Geração de Modelo Sequelize para Endereço com Atributos Definidos
Quando executar este comando, o Sequelize CLI gera um novo arquivo de modelo no diretório models da sua aplicação. Este arquivo define a estrutura da tabela Endereco no banco de dados com os atributos especificados, além de criar um arquivo de migração que pode ser usado para criar a tabela no banco de dados.

![image](https://github.com/user-attachments/assets/341427c3-6a4d-4893-b711-03a44ec4b57b)

###  Aplicação de Migrações ao Banco de Dados com Sequelize
O comando "npx sequelize-cli db:migrate" é para manter o banco de dados sincronizado com as alterações estruturais definidas nos arquivos de migração, facilitando o gerenciamento e a evolução do esquema do banco de dados durante o desenvolvimento da aplicação.

![image](https://github.com/user-attachments/assets/2566bbf0-2be5-4b88-8adc-7b849f5c754a)

### Imagem da tabela criada 
A imagem mostra que foi criada com sucesso a tabela e colunas com as seguintes categorias: Id, Cep, Logrodouro, Numero, Complemento, Bairro, Cidade, Estado, MunicipioIBGE, CreatedAt e UpdatedAt.

![image](https://github.com/user-attachments/assets/b2c781b2-73e3-45c9-8246-e4a46c6589f5)

###  Tela com o Cep:
Na imagem podemos ver que os Cep "86047150" e "86047360" foram localizados com sucesso. 

![image](https://github.com/user-attachments/assets/93b936db-677b-4d11-a2e9-f298e5e20f2a)
![63c2eb15-0518-4f87-bc63-64964e5ef115](https://github.com/user-attachments/assets/53c53509-d21f-4d34-81d7-1a3d768acff1)


###  Visualização pelo Postgres:
Para visualizar basta clicar em Schemas / Tables / Endereco, clique com o direito em cima de Endereco e procure por View/Edit Data e depois so clicar em All Rows.
Na imagem podemos ver que os dados foram para o PostgresSQL e dessa forma o banco de dados foi feito com sucesso.

![image](https://github.com/user-attachments/assets/281f782b-732c-4f16-80a1-83f12daea8b8)


