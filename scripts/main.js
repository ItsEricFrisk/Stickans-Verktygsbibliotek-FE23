const productsContainer = document.querySelector(".main__products");
const shopIcon = document.getElementById("icons__shop");


//  Skapa en ny produkt
function createProduct(name, imageSrc, add, availability) {
    //skapar nya element
    let productContainer = document.createElement("section");
    let productName = document.createElement("h3");
    let productImage = document.createElement("img");
    const productBtn = document.createElement("button");

    productContainer.classList.add("products__container");

    //Attribut och innehåll
    productName.textContent = name;
    productImage.src = imageSrc;
    productBtn.textContent = add;

    // Lägg till elementen i produktcontainer
    productContainer.appendChild(productName);
    productContainer.appendChild(productImage);
    productContainer.appendChild(productBtn)

    // Lägg till produktcontainer i main__products
    productsContainer.appendChild(productContainer);
}

createProduct("Bandslip", "/images/tools/bandslip.png", "Hyr");
createProduct("Borrskruvdragare", "/images/tools/borrskruvdragare.png", "Hyr");
createProduct("Cirkelsåg", "/images/tools/cirkelsåg.png", "Hyr");
createProduct("Gräsklippare", "/images/tools/Gräsklippare.png", "Hyr");
createProduct("Grästrimmer", "/images/tools/grästrimmer.png", "Hyr");
createProduct("Häcksax", "/images/tools/häcksax.png", "Hyr");
createProduct("Motorsåg", "/images/tools/motorsåg.png", "Hyr");
createProduct("Multiverktyg", "/images/tools/multiverktyg.png", "Hyr");
createProduct("Skruvdragare", "/images/tools/skruvdragare.png", "Hyr");
createProduct("Spikpistol", "/images/tools/spikpistol.png", "Hyr");
createProduct("Sticksåg", "/images/tools/sticksåg.png", "Hyr");
createProduct("Tigersåg", "/images/tools/tigersåg.png", "Hyr");
createProduct("Varmluftspistol", "/images/tools/varmluftspistol.png", "Hyr");
createProduct("Vinkelslip", "/images/tools/vinkelslip.png", "Hyr");
createProduct("Batterier", "/images/tools/batteri.png", "hyr");

shopIcon.addEventListener("click", () => {
    window.location.href = "/pages/shop.html";
});