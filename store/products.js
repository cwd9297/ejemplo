//const producto1 = {
  //  nombre: "celular",
    //precio: 100000,
//    stock: 2
  //  };

//console.log(producto1);

  //  producto1.id = "id123";
   // producto1.foto = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";
    
   // console.log(producto1);

   // console.log(producto1.nombre);

   class Product {
      constructor(id, title, price, stock, images, onsale, colors, description, supplier) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
        this._supplier = supplier;
        this.colors = colors;
        this.description = description;
      }
    
        get getSupplier() {
        return this._supplier;
        }
        set setSupplier(newName) {
        this._supplier = newName;
        }

        sellUnits(units) {
            this.stock = this.stock - units
        }
    }

    const prod1Images = ["https://m.media-amazon.com/images/I/716OmvUFy1L._AC_SL1500_.jpg", "https://i.postimg.cc/Jn2C5W84/galaxy1.webp", "https://radiokable.net/wp-content/uploads/2022/03/shutterstock_2074158227-scaled.jpg"];
    const prod2Images = ["https://m.media-amazon.com/images/I/716OmvUFy1L._AC_SL1500_.jpg", "https://i.postimg.cc/Jn2C5W84/galaxy1.webp", "https://img.freepik.com/vector-premium/vector-telefono-celular-rojo-pantalla-azul-que-representa-tecnologia-comunicacion-modernas_410516-100330.jpg?w=740"];
    const prod3Images = ["https://m.media-amazon.com/images/I/716OmvUFy1L._AC_SL1500_.jpg", "https://i.postimg.cc/Jn2C5W84/galaxy1.webp"];

    const prod1 = new Product("1","smartphone","399.90","10",prod1Images,"NO", "gris","barato");
    const prod2 = new Product("2","celular","129.90","20",prod2Images,"YES","blue","precio accesible");
    const prod3 = new Product("3","laptop","3339.90","4",prod3Images,"yes","negro","bastante ligera");
    const prod4 = new Product("4","PC","1000.90","10","https://i.postimg.cc/Jn2C5W84/galaxy1.webp","NO","plomo","es una gamers","Supplier A")
    const prod5 = new Product("5","tablet","1000.90","12","https://i.postimg.cc/Jn2C5W84/galaxy1.webp","NO","red","esencial para niños")
    const prod6 = new Product("6","TV","4999.90","112","https://i.postimg.cc/Jn2C5W84/galaxy1.webp","YES","azul oscuro","50 pulgadas")

    //console.log(prod1);
    //console.log(prod2);
  //  console.log(prod3);
    //console.log(prod2.title);
    //console.log(prod3.onsale);

    //prod4.setSupplier = "Supplier B";
    //console.log(prod4.getSupplier);

    //prod1.sellUnits(10);
    //prod1.sellUnits(5);
   // console.log(prod5);
   // console.log(`Nuevo stock de ${prod5.title}: ${prod5.stock}`);
   const products = [prod1, prod2, prod3, prod4];

   // Impresión del array completo
    console.log("Array completo:");
    console.log(products);
    // Impresión del segundo elemento del array
    console.log("\nSegundo elemento del array:");
    console.log(products[1]);

    const ultimoElemento = products[products.length - 1];
    console.log("Último elemento del array:");
    console.log(ultimoElemento.title);

    products.unshift(prod5);
    // Imprimir el array completo para observar los cambios
    console.log("Array completo después de agregar prod5 al inicio:");
    console.log(products);

    products.push(prod6);
    //Imprimir el array completo para observar los cambios
    console.log("Array completo después de agregar prod6 al final:");
    console.log(products);

    // Imprimir el último elemento del array para confirmar que prod6 está al final
    console.log("\nÚltimo elemento del array después de agregar prod6:");
    console.log(products[products.length - 1]);

    //ELIMAR PRIMER Y ULTIMO ELEMENTO con shift y pop
    const primerElementoEliminado = products.shift();
    const ultimoElementoEliminado = products.pop();

    // Imprimir el array completo después de quitar el primer elemento y el último
    console.log("Array completo después de quitar el primer elemento:");
    console.log(products);


    // Impresión de las imágenes del primer producto para verificar
        console.log("\nImágenes del primer producto:");
        console.log(prod1.images);
    // Impresión de las imágenes del segundo producto para verificar
        console.log("\nImágenes del segundo producto:");
        console.log(prod2.images);
    //array completo luego de agregar las imagenes finales
        console.log("Array completo de productos después de definir las imágenes:");
        console.log(products);


