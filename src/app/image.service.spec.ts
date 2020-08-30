import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
  });

  describe('getImages', () => {
    it('cuando se llame el metodo entonces debe retornar todas (5) imagenes', () =>{
      //Arrange (preparacion de la prueba)
      //Ya se hizo el before  
      //Act (llamar la cosa que estoy haciendo)
      let resp = service.getImages();
      //Assert
      expect(resp.length).toBe(5);
    })
  })

  describe('getImage', () => {
    it('cuando se envie 3 (que está dentro de la lista) entonces debe retornar este elemento', () =>{
      const id = 3;
      let resp = service.getImage(id)
      expect(resp.brand).toBe('gato');
      expect(resp.url).toBe('assets/images/gato1.jpg');
    });
    it('cuando se envie 7 (que no está dentro de la lista) entonces debe retornar indefinido', () =>{
      const id = 7;
      let resp = service.getImage(id)
      expect(resp).toBeUndefined();
    })
  })
});
