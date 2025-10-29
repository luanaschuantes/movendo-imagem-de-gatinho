// 1. Obter o elemento da imagem
const gatinho = document.getElementById('gatinho');

// 2. Variáveis de estado e velocidade
let posX = 0; // Posição X (horizontal) em pixels
let posY = 0; // Posição Y (vertical) em pixels

// Velocidade de movimento (pixels por frame)
let velocidadeX = 2; 
let velocidadeY = 2; 

// Atraso de tempo para as bordas (largura/altura da imagem)
const offset = 120; // O mesmo tamanho definido no CSS

// 3. Função principal que move o gatinho
function animarGatinho() {
    // Dimensões da janela (viewport)
    const larguraMax = window.innerWidth;
    const alturaMax = window.innerHeight;

    // ----------------------
    // Lógica de Movimento Horizontal (X)
    // ----------------------
    posX += velocidadeX;
    
    // Verifica se a imagem atingiu a borda direita ou esquerda
    if (posX + offset > larguraMax || posX < 0) {
        velocidadeX = -velocidadeX; // Inverte a direção
    }

    // ----------------------
    // Lógica de Movimento Vertical (Y)
    // ----------------------
    posY += velocidadeY;
    
    // Verifica se a imagem atingiu a borda inferior ou superior
    // OBS: Ajuste o 'offset' de acordo com o tamanho da imagem e o 'h1'
    if (posY + offset > alturaMax || posY < 50) { // O 50px evita que suba demais por causa do título
        velocidadeY = -velocidadeY; // Inverte a direção
    }

    // Aplica as novas posições ao elemento da imagem
    gatinho.style.left = posX + 'px';
    gatinho.style.top = posY + 'px';

    // Chama a função novamente para o próximo quadro (cerca de 60 vezes por segundo)
    requestAnimationFrame(animarGatinho);
}

// 4. Inicia a animação (após o carregamento completo da página)
window.onload = function() {
    // Define a posição inicial no meio da tela
    posX = window.innerWidth / 2;
    posY = window.innerHeight / 2;
    
    animarGatinho();
};
