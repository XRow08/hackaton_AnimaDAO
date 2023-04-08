//REACT
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

//FUNÇÕES
import { criarEvento } from "../../services/Contratos";

//COMPONENTS
import { Header, Title, Footer, FormCreateEvent } from "../../Components";

//HELPERS
import { StorageHelper } from "../../helpers";
import { PinataAPIFile, PinataAPIJSON } from "../../services";

export function CreateEvent() {
  const { handleSubmit, control } = useForm();
  const adress = StorageHelper.getItem("adress");
  const [banner, setBanner] = useState<any | null>(null);
  const [fotos, setFotos] = useState<any | null>(null);

  async function onSubmitPinata(values: any) {
    const meuNovoArray = [banner, ...fotos];
    const fotosArray = Array.from(
      { length: meuNovoArray.length },
      (_, i) => meuNovoArray[i]
    );
    const imgs: any[] = [];
    for (const arquivo of fotosArray) {
      const formData = new FormData();
      formData.append("file", arquivo);
      try {
        const response = await PinataAPIFile(formData);
        imgs.push(response);
      } catch (error) {
        console.error(error);
      }
    }
    const data = JSON.stringify({
      name: values.nome_event,
      symbol: values.symbol_event,
      description: values.descricao,
      image: imgs.shift(),
      images_descritivas: imgs,
      data_inicio: values.data_inicio,
      data_encerramento: values.data_encerramento,
      horario_inicio: values.horario_inicio,
      horario_encerramento: values.horario_encerramento,
      cep: values.cep,
      estado: values.estado,
      rua: values.rua,
      cidade: values.cidade,
      complemento: values.complemento,
      meta: values.meta,
      external_link: "https://animadao.netlify.app",
    });
    const ipfs = await PinataAPIJSON(data);
    const name = values.nome_event;
    const symbol = values.symbol_event;
    //ALTERAR PARA RETORNAR ID E CONFIRMAR VERIFICAÇÃO E AUTORIZAÇÃO DO DONO DO MARKETPLACE
    await criarEvento(adress, name, symbol, ipfs);
  }

  return (
    <>
      <Header />
      <section className="h-full bg-brand-primary flex flex-col justify-start items-center py-8">
        <div className="w-[40%] flex flex-col justify-center items-start">
          <div className="flex items-center justify-center gap-2 font-medium text-[24px] text-white mb-4">
            <Link to={"/perfil"} className="mt-1">
              <svg
                width="27"
                height="26"
                viewBox="0 0 27 26"
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
            </Link>
            Criar novo evento
          </div>
          <div className="flex items-center justify-between w-full gap-2">
            <div className="h-8 w-8 rounded-full grid place-items-center font-lato font-bold text-white bg-[#2196F3]">
              1
            </div>
            <Title color="white" className="text-[rgba(255,255,255,0.5)]">
              Configuração do evento
            </Title>
            <div className="h-[1px] bg-white w-[40%] mt-1"></div>
            <div className="h-8 w-8 rounded-full grid place-items-center font-lato font-bold text-white bg-[#B3B3B3]">
              2
            </div>
            <Title color="white" className="text-[rgba(255,255,255,0.3)]">
              Configuração do ticket
            </Title>
          </div>
          <FormCreateEvent
            onSubmit={handleSubmit(onSubmitPinata)}
            control={control}
            setBanner={(e: any) => setBanner(e.target.files[0])}
            setFotos={(e: any) => setFotos(e.target.files)}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
