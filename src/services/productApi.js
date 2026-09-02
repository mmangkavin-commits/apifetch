export const baseUrl = import.meta.env.VITE_BASE_URL;

export function getAllProducts() {
    const response = fetch(`${baseUrl}products`)
        .then((res) => res.json())
        .then((data) => console.log('Response:', data.products));
    // console.log(response.products);
}