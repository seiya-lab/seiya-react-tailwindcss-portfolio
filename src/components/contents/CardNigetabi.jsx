import React from "react";
import Modal from "../Modal";

const CardNigetabi = () => {
  return (
    <Modal
      title={"「逃げ旅]メーカー"}
      subtitle={
        "「たまには現実逃避したい」そんなあなたに旅行を提案するサービス"
      }
      thumbnail={"./usagi.png"}
      description={"今はサンプルで書いています。"}
      skills={"JavaScript"}
      links={"samplelink"}
      imgPaths={["./usagi.png", "./usagi.png", "./usagi.png"]}
    />
  );
};

export default CardNigetabi;
