import { useState, useEffect } from "react";
import axios from "axios";

type Product = {
    id: number;
    name: string;
    description: string;
    brand: string;
    price: number;
    rating: number;
    numberOfReviews: number;
    imageUrl: string;
};

const emptyProducts: Product[] = [];

const Products = () => {
    const [products, setProducts] = useState<Product[]>(emptyProducts);

    useEffect(() => {
        axios.get<Product[]>("http://localhost:5263/catalog", {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => setProducts(response.data))
        .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h1>Catalog</h1>
            <p>Browse our amazing collection!</p>

            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
