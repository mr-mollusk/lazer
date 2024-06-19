import { Box, Center, Input } from "@chakra-ui/react";
import { ICanvasProps } from "./canvas.types";
import { useStore } from "../../store";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { fileToDataString } from "../../utils";
import s from "./canvas.module.css";
import { getTraversalOrder } from "../../utils/canvas";
import { handleFile } from "../../utils/fileToArray";

export const Canvas = ({ size = 200 }: ICanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { file, nodes, inputFile } = useStore();
  const [img, setImg] = useState("");

  useEffect(() => {
    if (!file) return;
    fileToDataString(file).then((data) => setImg(data));

    console.log(handleFile(file));
  }, [file]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => processImage(img);
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  const processImage = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    console.log(canvas);

    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, img.width, img.height);
    const data = imageData.data;

    // Конвертируем изображение в черно-белое
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const avg = (r + g + b) / 3;
      data[i] = data[i + 1] = data[i + 2] = avg; // Устанавливаем среднее значение как цвет для RGB
    }

    // Перерисовываем черно-белое изображение
    // ctx.putImageData(imageData, 0, 0);

    
    // Разбиваем изображение на пиксели и выводим их в консоль как массив
    const pixels = [];
    for (let y = 0; y < canvas.height; y++) {
      const row = [];
      for (let x = 0; x < canvas.width; x++) {
        const index = (y * canvas.width + x) * 4;
        const pixel = {
          r: data[index],
          g: data[index + 1],
          b: data[index + 2],
          a: data[index + 3],
        };
        row.push(pixel);
      }
      pixels.push(row);
    }
    const newPixels = getTraversalOrder(pixels);
    console.log(pixels);

    console.log(newPixels);
    
    ctx.fillStyle = "rgba(255, 255, 255, 1)";
    ctx.fillRect(0, 0, img.width, img.height);
    const fillColor = "rgba(0, 0, 0, 1)"; // Красный цвет, пример

    newPixels.forEach((point) => {
      const { x, y } = point;
      ctx.fillStyle = fillColor;
      ctx.fillRect(y, x, 1, 1); // Рисуем пиксель на холсте
    });
  };

  const inputFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    inputFile(e.target.files[0]);
  };

  return (
    <Center w="70%" p="2rem">
      <Box
        w={`${size}px`}
        h={`${size}px`}
        border="1px solid black"
        pos="relative"
      >
        <Input
          position="relative"
          zIndex={2}
          type="file"
          width="100%"
          height="100%"
          opacity="0"
          onChange={handleFileChange}
        />

        <canvas
          id="canvas"
          width="100%"
          height="100%"
          ref={canvasRef}
          className={s.canvas}
        ></canvas>
      </Box>
    </Center>
  );
  return;
};
