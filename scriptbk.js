// LOADCARDS FUNCTION V.4
// const fetchCardsV4 = async () => {
//   try {
//     const res = await fetch(fullURL, {
//       headers: {
//         Authorization: AUTH
//       }
//     });
//     // console.log(res);

//     if (res.status === 400) throw new Error("Errore nella richiesta (400)");
//     if (res.status === 404)
//       throw new Error("Non abbiamo trovato la risorsa (404)");
//     if (!res.ok) throw new Error("Abbiamo un errore con la fetch");
//     const data = await res.json();
//   } catch (err) {
//     console.log("Qui siamo nel catch", err.messsage);
//   }
// };

// fetchCardsV4();

// LOADCARDS FUNCTION
// function loadCards() {
//   fetch(URL)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       const photos = data;
//       for (const photo of photos) {
//         populateCards(photo.title, photo.price, photo.img);
//       }
//     })
//     .catch((err) => console.log(err));
// }

//
// LOADCARDS FUNCTION V.3
// const loadCardsV3 = async () => {
//   try {
//     const res = await fetch(URL);
//     console.log(res);

//     if (res.ok) {
//       const data = await res.json();
//     } else {
//       throw new Error("Abbiamo un errore con la fetch");
//     }
//   } catch (err) {
//     console.log("Qui siamo nel catch", err.messsage);
//   }
// };

// LOADCARDS FUNCTION V.4
// const loadCardsV4 = async () => {
//   try {
//     const res = await fetch(URL, {
//       method: "POST",
//       body: JSON.stringify(newAppointment),
//       headers: {
//         //mancalo le virgolette
//         Authorization:
//           "znj8z2sZcAVqTn29Rd8N2T0FS1F4yRJFkUDUSx813U4kerlLGQjxEJXe",
//         "Content-Type": "application/json"
//       }
//     });
//     //va in index.html
//     // <a href=".details.html?id=${appointment._id}"></a>

//     // va in detailPageAlbum.html
//     const params = new URLSearchParams(windows.location.search);
//     params.get("id");

//     const selectedID = new URLSearchParams(windows.location.search).get("id");

//     const newAppointmentObj = await res.json();
//     alert(
//       "Risorsa creata con l'id " +
//         newAppointmentObj._id +
//         "avvenuta con successo!"
//     );
//     const { _id, name, description, price, time } = newAppointmentObj;
//     container.innerHTML = `${time},${time},${time},${time} `;

//     console.log(res);

//     if (res.status === 400) throw new Error("Errore nella richiesta (400)");
//     if (res.status === 404)
//       throw new Error("Non abbiamo trovato la risorsa (404)");
//     if (!res.ok) throw new Error("Abbiamo un errore con la fetch");
//     const data = await res.json();
//   } catch (err) {
//     console.log("Qui siamo nel catch", err.messsage);
//   }
// };

// const newAppointment = {
//   name: document.getElementById("name").value,
//   name: document.getElementById("name").value,
//   name: document.getElementById("name").value,
//   name: document.getElementById("name").value
// };
//     .then((res) => {
//       console.log(res);
//       if (res.ok) {
//         return res.json();
//       }
//     })
//     .then((data) => {
//       console.log(data);
//       const photos = data;
//       for (const photo of photos) {
//         populateCards(photo.title, photo.price, photo.img);
//       }
//     })
//     .catch((err) => console.log(err));

// };

// LOADCARDSWITHPARAMS FUNCTION
// function loadCardsWithParams() {
//   fetch("https://striveschool-api.herokuapp.com/books")
//     .then((res) => res.json())
//     .then((data) => {
//       const photos = data;
//       for (const photo of photos) {
//         loadCards(photos.id, photo.src.portrait, photo.photographer);
//       }
//     })
//     .catch((err) => console.log(err));
// }

// let customBgColor = getAverageColourAsRGB(document.getElementById("image"));
// document.body.style.backgroundColor =
//   "rgb(" + rgb.r + "," + rgb.b + "," + rgb.g + ")";

//GET EVERAGE COLOR FUNCTION
// function getAverageColourAsRGB(img) {
//   var canvas = document.createElement("canvas"),
//     context = canvas.getContext && canvas.getContext("2d"),
//     rgb = { r: 102, g: 102, b: 102 }, // Set a base colour as a fallback for non-compliant browsers
//     pixelInterval = 5, // Rather than inspect every single pixel in the image inspect every 5th pixel
//     count = 0,
//     i = -4,
//     data,
//     length;

//   // return the base colour for non-compliant browsers
//   if (!context) {
//     alert("Your browser does not support CANVAS");
//     return rgb;
//   }

//   // set the height and width of the canvas element to that of the image
//   var height = (canvas.height =
//       img.naturalHeight || img.offsetHeight || img.height),
//     width = (canvas.width = img.naturalWidth || img.offsetWidth || img.width);

//   context.drawImage(img, 0, 0);

//   try {
//     data = context.getImageData(0, 0, width, height);
//   } catch (e) {
//     // catch errors - usually due to cross domain security issues
//     alert(e);
//     return rgb;
//   }

//   data = data.data;
//   length = data.length;
//   while ((i += pixelInterval * 4) < length) {
//     count++;
//     rgb.r += data[i];
//     rgb.g += data[i + 1];
//     rgb.b += data[i + 2];
//   }

//   // floor the average values to give correct rgb values (ie: round number values)
//   rgb.r = Math.floor(rgb.r / count);
//   rgb.g = Math.floor(rgb.g / count);
//   rgb.b = Math.floor(rgb.b / count);

//   return rgb;
// }

// let rgb = getAverageColourAsRGB(document.getElementById("image"));
// const detailPageAlbum = document.querySelector(".detail-page-album");
// detailPageAlbum.style.backgroundColor =
//   "rgb(" + rgb.r + "," + rgb.b + "," + rgb.g + ")";
