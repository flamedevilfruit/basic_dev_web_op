var str = window.location.href;
var url = new URL(str);
var idProduct = url.searchParams.get("id");
console.log(idProduct);
let article = "";
const colorPicked = document.querySelector("#colors");
const quantityPicked = document.querySelector("#quantity");


//--APPEL À L'API POUR RÉCUPÉRER LES ÉLÉMENTS--

getArticle();
function getArticle() {
    fetch("http://localhost:3000/api/products/" + idProduct)
    .then((res) => {
        return res.json();
    })
    .then(async function (resultatAPI) { //Récupération de données de l'API vers DOM
        article = await resultatAPI;
        console.table(article);
        if (article) {
            getPost(article);
        }
    })
    .catch((err) => {
        alert (err)
        console.log("Error API");
    })
}


//--AFFICHER L'ARTICLE SUR LA PAGE PRODUIT--

function getPost(article) {
            //Afficher l'image du produit
    var itemImg = document.createElement("img");
    document.querySelector(".item__img").appendChild(itemImg);
    itemImg.src = article.imageUrl;
    itemImg.alt = article.altTxt;
            //Afficher le titre du produit
    var itemName = document.getElementById('title');
    itemName.innerHTML = article.name;
            //Afficher le prix du produit
    var itemPrice = document.getElementById('price');
    itemPrice.innerHTML = article.price;
            //Afficher la description du produit
    var itemDescription = document.getElementById('description');
    itemDescription.innerHTML = article.description;
            //Afficher le choix des couleurs
    for (var colors of article.colors) {
        var itemColors = document.createElement("option");
        document.querySelector("#colors").appendChild(itemColors);
        itemColors.value = colors;
        itemColors.innerHTML = colors;
    }
    addToCart(article);
}


//--FUNCTION ADDTOCART--

function addToCart(article) {
    const addToCartButn = document.querySelector("#addToCart");
    //Event Cart
    addToCartButn.addEventListener("click", (event) => {
             //quantité entre 1 et 100
        if (quantityPicked.value > 0 && quantityPicked.value <=100 && quantityPicked.value != 0) {
            var colorChoice = colorPicked.value; //Couleur choisi
            var quantityChoice = quantityPicked.value; //Quantité choisi

            //Créer un objet et récupérer les options de l'élément
            var optionsProduit = {
                idProduit: idProduct,
                couleurProduit: colorChoice,
                quantiteProduit: Number(quantityChoice),
                nomProduit: article.name,
                prixProduit: article.price,
                descriptionProduit: article.description,
                imgProduit: article.imageUrl,
                altImgProduit: article.altTxt
            };

//--recuperer le panier dans le local storage--

            var itemsInLocalStorage = JSON.parse(localStorage.getItem("produit"));

//--CONFIRMATION--

            const popupConfirmation = () => { //Confirmation Pop-up add to Cart
               if(window.confirm(`Votre commande de ${quantityChoice} ${article.name} de couleur ${colorChoice} au prix de ${price.innerHTML} € a bien été ajouté au panier.
               OK pour consultez le panier, ANNULER pour continuer`)) {
               window.location.href ="cart.html";
                }    
            }
//--IMPORT IN LOCAL STORAGE --   
                    //On recupere un produit avec même id et couleur dans le localStorage
            if (itemsInLocalStorage) {
                const resultFind = itemsInLocalStorage.find(
                (el) => el.idProduit === idProduct && el.couleurProduit === colorChoice);
                    //On récupère l'index du produit pour faire la mise à jour du produit dû à l'ajout de la quantité
                if (resultFind) {
                    var newQuantite = parseInt(optionsProduit.quantiteProduit) + parseInt(resultFind.quantiteProduit);
                    resultFind.quantiteProduit = newQuantite;
                    localStorage.setItem("produit", JSON.stringify(itemsInLocalStorage)); //Transformer un objet JS en JSON
                    console.table(itemsInLocalStorage);
                    popupConfirmation();
                } 
                else {
                    itemsInLocalStorage.push(optionsProduit);
                    localStorage.setItem("produit", JSON.stringify(itemsInLocalStorage));
                    console.table(itemsInLocalStorage);
                    popupConfirmation();
                }
                   
            }  //Si le panier est vide
                else {
                itemsInLocalStorage = [];
                itemsInLocalStorage.push(optionsProduit);
                localStorage.setItem("produit", JSON.stringify(itemsInLocalStorage));
                console.table(itemsInLocalStorage);
                popupConfirmation();
                }
        }
    });
  }