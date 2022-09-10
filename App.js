let data;

const updateElement = async () => {
    document.querySelector('.loading').style.display = 'flex';
    document.querySelector('.floating-image').style.display = 'none';
    const element = document.querySelector('.floating-image');
    await fetch("https://generator.berekett.me/api").then(function(response) {
        return response.text();
      }).then(function(res) {
        data = res;        
        document.querySelector('.loading').style.display = 'none';
        document.querySelector('.floating-image').style.display = 'flex';
        element.src = 'https://generator.berekett.me/api';
      });
}
const downloadSVG = () => {    
    console.log('what', data)
    let fakeLink = document.createElement("a");
    fakeLink.setAttribute('href', 'data:image/svg+xml;base64,' + window.btoa(data));
    fakeLink.setAttribute('download', 'minifig.svg');
    fakeLink.click();  
  }