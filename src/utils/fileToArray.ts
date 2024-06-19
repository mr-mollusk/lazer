import { fileToDataString } from "./fileToDataString";

export async function handleFile(file: File) {
  console.log(URL.createObjectURL(file));
  console.log(await fileToDataString(file));
  (text: string) => {
    let nodes_am = Number(text[0]);
    const nodes = [];
    for (let i = 0; i < nodes_am; i++) {
      let xy = text[i + 1].split(",");
      nodes.push([Number(xy[0]), Number(xy[1])]);
    }
    return nodes_am;
    // ui.setRangeParameters("Nodes", 0, nodes_am, 1);
    // ui.setValue("Nodes", nodes_am);
  };
}
