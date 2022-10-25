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
const copyURL = () => {
  var copyText = document.querySelector(".api-url");
  console.log({copyText});
  navigator.clipboard.writeText(copyText.innerHTML);
  document.querySelector(".copy-text").classList.add("visible");
  setTimeout(() => {
    document.querySelector(".copy-text").classList.remove("visible");
  }, 2000);
}
const onScroll = () => {
  if (window.scrollY > 50) {
    document.querySelector(".navbar").classList.add("scrolled");
  } else {
    document.querySelector(".navbar").classList.remove("scrolled");
  }
};

window.addEventListener("scroll", onScroll);

//hit the api once on pageload to mitigate coldstart delay
//without updating the element
//looking for a better solution

fetch("https://generator.berekett.me/api").then(function(response) {
  return response.text();
}).then(function(res) {
  data = res;
});