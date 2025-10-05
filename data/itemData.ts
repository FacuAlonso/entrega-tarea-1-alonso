import { DB_API_CONF } from "@/db_conf";

export type Producto = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

export async function getProducts() {
  try {
    const res = await fetch(`${DB_API_CONF.URL}/products`);
    if (!res.ok) throw new Error("Error al cargar productos");
    return await res.json();
  } catch (err) {
    console.error("Error en GET Products:", err);
    return [];
  }
}

export async function createProduct(payload: {
  name: string;
  price: number;
  description: string;
  image: string;
}) {
  try {
    const res = await fetch(`${DB_API_CONF.URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Error creando producto");
    return await res.json();
  } catch (err) {
    console.error("Error en CREATE Product:", err);
    return null;
  }
}
