import { Button } from "../Button";
import { Close } from "../Icon/Close";
import { Title } from "../Title";
import { useState } from "react";

export function Access({ onClick, addNetwork }: any) {
  const [step, setStep] = useState(1);

  return (
    <>
      <div className="fixed w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,.3)] z-50">
        {step === 1 && (
          <div className="h-[20vh] w-[30vw] px-14 bg-brand-primary border border-[rgba(255,255,255,.3)] rounded-2xl flex flex-col justify-center items-center gap-4">
            <Close
              className={"absolute top-[42%] right-[36%] cursor-pointer"}
              onClick={onClick}
            />
            <Title color="white" className="text-lg font-medium">
              Como deseja acessar nossa plataforma?
            </Title>
            <div
              onClick={() => setStep(2)}
              className="bg-[#353441] text-lg transition-all duration-300 ease-in-out font-medium text-white font-lato w-full flex justify-start items-center h-12 px-4 hover:bg-[#4C24D0] border border-[rgba(255,255,255,.3)] rounded-lg"
            >
              Entrar como usuário
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="h-[20vh] w-[30vw] bg-brand-primary flex flex-col justify-center items-start rounded-2xl py-40 px-20">
            <div className="flex items-center justify-center gap-2 font-medium text-[24px] text-white mb-4">
              <div onClick={() => setStep(1)} className="cursor-pointer">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.5 2.25C7.92603 2.25 5.92914 2.7602 4.59467 4.09467C3.2602 5.42914 2.75 7.42603 2.75 10V16C2.75 18.574 3.2602 20.5709 4.59467 21.9053C5.92914 23.2398 7.92603 23.75 10.5 23.75H16.5C19.074 23.75 21.0709 23.2398 22.4053 21.9053C23.7398 20.5709 24.25 18.574 24.25 16V10C24.25 7.42603 23.7398 5.42914 22.4053 4.09467C21.0709 2.7602 19.074 2.25 16.5 2.25H10.5ZM4.25 10C4.25 7.57397 4.7398 6.07086 5.65533 5.15533C6.57086 4.2398 8.07397 3.75 10.5 3.75H16.5C18.926 3.75 20.4291 4.2398 21.3447 5.15533C22.2602 6.07086 22.75 7.57397 22.75 10V16C22.75 18.426 22.2602 19.9291 21.3447 20.8447C20.4291 21.7602 18.926 22.25 16.5 22.25H10.5C8.07397 22.25 6.57086 21.7602 5.65533 20.8447C4.7398 19.9291 4.25 18.426 4.25 16V10ZM15.2913 9.99955C15.5838 9.70624 15.5831 9.23137 15.2898 8.93889C14.9965 8.64641 14.5216 8.64709 14.2292 8.94039L10.7092 12.4704C10.4173 12.7631 10.4173 13.2368 10.7092 13.5295L14.2292 17.0595C14.5216 17.3529 14.9965 17.3535 15.2898 17.0611C15.5831 16.7686 15.5838 16.2937 15.2913 16.0004L12.2994 13L15.2913 9.99955Z"
                      fill="#F2F2F2"
                    />
                  </g>
                </svg>
              </div>
              Login
            </div>
            <form action="" className="w-full mt-4 flex flex-col gap-4">
              <Button
                onClick={addNetwork}
                className="bg-[#4C24D0] w-full mt-8 rounded-lg flex items-center justify-between px-4 text-white font-lato font-medium "
              >
                Conectar a wallet
                <img src={"/metamask.png"} alt="metamask" className="w-6" />
              </Button>
              <Button
                onClick={() => setStep(1)}
                className="bg-transparent w-full border border-[rgba(255,255,255,.3)] text-white font-lato font-medium rounded-lg"
              >
                Voltar
              </Button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
