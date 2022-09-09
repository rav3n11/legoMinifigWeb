let data;

const updateElement = async () => {
    const element = document.querySelector('.floating-image');
    await fetch("http://localhost:4000/api").then(function(response) {
        return response.text();
      }).then(function(res) {
        data = res
      });
    element.src = 'http://localhost:4000/api';
}
const downloadSVG = () => {    
    console.log('what', data)
    let fakeLink = document.createElement("a");
    fakeLink.setAttribute('href', 'data:image/svg+xml;base64,' + window.btoa(data));
    fakeLink.setAttribute('download', 'minifig.svg');
    fakeLink.click();  
  }