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
      constructor(id, title, price, stock, images, onsale, supplier) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
        this._supplier = supplier;
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
    const prod1 = new Product();
    const prod2 = new Product("2","celular","129.90");
    const prod3 = new Product("3","laptop","3339.90","4","https://i.postimg.cc/Jn2C5W84/galaxy1.webp","yes");
    const prod4 = new Product("4","PC","1000.90","10","https://i.postimg.cc/Jn2C5W84/galaxy1.webp","NO","Supplier A")
    const prod5 = new Product("5","tablet","1000.90","12","https://i.postimg.cc/Jn2C5W84/galaxy1.webp","NO")

    console.log(prod1);
    console.log(prod2);
    console.log(prod3);
    console.log(prod2.title);
    console.log(prod3.onsale);

    prod4.setSupplier = "Supplier B";
    console.log(prod4.getSupplier);

    prod1.sellUnits(10);
    prod1.sellUnits(5);
    console.log(prod5);
    console.log(`Nuevo stock de ${prod5.title}: ${prod5.stock}`);