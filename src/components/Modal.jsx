import React from "react";
import WorksCard from "./WorksCard";

const Modal = (props) => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectImg, setSelectImg] = React.useState(0);

  return (
    <>
      <div className="md:w-1/2 p-4">
        <button onClick={() => setShowModal(true)}>
          <WorksCard
            title={props.title}
            comment={
              props.subtitle
            }
            imgPath={props.thumbnail}
          />
        </button>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 p-4 max-w-4xl lg:max-w-xl">
              {/*content*/}
              <div className="rounded-lg relative flex-col bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between px-6 py-4 border-b border-solid border-slate-200">
                  <h3 className="text-3xl font-semibold text-blue-500">
                    {props.title}
                  </h3>
                  <button
                    className="text-blue-300 background-transparent font-bold uppercase px-2 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-200 hover:text-blue-500 hover:-translate-y-1 md:ml-auto"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-x"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M18 6l-12 12"></path>
                      <path d="M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
                {/*body*/}
                <div className="">
                  <div className="container mx-auto py-2 flex-col md:flex-row items-center flex justify-center">
                    <div className="md:w-1/2 mb-4 lg:pr-24 md:pr-16 text-center md:text-left">
                      <div className="mb-2">
                        <h3 className="text-xl text-blue-400 font-semibold">
                          Description
                        </h3>
                        <p className="ml-2 leading-relaxed">
                          {props.description}
                        </p>
                      </div>
                      <div className="mb-2">
                        <h3 className="text-xl text-blue-400 font-semibold">
                            Skills
                        </h3>
                        <p className="ml-2 leading-relaxed">
                          {props.skills}
                        </p>
                      </div>
                      <div className="mb-2">
                        <h3 className="text-xl text-blue-400 font-semibold">
                            Links
                        </h3>
                        <p className="ml-2 leading-relaxed">
                            {props.links}
                        </p>
                      </div>
                    </div>
                    <div className="md:w-1/4 w-1/2 mb-4">
                      <div className="flex mx-auto mb-2 justify-center">
                        <button onClick={() => setSelectImg(0)}>
                          <img className="rounded-sm p-1 hover:-translate-y-1 hover:shadow-md duration-100" src={props.imgPaths[0]} alt="" />
                        </button>
                        <button onClick={() => setSelectImg(1)}>
                          <img className="rounded-sm p-1 hover:-translate-y-1 hover:shadow-md duration-100" src={props.imgPaths[1]} alt="" />
                        </button>
                        <button onClick={() => setSelectImg(2)}>
                          <img className="rounded-sm p-1 hover:-translate-y-1 hover:shadow-md duration-100" src={props.imgPaths[2]} alt="" />
                        </button>
                      </div>
                      <div className="flex justify-center">
                          <img className="rounded-lg" src={props.imgPaths[selectImg]} alt="" /> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;