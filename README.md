# PoliEsporte

Projeto acadêmico de desenvolvimento web criado durante o curso Técnico em Informática para Web, na disciplina de Programação Web.

A proposta do trabalho era desenvolver um site para uma empresa fictícia aplicando, de forma prática, os conteúdos estudados ao longo da disciplina. A ideia da PoliEsporte surgiu em conjunto com outro projeto acadêmico de Comércio Eletrônico e Marketing, no qual foi pensada uma empresa voltada à oferta de diferentes modalidades esportivas em um mesmo espaço.

O projeto foi posteriormente revisado e aprimorado por iniciativa própria, com ajustes de layout, navegação, formulários e experiência de uso.

## Demonstração

Site publicado no GitHub Pages:

https://vhenriq7.github.io/ProjetoPoliEsporte/

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap
- LocalStorage
- Git
- GitHub
- GitHub Pages

## Funcionalidades

- Página inicial com apresentação da empresa e dos espaços esportivos
- Navegação entre múltiplas páginas
- Catálogo de espaços esportivos
- Páginas específicas para campo, quadra, piscina, pista, sala funcional e arena de areia
- Formulário de solicitação de reserva
- Validação de campos em JavaScript
- Bloqueio de seleção de datas anteriores à data atual
- Cadastro e login demonstrativos no front-end
- Persistência de nome e e-mail do usuário com LocalStorage
- Área "Minha conta" com dados demonstrativos
- Layout responsivo com Bootstrap
- Publicação do projeto com GitHub Pages

## Estrutura do projeto

```text
ProjetoPoliEsporte/
├── css/        # Bootstrap e estilos personalizados
├── img/        # Imagens utilizadas no projeto
├── js/         # Scripts de formulários, cadastro e login
├── pages/      # Páginas internas da aplicação
├── index.html  # Página inicial
└── README.md
```

## Implementação técnica

### Formulário de reserva

O formulário de agenda utiliza JavaScript para validar os dados informados pelo usuário, incluindo nome, telefone, e-mail, espaço escolhido, data, horário e quantidade de pessoas. O campo de data também impede a seleção de datas anteriores ao dia atual.

Nesta versão, o envio representa uma simulação front-end da solicitação. Não há integração com back-end, banco de dados ou sistema de pagamento.

### Cadastro e login

As telas de cadastro e login foram implementadas como uma demonstração de fluxo de autenticação no front-end. O JavaScript realiza validações de campos, formatação de telefone, comparação de senhas e controle de exibição da senha.

O nome e o e-mail são armazenados no `localStorage` do navegador para demonstrar a persistência de dados na área "Minha conta".

> Importante: o projeto não possui autenticação real em servidor nem banco de dados de usuários.

## Contexto do projeto

O PoliEsporte foi desenvolvido a partir de duas atividades acadêmicas relacionadas.

Na disciplina de Programação Web, o objetivo era criar o site de uma empresa fictícia utilizando os conhecimentos adquiridos durante o curso técnico.

Em paralelo, em uma atividade de Comércio Eletrônico e Marketing, foi desenvolvida a proposta de uma empresa que reunisse diferentes modalidades esportivas em um único local. A ideia considerava a dificuldade de encontrar estruturas desse tipo em cidades menores.

A mesma proposta de negócio foi utilizada como base para o desenvolvimento do site, permitindo aplicar o conteúdo técnico de Programação Web em um projeto com um contexto de uso definido.

## Limitações atuais

O projeto atualmente funciona como uma aplicação front-end demonstrativa. Alguns fluxos representam como o sistema poderia funcionar em uma aplicação completa, mas ainda não possuem processamento em servidor.

Entre as limitações atuais estão:

- ausência de back-end
- ausência de banco de dados
- autenticação apenas demonstrativa
- reservas sem persistência real
- ausência de confirmação automática de disponibilidade
- ausência de processamento de pagamentos

## Próximas melhorias

Pretendo evoluir o projeto gradualmente para uma aplicação mais completa, incluindo:

- criação de um back-end
- desenvolvimento de uma API REST
- integração com banco de dados
- autenticação real de usuários
- persistência das reservas
- controle de disponibilidade de horários
- confirmação de agendamentos pelo próprio sistema
- histórico real de reservas por usuário
- integração com meios de pagamento
- melhorias de layout, tipografia e experiência do usuário

## Autor

**Victor Henrique Rocha Oliveira**

- GitHub: https://github.com/vhenriq7
- LinkedIn: https://www.linkedin.com/in/vhenriq7
