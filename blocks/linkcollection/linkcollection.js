export default function decorate(block) {
  const isBlankTarget = block.classList.contains('blank');

  if (isBlankTarget) {
    const list = block.querySelector('ul');
    [...list.children].forEach((li) => {
      const href = li.firstChild.href;
      li.firstChild.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(href);
      });
    });
  }
}
