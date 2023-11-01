import React from "react";

const JoinButton = () => {
    return (
        <div>
            <button className="w-[83px] h-[33px] px-[21px] py-2.5 bg-lime-400 rounded-[10px] shadow justify-center items-center gap-2.5 inline-flex">
                <div className="text-zinc-700 text-[11px] font-extralight font-['Inter']">회원가입</div>
            </button>

            <button className="w-[84px] h-[33px] p-2.5 bg-gray-700 rounded-[10px] shadow justify-center items-center gap-2.5 inline-flex">
                <div className="text-neutral-50 text-[11px] font-extralight font-['Inter']">로그인</div>
            </button>
        </div>
    );
};

export default JoinButton;