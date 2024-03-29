import Image from "next/image";
import { useState } from "react";

export default function Pratos(props) {
  const {title, content, price, imageURL, prato, setCurrentDish, setOpen } = props;
  
  return (
    <div className="flex mx-4 sm:mx-1 justify-"> 
      <button 
        className="flex my-2 h-40 w-[354px] gap-4 p-4 sm:my-0 md:mx-0 lg:w-[480px] xl:h-52 xl:w-[605px] xl:mx-1 /xl:w-[605px] 2xl:w-[633px] bg-branco border-solid border border-borda hover:border-cinza transition-0.2s shadow rounded "
        onClick={() => {
          setCurrentDish(prato);
          setOpen(!open);
        }}
      >
        <div className="flex-columm /bg-vermelho sm:w-[411px] xl:h-[154px]">
          <div className="flex-1 h-28  lg:h-full /bg-vermelho">
            <h3 className="flex flex-grow /h-auto h-10 w-44 lg:w-72 xl:w-full overflow-hidden truncate md:text-clip justify-start items-center mb-4 text-left text-lg text-cinza-400 font-medium bg-branco">
                {title}
            </h3>
            <p className="flex h-10 w-40 lg:w-full overflow-hidden mb-3 text-left text-sm text-cinza-200 font-light">
                {content} 
            </p>
          </div>
          
          <span className="flex w-full text-base  text-cinza-400">
            A partir de R$ {price}
          </span>
        </div>
        
        
        <div className="flex justify-center items-center h-full w-full  xl:h-[174px] lg:w-[180px] ">
        <Image
          className="flex w-full h-full justify-center items-center min-w-[100px]"
          src={imageURL}
          alt={""}
          width={180}
          height={174}
        />
        </div>
      </button>
    </div>
  );
}

