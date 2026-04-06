# 🏆 O Desafio: API de Coleções

Este projeto prático tem como objetivo consolidar o aprendizado na construção de APIs RESTful utilizando Node.js, Express e MongoDB (Mongoose). 

**Valor:** 10 pontos na média.  
**Modalidade:** Individual.  
**Atenção:** O projeto deve ser criado **DO ZERO**. Você não pode clonar ou fazer o projeto em cima do meu repositório. O meu código serve **apenas para consulta**.

---

## 📌 O Tema

Cada aluno deve escolher um hobby ou algo que coleciona/gosta muito (Ex: jogos, discos, livros, hot wheels, funkos, etc) e construir um CRUD completo em cima disso.

> **Regra:** Nenhum projeto pode ter o mesmo tema que o de outro colega. Escolha o seu e comunique a turma!

---

## ⚙️ Requisitos Técnicos

### 1. Arquitetura MVC
O projeto deve seguir estritamente a arquitetura de pastas que desenvolvemos em aula:
- `src/controllers`
- `src/models`
- `src/routes`
- `startup/db.js`

### 2. Banco de Dados e Models
Sua API deverá ter **duas coleções (tabelas) interligadas**:

#### **Model 1: Amigos (Colecionadores)**
- Uma tabela para cadastrar seus amigos.
- Deve conter as informações básicas de quem está colecionando os itens.

#### **Model 2: O Item da Coleção (Seu Tema)**
- Os produtos devem ser **obrigatoriamente associados aos amigos** (cada amigo tem os seus próprios itens colecionados). Ou seja, esse Model deve ter uma referência (`ObjectId`) ao Model de Amigos.
- Deve ter **pelo menos 4 campos**.
- É obrigatório ter pelo menos: um campo `String`, um `Number` e um `Boolean`.
- **Validação Extra:** Pelo menos um campo numérico deve ter uma validação customizada do Mongoose além do `required` *(Ex: uma nota só pode ser de 0 a 10; um ano de lançamento não pode ser no futuro)*.
- **Soft Delete:** Adicione um campo `isActive: Boolean` (com valor padrão `true`).

### 3. Controllers e Funcionalidades
Os controllers do seu item de coleção devem implementar as seguintes regras:

- **CRUD Completo:** Criar, Listar Todos, Buscar por ID, Atualizar e Deletar.
- **Filtros e Buscas Customizadas (Query Params):** - No endpoint de listagem (`GET`), a API deve aceitar parâmetros de URL opcionais para filtrar os dados.
  - Exija pelo menos **dois filtros opcionais**. Se o parâmetro for enviado, a API deve retornar a lista filtrada.
  - *Exemplo:* `GET /jogos?genero=RPG` ou `GET /discos?ano=1990`
- **Soft Delete (Deleção Lógica):** - A rota de Deletar **NÃO** deve usar `findByIdAndDelete` ou apagar o registro fisicamente do banco.
  - A rota de delete deve apenas atualizar o campo `isActive` para `false`.
  - A rota de Listagem (`GET`) deve ser alterada para trazer **apenas** os registros onde `isActive` seja `true`.
- **Tratamento de Erros:** Use blocos `try/catch` em todas as funções e retorne os Status HTTP corretos (`200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`, `500 Internal Server Error`).

### 4. Documentação README
O seu repositório deve conter um arquivo `README.md` na raiz. Nele, você deve:
- Explicar qual é o tema do projeto.
- Para que o projeto serve.
- Como rodar o projeto na máquina local (quais comandos rodar, como instalar as dependências).

---

## 🚀 Entrega e Regras do GitHub (MUITO IMPORTANTE)

A entrega será feita enviando o link do repositório público do GitHub para o professor.

🚨 **Regra dos Commits (Risco de Zerar o Trabalho):**
- É estritamente **PROIBIDO** fazer um único commit (ex: *"initial commit"*) com o projeto inteiro já pronto.
- O repositório deve ter **no mínimo 3 commits** que mostrem a evolução do seu trabalho. 

*Exemplo de evolução aceitável:*
1. Commit 1: *"Configurando express e conexão com banco"*
2. Commit 2: *"Criando Models de Amigos e Jogos"*
3. Commit 3: *"Adicionando Controllers de criação e listagem"*
4. Commit 4: *"Implementando filtros e soft delete"*

**Se o repositório tiver menos de 3 commits ou um commit gigante com tudo pronto, a nota será ZERO (perde os 10 pontos).**

---
*Mãos à obra e boa codificação!*
