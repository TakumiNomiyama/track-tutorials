import React, { useState } from "react";
import TrackButton from "./components/TrackButton";
import TrackText from "./components/TrackText";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const onClick = () => {
    if (text.trim() !== "") {
      setList([...list, text]);
      setText(""); // 追加後に入力フィールドをクリア
    }
  };

  const onDelete = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here"
      />
      <TrackButton onClick={onClick} />
      <TrackText text={text} />

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
