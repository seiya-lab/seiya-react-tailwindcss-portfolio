import React from "react";

const WorksCard = (props) => {
    return (
            <div className="shadow-lg rounded-sm hover:shadow-2xl hover:ring-2 hover:-translate-y-3 duration-200">
                <div className="object-contain">
                        {/* 画像サイズは1280x720のみ */}
                        <img className="" src={props.imgPath} alt="" />
                </div>
                <div className='bg-white p-8'>

                    <div className="flex items-center">
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
    );
};

export default WorksCard