import React from "react";

const WorksCard = (props) => {
    return (
            <div className="shadow-lg rounded-sm hover:shadow-2xl ring-1 hover:ring-4 hover:-translate-y-3 duration-200">
                <div className="object-contain">
                        {/* 画像サイズは1280x720のみ */}
                        <img className="object-contain h-52" src={props.imgPath} alt="" />
                </div>
                <div className='bg-gray-50 p-6'>
                    <div className="flex items-center">
                        <h2 className='text-blue-400 text-lg font-semibold h-10'>
                            {props.title}
                        </h2>
                    </div>
                    <div className="h-10 md:h-6 mb-4">
                        <p>
                            {props.comment}
                        </p>
                    </div>
                </div>
            </div>
    );
};

export default WorksCard