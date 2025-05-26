const args = process.argv.slice(2);
const [method, data, argTitle, argPrice, argCategory] = args;

// Creación de un registro, método POST
const createItem = (data="products",title="Título", price="Precio", category="Categoría") => {
  let valid = true;
  const product = {title: title, price: price, category: category};
  let config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  };
  if (valid) {
    fetch('https://fakestoreapi.com/products', config)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log("Error: ", error));
  };
};

// Lectura de registros, método GET
const readItem = (data="products") => {
  let valid = false;
  let modifier = "";
  if (data == "products"){
    modifier = ""
    valid = true;
  } else if (data.slice(8,9) == "/" && !isNaN(data.slice(9))) {
    modifier = data.slice(8);
    valid = true;
  };
  
  if (valid) {
    fetch('https://fakestoreapi.com/products' + modifier)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log("Error: ", error));
  };
}; 

// Modificación de un registro, método PUT
const updateItem = (data="products", title="Título", price="Precio", category="Categoría") => {
  
};

// Eliminación de un registro, método DELETE
const deleteItem = (data) => {
  let valid = false;
  let config = {method: 'DELETE'};
  let index = "";
  if (data.slice(8,9) == "/" && !isNaN(data.slice(9))) {
    index = data.slice(9,10);
    valid = true;
  };  
  if (valid) {
    fetch('https://fakestoreapi.com/products/' + index, config)
      .then(response => response.json())
      .then(json => console.log(json))
      .then(confirmation => console.log(`Se eliminó correctamente el registro ${index}`))
      .catch(error => console.log("Error: ", error));
  };
};


switch(method){
  case "GET":
    readItem(data);
    break
  case "POST":
    if (!data){
      console.log("El método requiere al menos un argumento identificador");
      break
    }
    createItem(data, argTitle, argPrice, argCategory);
    break
  case "PUT":
    if (!data){
      console.log("El método requiere al menos un argumento identificador");
      break
    }
    updateItem(data, argTitle, argPrice, argCategory);
    break
  case "DELETE":
    if (!data){
      console.log("El método requiere al menos un argumento identificador");
      break
    }
    deleteItem(data);
    break
  default:
    console.log(`El método "${method}" no está soportado. Utilice GET, POST, PUT o DELETE`);
    break
};