# Algumas explicações

## Decisões Front-end

- Foi escolhido Vue, pois é um framework que estou aprendendo, então prefiro fazer nele para poder aprimorar o conhecimento. Mesmo que não esteja fazendo ele componentizado, acredito que seja interessante.

- Foi utilizado os CND na construção do front, pois agiliza o desenvolvimento inicial. Em um produto para produção, e não um teste, colocaria os JS dentro da aplicação para não depender de links externos.

- Com certeza o front end não esta construido da melhor maneira e de uma maneira que seja fácil de dar manutenção, mas como é um projeto de teste e para facilitar rodar o projeto, resolvi fazer ele monolitico e contruir ele dessa maneira. O correto seria criar um projeto Vue separado mesmo e nele implementar da maneira correta, que seria componentizando.

- A tela de inserir ofertas não é uma tela muito legal para o usuário, mas foquei em deixar ela funcional, mesmo não validando os dados nos inputs e nem aplicando as mascaras necessarias, como a de dinheiro, por exemplo.

# TODO

- [X] Arquitetura da aplicação web e todos os mecanismos envolvidos para suportar o desenvolvimento.
- [X] Modelagem e persistência de dados.
- [X] Interface gráfica para inserir uma oferta.
- [x] Interface gráfica para inserir uma opção de compra.
- [x] Interface gráfica para associar as opções de compra na oferta selecionada.
- [ ] Exibição de uma oferta e suas opções de compra (veja figura 1).
- [ ] Processar a "venda" de uma determinada opção de compra e realizar a atualização dos itens vendidos e seus totais.