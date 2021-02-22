const code = `<h1>My name is Jordan</h1>
  <h2>I'm a Programmer!</h2>
  <img src="./images/jordan.png" width="100px" alt="" class="jordan">
  <p>
    I'm 24.<br>
    I am an aerial acrobat and a <em>FIRST</em> alumna.
  </p>
  <img src="./images/tree.jpeg" width="60px" alt="">
`;
document.body.innerHTML = code;
const jordanImage = document.querySelector('.jordan');
jordanImage.addEventListener('mouseover', () => (jordanImage.style.borderRadius = '50%'));
jordanImage.addEventListener('mouseleave', () => (jordanImage.style.borderRadius = '10%'));
