"use client";

import style from "./avis.module.css";
import { CSSProperties } from "react";
import Image from "next/image";

const avisList = [
  {
    name: "John doe",
    avatarUrl: "",
    description:
      "Mollit ipsum anim aliquip ad proident laborum amet cillum enim ex ipsum. Eiusmod consequat Lorem est laboris aliqua quis laborum laborum dolor voluptate ut Lorem. Est ea quis nisi aute sunt excepteur consequat sint est quis. Tempor quis consectetur ad voluptate adipisicing ad ea. Fugiat anim do veniam ullamco mollit excepteur eu do nisi exercitation ut fugiat sint deserunt. Eu nostrud minim ad deserunt dolore laboris occaecat. Aliqua eu consequat enim irure fugiat incididunt fugiat sit adipisicing esse proident nisi.",
  },
  {
    name: "John doe",
    avatarUrl: "",
    description:
      "Mollit ipsum anim aliquip ad proident laborum amet cillum enim ex ipsum. Eiusmod consequat Lorem est laboris aliqua quis laborum laborum dolor voluptate ut Lorem. Est ea quis nisi aute sunt excepteur consequat sint est quis. Tempor quis consectetur ad voluptate adipisicing ad ea. Fugiat anim do veniam ullamco mollit excepteur eu do nisi exercitation ut fugiat sint deserunt. Eu nostrud minim ad deserunt dolore laboris occaecat. Aliqua eu consequat enim irure fugiat incididunt fugiat sit adipisicing esse proident nisi.",
  },
  {
    name: "John doe",
    avatarUrl: "",
    description:
      "Mollit ipsum anim aliquip ad proident laborum amet cillum enim ex ipsum. Eiusmod consequat Lorem est laboris aliqua quis laborum laborum dolor voluptate ut Lorem. Est ea quis nisi aute sunt excepteur consequat sint est quis. Tempor quis consectetur ad voluptate adipisicing ad ea. Fugiat anim do veniam ullamco mollit excepteur eu do nisi exercitation ut fugiat sint deserunt. Eu nostrud minim ad deserunt dolore laboris occaecat. Aliqua eu consequat enim irure fugiat incididunt fugiat sit adipisicing esse proident nisi.",
  },{
    name: "John doe",
    avatarUrl: "",
    description:
      "Mollit ipsum anim aliquip ad proident laborum amet cillum enim ex ipsum. Eiusmod consequat Lorem est laboris aliqua quis laborum laborum dolor voluptate ut Lorem. Est ea quis nisi aute sunt excepteur consequat sint est quis. Tempor quis consectetur ad voluptate adipisicing ad ea. Fugiat anim do veniam ullamco mollit excepteur eu do nisi exercitation ut fugiat sint deserunt. Eu nostrud minim ad deserunt dolore laboris occaecat. Aliqua eu consequat enim irure fugiat incididunt fugiat sit adipisicing esse proident nisi.",
  },
];

const styling: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  backgroundImage: `url('/assets/images/servicesBg.jpg')`,
  height: "fit-content",
  minHeight: "860px",
};

function Avis() {

 
  return (
    <div style={styling} id="avis">
      <span className={style.title}>Ce que disent nos clients sur nous :</span>
      <div className={style.horizontalScroll}>
        {avisList.map((avis: any, index: number) => {
          return (
            <div key={index} className={style.cardContainer}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <Image
                  className={style.avatar}
                  src="/assets/images/man1.jpg"
                  width={50}
                  height={50}
                  alt="avatar"
                />
                <span
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    marginLeft: "20px",
                  }}
                >
                  {avis.name}
                </span>
              </div>
              <div className={style.blockquote}>
                <p className={style.citation}>{avis.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Avis;
