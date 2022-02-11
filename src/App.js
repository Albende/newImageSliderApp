import * as React from "react";
import NewImageCorouse from "./NewImageCorouse";
import { itemData } from "./itemData";
import InputSlider from "./InputSlider";

function App() {
  const [likes, setLikes] = React.useState(0);

  return (
    <div>
      <InputSlider onChange={setLikes} />

      <NewImageCorouse
        photos={itemData.filter(({ likeCount }) => likeCount >= likes)}
      />
    </div>
  );
}

export default App;
