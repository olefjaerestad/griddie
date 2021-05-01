export interface IGridProps {
  /**
   * Horizontal or vertical?
   */
  type?: 'horizontal' | 'vertical';
}

/**
 * Primary UI component for user interaction
 */
export const createGrid = ({type}: IGridProps) => {
  const grid = document.createElement('div');

  grid.classList.add('grid');

  if (type === 'horizontal') {
    grid.classList.add('grid--x');
  }
  if (type === 'vertical') {
    grid.classList.add('grid--y');
  }

  grid.innerHTML = `
    <div class="cell">I am cell 1</div>
    <div class="cell">I am cell 2</div>
  `;

  return grid;
};
