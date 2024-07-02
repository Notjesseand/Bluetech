import axios from "axios";

export async function fetchData() {
  const url = `http://3.88.1.181:8000/products/public/catalog?supplier=FragranceX&first=0&last=50`;

  try {
    const res = await fetch(url);

    if (res.status !== 200) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
