// Интерфейс для позиции (точки)
export interface Point {
  x: number;
  y: number;
}

// Интерфейс для пикселя изображения
export interface Pixel {
  r: number;
  g: number;
  b: number;
  a: number;
}

// Функция для получения оптимального порядка обхода пикселей изображения
export function getTraversalOrder(image: Pixel[][]): Point[] {
  const rows = image.length;
  const cols = image[0].length;
  const visited: boolean[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(false)
  );
  const traversalOrder: Point[] = [];

  // Создаем новый стек для обхода пикселей
  const stack: Point[] = [];

  // Начинаем обход с верхнего левого угла
  stack.push({ x: 0, y: 0 });

  while (stack.length > 0) {
    const { x, y } = stack.pop() as Point;
    if (x >= 0 && x < rows && y >= 0 && y < cols && !visited[x][y]) {
      if (
        image[x][y].r <= 20 &&
        image[x][y].g <= 20 &&
        image[x][y].b <= 20 &&
        image[x][y].a > 0
      )
        traversalOrder.push({ x, y });
      visited[x][y] = true;
      stack.push({ x: x + 1, y }); // Двигаемся вправо
      stack.push({ x, y: y + 1 }); // Двигаемся вниз
    }
  }

  return traversalOrder.filter((item, index) => {
    if (index % 5 === 0) return item;
  });
}
