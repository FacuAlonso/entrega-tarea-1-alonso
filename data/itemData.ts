type Producto = {
  id: string;
  titulo: string;
  precio: string;
  descripcion: string;
  imagen: any;
};

const DATA: Producto[] = [
  {
    id: "1",
    titulo: "Mouse Logitech G502",
    precio: "$45.000",
    descripcion: "Mouse gamer de alta precisión",
    imagen: require("../assets/itemPictures/mouseLogitech.png"), 
  },
  {
    id: "2",
    titulo: "Monitor Gamer Asus",
    precio: "$295.000",
    descripcion: "Monitor de 144Hz IPS gamer",
    imagen: { uri: "https://i.imgur.com/yi3kFhe.png" }, 
  },
  {
    id: "3",
    titulo: "Auriculares Steelseries Arctis 7 Wireless",
    precio: "$150.500",
    descripcion: "Auriculares inalámbricos - PC Gaming",
    imagen: { uri: "https://i.imgur.com/Z4dG9Nv.png" }, 
  },
  {
    id: "4",
    titulo: "Teclado Mecánico HyperX Alloy FPS",
    precio: "$85.000",
    descripcion: "Teclado mecánico con switches Cherry MX",
    imagen: { uri: "https://i.imgur.com/8QfQ2wT.png" },
  },
  {
    id: "5",
    titulo: "Silla Gamer Cougar Armor One",
    precio: "$210.000",
    descripcion: "Silla ergonómica para gamers",
    imagen: { uri: "https://i.imgur.com/3QfQ2wT.png" },
  },
  {
    id: "6",
    titulo: "Webcam Logitech C920",
    precio: "$60.000",
    descripcion: "Webcam Full HD para streaming",
    imagen: { uri: "https://i.imgur.com/4QfQ2wT.png" },
  },
  {
    id: "7",
    titulo: "Micrófono Blue Yeti",
    precio: "$120.000",
    descripcion: "Micrófono profesional USB",
    imagen: { uri: "https://i.imgur.com/5QfQ2wT.png" },
  },
  {
    id: "8",
    titulo: "Mousepad XL Razer Goliathus",
    precio: "$25.000",
    descripcion: "Mousepad tamaño XL para gaming",
    imagen: { uri: "https://i.imgur.com/6QfQ2wT.png" },
  },
  {
    id: "9",
    titulo: "SSD Kingston 1TB NVMe",
    precio: "$95.000",
    descripcion: "Disco sólido NVMe de alta velocidad",
    imagen: { uri: "https://i.imgur.com/7QfQ2wT.png" },
  },
  {
    id: "10",
    titulo: "Tarjeta Gráfica NVIDIA RTX 4060",
    precio: "$650.000",
    descripcion: "GPU de última generación para gaming",
    imagen: { uri: "https://i.imgur.com/8QfQ2wT.png" },
  },
  {
    id: "11",
    titulo: "Procesador Intel Core i7 12700K",
    precio: "$420.000",
    descripcion: "Procesador de alto rendimiento",
    imagen: { uri: "https://i.imgur.com/9QfQ2wT.png" },
  },
  {
    id: "12",
    titulo: "Memoria RAM Corsair 16GB DDR4",
    precio: "$60.000",
    descripcion: "Memoria RAM para PC gamer",
    imagen: { uri: "https://i.imgur.com/10QfQ2wT.png" },
  },
  {
    id: "13",
    titulo: "Fuente Corsair 750W Modular",
    precio: "$80.000",
    descripcion: "Fuente de poder modular para PC",
    imagen: { uri: "https://i.imgur.com/11QfQ2wT.png" },
  },
  {
    id: "14",
    titulo: "Gabinete NZXT H510",
    precio: "$110.000",
    descripcion: "Gabinete compacto y elegante",
    imagen: { uri: "https://i.imgur.com/12QfQ2wT.png" },
  },
  {
    id: "15",
    titulo: "Cooler Líquido Cooler Master ML240",
    precio: "$95.000",
    descripcion: "Refrigeración líquida para CPU",
    imagen: { uri: "https://i.imgur.com/13QfQ2wT.png" },
  },
  {
    id: "16",
    titulo: "Control Xbox Series X",
    precio: "$70.000",
    descripcion: "Control inalámbrico para PC y Xbox",
    imagen: { uri: "https://i.imgur.com/14QfQ2wT.png" },
  },
  {
    id: "17",
    titulo: "Auriculares Logitech G Pro X",
    precio: "$130.000",
    descripcion: "Auriculares profesionales para eSports",
    imagen: { uri: "https://i.imgur.com/15QfQ2wT.png" },
  },
  {
    id: "18",
    titulo: "Monitor LG UltraGear 27''",
    precio: "$320.000",
    descripcion: "Monitor IPS 165Hz para gaming",
    imagen: { uri: "https://i.imgur.com/16QfQ2wT.png" },
  },
  {
    id: "19",
    titulo: "Teclado Razer BlackWidow V3",
    precio: "$110.000",
    descripcion: "Teclado mecánico RGB",
    imagen: { uri: "https://i.imgur.com/17QfQ2wT.png" },
  },
  {
    id: "20",
    titulo: "Mouse Glorious Model O",
    precio: "$55.000",
    descripcion: "Mouse ultraligero para gaming",
    imagen: { uri: "https://i.imgur.com/18QfQ2wT.png" },
  },
  {
    id: "21",
    titulo: "Auriculares HyperX Cloud II",
    precio: "$95.000",
    descripcion: "Auriculares con sonido envolvente",
    imagen: { uri: "https://i.imgur.com/19QfQ2wT.png" },
  },
  {
    id: "22",
    titulo: "Monitor Samsung Odyssey G5",
    precio: "$340.000",
    descripcion: "Monitor curvo 144Hz",
    imagen: { uri: "https://i.imgur.com/20QfQ2wT.png" },
  },
  {
    id: "23",
    titulo: "Mousepad Steelseries QcK",
    precio: "$20.000",
    descripcion: "Mousepad profesional para eSports",
    imagen: { uri: "https://i.imgur.com/21QfQ2wT.png" },
  }
];

export default DATA