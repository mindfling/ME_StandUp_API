'use strict';

const hello = 'Hello test image';
console.log(`hello`, hello);


const btn = document.querySelector('.push-btn');
console.log(`btn`, btn);

btn.addEventListener('click', (e) => {
  const target = e.target;
  console.log(e.target);
  alert(target);
})


const inputFile = document.querySelector('.input-file');
const imageContainer = document.querySelector('.image-container');
console.log('inputFile: ', inputFile);
console.log('imageContainer: ', imageContainer);
inputFile.addEventListener('change',
  (e) => {
    const target = e.target
    console.log('change file');
    const selectedFiles = target.files;
    console.log('selectedFiles: ', selectedFiles, selectedFiles[0].name);

    if (selectedFiles.length > 0) {
      console.log('load ok');
      const [imageFile] = selectedFiles;
      console.log('imageFile: ', imageFile);

      const isImageType = imageFile.type.startsWith('image');
      console.log('isImageType: ', isImageType, imageFile.type);


      if (isImageType) {
        console.log('it is image ok');
        const fileReader = new FileReader();

        fileReader.onload = () => {
          const srcData = fileReader.result;
          const img = new Image();
          img.src = srcData;

          imageContainer.innerHTML = '';

          imageContainer.append(img);
        }

        fileReader.readAsDataURL(imageFile);
      }

    } else {
      console.error('file errror');
    }
  }
)