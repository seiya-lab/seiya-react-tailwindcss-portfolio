import React from "react";

const WorksCard = (props) => {
    return (
        <div className='md:w-1/2 p-4'>
            <div className="shadow-lg rounded-sm hover:shadow-2xl hover:ring-2 hover:-translate-y-3 duration-200">
                <div className="object-contain">
                        {/* 画像サイズは1280x720のみ */}
                        <img className="" src={props.imgPath} alt="" />
                </div>
                <div className='bg-gray-100 p-8'>

                    <div className="flex items-center">
                        {/* <div className="bg-green-500 text-white rounded-full">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor" />
                                </svg>
                        </div> */}
                        <h2 className='text-blue-400 text-lg font-semibold'>
                            {props.title}
                        </h2>
                    </div>
                    <div>
                        <p>
                            {props.comment}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorksCard