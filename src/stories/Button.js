import '../css/styles.css';

export const createButton = ({
  label,
  variant = 'green',
  size = 'medium',
  outlined = false,
  pill = false,
  block = false,
}) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.innerText = label;

  const buttonVariant = outlined ? `btn--${variant}-outline` : `btn--${variant}`;
  button.classList.add('btn');
  button.classList.add(buttonVariant);
  button.classList.add(`btn--${size}`);
  pill && button.classList.add('pill');
  block && button.classList.add('block');
  return button;
}
