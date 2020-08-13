/* eslint-disable no-lone-blocks */
// Here is the code from the example text

const root = document.getElementById('root');

const Welcome = () => `Welcome to my Javascript Program!`;

// Add a new Menu component that takes in a show argument which is either true or false
// Show this content if show is true:
// {
// }

// and this content if show is false:
// {
//   /* <nav>Menu</nav> */
// }

// Your Code Here
const menu = show => {
  const showIfTrue = `<nav>
        <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Login</li>
        </ul>
    </nav>`;
  const showIfFalse = `<nav>Menu</nav>`;
  if (show) {
    return showIfTrue;
  }
  return showIfFalse;
};

const App = () => `
        <h1>${Welcome()}<h1>
        ${menu(true)}
        <div> I EXIST! </div>
    `;

const render = root => {
  root.innerHTML = App();
};

console.log(render(root));
