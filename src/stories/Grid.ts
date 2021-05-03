export interface IGridProps {
  /**
   * Horizontal or vertical?
   */
  direction?: 'x' | 'y' | 'xy';
}

/**
 * The grid (`.g`) is the top level element in a, well, grid.
 * A grid can be horizontal (`.g.g-x`), vertical (`.g.g-y`) or both (`.g.g-x.g-y`).
 */
export const createGrid = ({direction}: IGridProps) => {
  const grid = document.createElement('div');

  grid.classList.add('g');

  if (direction === 'x') {
    grid.classList.add('g-x');
  }
  if (direction === 'y') {
    grid.classList.add('g-y');
  }
  if (direction === 'xy') {
    grid.classList.add('g-x', 'g-y');
  }

  grid.innerHTML = `
    <div class="c c-8">.c.c-8</div>
    <div class="c c-4">.c.c-4</div>
    <style>
      .g,
      .c {
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      .g {
        border: 1px solid #0bf;
      }
      .c {
        background-color: #eee;
      }
    </style>
  `;

  return grid;
};
