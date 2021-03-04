import admin from '../src/firebase';

const db = admin.database();
const storage = admin.storage().bucket();

export async function getCars() {
  try {
    const res = await db
      .ref('cars/')
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
        } else return {};
      })
      .catch((err) => {
        console.log(err);
        return {};
      });

    const data = [];

    await Promise.all(
      Object.keys(res).map(async (car) => {
        let newCarObj = { ...res[car], id: car };

        if ('images' in newCarObj) {
          const images = await getImageUrls(newCarObj);
          newCarObj.images = images;
        }
        data.push(newCarObj);
      })
    ).catch((err) => console.error(err));
    return data;
  } catch (err) {
    return [];
  }
}

async function getImageUrls(newCarObj) {
  const imgUrlArrays = await Promise.all(
    Object.values(newCarObj.images).map((image) => {
      const imgUrl = storage
        .file(image)
        .getSignedUrl({ action: 'read', expires: getTommorrow() })
        .catch((err) => {
          console.error(err);
          if (err) return null;
        });
      return imgUrl;
    })
  );
  const imgUrls = imgUrlArrays.map((urlArray) => urlArray[0]);
  return imgUrls;
}

function getTommorrow() {
  var tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);
  return tomorrow;
}

export async function getCar(carId) {
  const carData = await db
    .ref(`/cars/${carId}`)
    .get()
    .then(async (snapshot) => {
      if (snapshot.exists()) {
        const newCar = snapshot.val();
        if (newCar.images) {
          const imgUrls = await getImageUrls(snapshot.val());
          newCar.images = imgUrls;
          newCar.id = carId;
          return newCar;
        }
        return newCar;
      } else throw { status: 404, message: 'Car not found.' };
    })
    .catch((err) => {
      throw err;
    });

  return carData;
}
