describe('Pesquisa no Google', () => {
    it('Deve pesquisar o Magazine Luiza e, em seguida, as Americanas', () => {
      // Abra o Google
      cy.visit('https://www.google.com');
  
      // Localize o campo de pesquisa e digite "Magazine Luiza"
      cy.get('[name="q"]').type('Magazine Luiza');
  
      // Pressione Enter para realizar a pesquisa
      cy.get('[name="q"]').type('{enter}');
  
      // Aguarde alguns segundos para que os resultados da pesquisa sejam exibidos
      cy.wait(2000);
  
      // Verifique se a página contém o link do Magazine Luiza nos resultados
      cy.contains('www.magazineluiza.com.br');
  
      // Localize o campo de pesquisa novamente e limpe-o
      cy.get('[name="q"]').clear();
  
      // Verifique se o campo de pesquisa está em branco
      cy.get('[name="q"]').should('have.value', '');
  
      // Digite "Americanas" no campo de pesquisa
      cy.get('[name="q"]').type('Americanas');
  
      // Pressione Enter para realizar a pesquisa
      cy.get('[name="q"]').type('{enter}');
  
      // Aguarde alguns segundos para que os resultados da pesquisa sejam exibidos
      cy.wait(2000);
  
      // Verifique se a página contém o link das Americanas nos resultados
      cy.contains('www.americanas.com.br');
    });
  });
  