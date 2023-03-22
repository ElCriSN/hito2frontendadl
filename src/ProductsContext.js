import { createContext, useState, useEffect } from "react";
const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  //UseState statements
  const [products, setProductos] = useState([]);
  const [cart, setcart] = useState([]);
  const [items, setitems] = useState(0);
  const [total, settotal] = useState(0);
  const [orders, setPedidos] = useState([]);
  const [productoNuevo, setproductoNuevo] = useState([]);
  const [user, setUser] = useState([]);
  //async function to call the api and get the array data
  const apiProductos = async () => {
    const endpoint = "http://localhost:3000/productos";
    const resp = await fetch(endpoint);
    const data = await resp.json();
    setProductos(data);
  };

  const apiPedidos = async () => {
    const endpoint = "http://localhost:3000/user/pedidos";
    const resp = await fetch(endpoint);
    const data = await resp.json();
    setPedidos(data);
  };

  const apiUser = async () => {
    const endpoint = "http://localhost:3000/user";
    const resp = await fetch(endpoint);
    const data = await resp.json();
    setUser(data);
  };

  // use effect to call the api
  useEffect(() => {
    apiProductos();
    apiPedidos();
    apiUser()
  }, []);

  // Add to Cart function,
  const addCart = ({ id, precio, nombre, img_url }) => {
    // looking the index of the item by id
    const index = cart.findIndex((producto) => producto.id === id);
    //adding Detais from pizza to cart and set count to 1
    const productoDetails = { id, precio, nombre, img_url, count: 1 };

    if (index >= 0) {
      cart[index].count++;
      setcart([...cart]);
    } else {
      setcart([...cart, productoDetails]);
    }
  };
  //function increment item by index to increment count everytime while button has been clicked
  const increment = (i) => {
    cart[i].count++;
    setcart([...cart]);
  };

  //function decremnt item by index to decrement count only if count is > 1  everytime while button has been clicked, if count if 1 remove item from cart
  const decrement = (i) => {
    const { count } = cart[i];
    if (count === 1) {
      cart.splice(i, 1);
    } else {
      cart[i].count--;
    }
    setcart([...cart]);
  };

  // all state and function needed to be called in other components or views

  return (
    <ProductsContext.Provider
      value={{
        products,
        cart,
        items,
        total,
        productoNuevo,
        orders,
        user,
        setitems,
        setProductos,
        setcart,
        addCart,
        increment,
        decrement,
        settotal,
        setproductoNuevo,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider };
export default ProductsContext;
