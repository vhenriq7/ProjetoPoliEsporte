# PoliEsporte

Projeto acadêmico de desenvolvimento web criado durante o curso **Técnico em Informática para Web**, na disciplina de **Programação Web**.

A proposta era desenvolver o site de uma empresa fictícia aplicando, em um projeto completo, os conteúdos trabalhados durante a disciplina. A ideia da PoliEsporte também foi aproveitada em uma atividade de **Comércio Eletrônico e Marketing**, na qual foi concebida uma empresa capaz de reunir diferentes modalidades esportivas em um único espaço.

A implementação técnica deste repositório foi realizada por mim e, após a entrega acadêmica, o projeto continuou sendo revisado e aprimorado por iniciativa própria.

> **Status:** projeto front-end demonstrativo em evolução.

## Demonstração

**Site publicado:** https://vhenriq7.github.io/ProjetoPoliEsporte/

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Bootstrap
- Web Storage API (`localStorage`)
- Git
- GitHub
- GitHub Pages

## Principais funcionalidades

- página inicial com apresentação da proposta e dos espaços esportivos;
- navegação multipágina;
- catálogo de espaços esportivos;
- páginas específicas para campo, quadra, piscina, pista, sala funcional e arena de areia;
- formulário de solicitação de reserva;
- validação de campos com JavaScript;
- bloqueio de datas anteriores à data atual;
- cadastro e login demonstrativos no front-end;
- persistência demonstrativa de nome e e-mail utilizando `localStorage`;
- área **Minha conta** com dados de exemplo;
- layout responsivo com Bootstrap e CSS personalizado;
- deploy estático pelo GitHub Pages.

## Arquitetura do projeto

O PoliEsporte foi desenvolvido como uma aplicação **front-end multipágina**, sem framework JavaScript e sem back-end nesta versão.

```text
ProjetoPoliEsporte/
├── css/
│   ├── bootstrap.min.css   # Bootstrap utilizado localmente
│   └── style.css           # Estilos próprios do projeto
├── img/                    # Imagens e recursos visuais
├── js/
│   ├── auth.js             # Cadastro, login e estado demonstrativo do usuário
│   ├── forms.js            # Validação do formulário de reserva
│   └── bootstrap.bundle.min.js
├── pages/                  # Páginas internas
├── index.html              # Página inicial
└── README.md
```

### Organização do JavaScript

O JavaScript foi separado por responsabilidade:

- `forms.js`: valida os dados do formulário de reserva, formata e verifica entradas e impede a seleção de datas passadas;
- `auth.js`: controla as validações das telas de cadastro e login, exibição de senha, formatação de telefone e persistência demonstrativa de dados do usuário no navegador.

Essa separação mantém as regras dos formulários isoladas das regras do fluxo demonstrativo de autenticação.

## Implementação técnica

### Formulário de reserva

O formulário de agenda valida nome, telefone, e-mail, espaço escolhido, data, horário e quantidade de pessoas. O campo de data recebe dinamicamente o dia atual como valor mínimo, evitando solicitações para datas anteriores.

Nesta versão, o envio representa uma **simulação front-end** da solicitação. Não existe integração com servidor, banco de dados ou sistema de pagamento.

### Cadastro e login

As telas de cadastro e login representam o fluxo de uma futura área do cliente. O JavaScript realiza validação de e-mail e senha, comparação das senhas no cadastro, formatação de telefone e controle de exibição da senha.

Nome e e-mail são armazenados no `localStorage` para demonstrar persistência de estado entre as telas e preencher a área **Minha conta**.

> O projeto não possui autenticação real. Senhas e usuários não são persistidos em servidor ou banco de dados.

### Responsividade

O projeto utiliza o sistema de grid e componentes responsivos do Bootstrap em conjunto com estilos próprios em `style.css`, permitindo adaptação das páginas para diferentes larguras de tela.

### Deploy

A aplicação é totalmente estática e está publicada por meio do **GitHub Pages**, diretamente a partir do repositório.

## Contexto acadêmico

O projeto nasceu na disciplina de **Programação Web**, durante o curso Técnico em Informática para Web. A atividade propunha a criação de um site para uma empresa fictícia, aplicando os conhecimentos estudados ao longo da formação.

A proposta da empresa veio de outra atividade acadêmica, de **Comércio Eletrônico e Marketing**. A ideia era estruturar um negócio do zero e, considerando a realidade de cidades menores, surgiu a proposta de um centro que reunisse diferentes modalidades esportivas, aulas e locação de espaços em um único local.

Com isso, a mesma ideia de negócio serviu como contexto para o desenvolvimento do site, conectando a proposta comercial ao trabalho técnico de Programação Web.

## Evolução após a entrega

Depois da versão apresentada no curso, continuei trabalhando no projeto por conta própria. Entre as revisões realizadas estão ajustes de layout, navegação, responsividade, formulários, validações, área do usuário e experiência de uso.

Hoje o projeto também funciona como parte do meu portfólio e como base para praticar a evolução de um front-end estático para uma aplicação mais completa.

## Limitações atuais

A versão publicada é propositalmente front-end. Portanto, alguns fluxos demonstram a experiência planejada, mas ainda não executam processamento no servidor.

Atualmente não há:

- back-end;
- banco de dados;
- autenticação real;
- persistência real das reservas;
- consulta de disponibilidade em tempo real;
- confirmação automática de agendamento;
- processamento de pagamentos.

## Roadmap

Próximas evoluções planejadas:

- [ ] criar back-end para o sistema de reservas;
- [ ] desenvolver uma API REST;
- [ ] integrar banco de dados;
- [ ] implementar autenticação de usuários;
- [ ] persistir reservas e histórico por usuário;
- [ ] criar controle de disponibilidade de horários;
- [ ] permitir confirmação do agendamento pelo próprio sistema;
- [ ] integrar meio de pagamento;
- [ ] revisar tipografia e detalhes de interface;
- [ ] continuar melhorando acessibilidade e experiência do usuário.

## Observação sobre o conteúdo

A **PoliEsporte é uma empresa fictícia criada para fins acadêmicos**. Dados comerciais, contatos, endereço, avaliações e demais informações apresentadas no site fazem parte da simulação do projeto.

## Autor

**Victor Henrique Rocha Oliveira**

- GitHub: https://github.com/vhenriq7
- LinkedIn: https://www.linkedin.com/in/vhenriq7
