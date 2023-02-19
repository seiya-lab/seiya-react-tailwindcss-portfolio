import React from "react";
import IconButton from "../../IconButton";

const ButtonExternalLink = (props) => {
  return (
    <IconButton
      iconImg={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-external-link"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
          <path d="M10 14l10 -10"></path>
          <path d="M15 4l5 0l0 5"></path>
        </svg>
      }
      link={props.link}
    />
  );
};

export default ButtonExternalLink;
