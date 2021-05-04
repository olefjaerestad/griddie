export interface ICellProps {
  direction?: 'x' | 'y' | 'xy';
  offset?: number;
  responsive?: boolean;
  size?: number;
}

/**
 * A grid can consist of one or more cells (`.c`).
 * The size and offset of a cell can be configured on a pr. cell, pr. breakpoint, basis.
 */
export const createGridWithCells = ({direction, offset, responsive, size}: ICellProps) => {
  const grid = document.createElement('div');
  const cell1 = document.createElement('div');
  const styles = document.createElement('style');

  cell1.classList.add('c');
  styles.innerHTML = `
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
  `;

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

  if (size !== undefined) {
    if (responsive) {
      cell1.classList.add('c-12', `c-lg-${size}`);
    } else {
      cell1.classList.add(`c-${size}`);
    }
  }

  if (offset) {
    const offsetDirection = direction === 'x' || direction === 'y' ? direction : '';
    if (responsive) {
      cell1.classList.add(`o-lg-${offset}${offsetDirection ? `-${offsetDirection}` : ''}`);
    } else {
      cell1.classList.add(`o-${offset}${offsetDirection ? `-${offsetDirection}` : ''}`);
    }
  }

  cell1.innerText = cell1.classList.value.replace(/ /g, '.').substring(1);

  const cell2 = cell1.cloneNode(true);

  grid.append(cell1);
  grid.append(cell2);
  grid.append(styles);

  return grid;
};
