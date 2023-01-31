import React, { useState } from "react";
import Box from "./Box";
import { BoxInterface } from "./interfaces";
import NewBoxForm from "./NewBoxForm";

/** Manage list of boxes
 *
 * State:
 * - boxes: [ { id, width, height, backgroundColor }, ... ]
 */

function BoxList(): JSX.Element {

  const [boxes, setBoxes] = useState<BoxInterface[]>([]);

  /** add box with given { id, width, height, backgroundColor } */

  // how are the height and width props being coverted from string to number types
  function add(newBox:BoxInterface): void {
    console.log("add", typeof newBox.height)

    setBoxes(boxes => [...boxes, newBox]);
  }

  /** remove box matching that id. */

  function remove(id: string): void {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  }

  return (
    <div>
      <NewBoxForm createBox={add} />
      {boxes.map(({ id, width, height, backgroundColor }) => (
        <Box
          key={id}
          id={id}
          width={width}
          height={height}
          remove={remove}
          backgroundColor={backgroundColor}
        />
      ))}
    </div>
  );
}

export default BoxList;
