const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {}
}
button.addEventListener('click', async () => {
  //disable Button
  button.disabled = true;
  //start Picture in picture
  await videoElement.requestPictureInPicture();
  //reset button
  button.disabled = false;
});

//On load
selectMediaStream();
