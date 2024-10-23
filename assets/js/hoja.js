class FallingLeaf {
    constructor(imgSrc, canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.ctx = this.canvas.getContext('2d');
      this.img = new Image();
      this.img.src = imgSrc;
      this.leaves = [];
      this.maxLeaves = 10;
      
      // Ajustar tamaño del canvas a la ventana
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
  
      this.img.onload = () => {
        // Generar hojas iniciales
        for (let i = 0; i < this.maxLeaves; i++) {
          this.leaves.push(this.createLeaf());
        }
        this.fall();
      };
    }
  
    // Crear un objeto hoja con propiedades iniciales
    createLeaf() {
      return {
        x: Math.random() * this.canvas.width,  // Posición horizontal aleatoria
        y: -50,  // Comienza fuera de la pantalla
        speedY: Math.random() * 2 + 0.5,  // Velocidad de caída
        speedX: Math.random() * 2 - 1,  // Movimiento lateral por el viento
        rotation: Math.random() * 360,  // Rotación inicial aleatoria
        rotationSpeed: Math.random() * 2 - 1,  // Velocidad de rotación
        width: 50,  // Ancho de la hoja
        height: 50  // Alto de la hoja
      };
    }
  
    // Dibujar una hoja en el canvas
    drawLeaf(leaf) {
      this.ctx.save();
      this.ctx.translate(leaf.x, leaf.y);
      this.ctx.rotate((leaf.rotation * Math.PI) / 180);
      this.ctx.drawImage(this.img, -leaf.width / 2, -leaf.height / 2, leaf.width, leaf.height);
      this.ctx.restore();
    }
  
    // Lógica de animación de caída de las hojas
    fall() {
      const animate = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  
        this.leaves.forEach((leaf) => {
          // Actualizar la posición
          leaf.y += leaf.speedY;
          leaf.x += leaf.speedX;
          leaf.rotation += leaf.rotationSpeed;
  
          // Si la hoja sale de la pantalla, reiniciarla desde arriba
          if (leaf.y > this.canvas.height) {
            leaf.y = -50;
            leaf.x = Math.random() * this.canvas.width;
            leaf.speedY = Math.random() * 2 + 0.5;
          }
  
          this.drawLeaf(leaf);  // Dibujar la hoja en su nueva posición
        });
  
        // Continuar la animación
        requestAnimationFrame(animate);
      };
  
      animate();
    }
  }
  
  // Crear una instancia de FallingLeaf para generar las hojas en el canvas
  document.addEventListener('DOMContentLoaded', () => {
    new FallingLeaf('assets/img/hojaPNG.png', 'leaf-container');
  });
  