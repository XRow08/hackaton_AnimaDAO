import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Input, InputImage, Textarea } from "../Input";
import { Title } from "../Title";

type Props = {
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  control: any;
  setBanner: React.FormEventHandler<HTMLFormElement> | undefined;
  setFotos: React.FormEventHandler<HTMLFormElement> | undefined;
};

export function FormCreateEvent({
  onSubmit,
  control,
  setBanner,
  setFotos,
}: Props) {
  return (
    <form onSubmit={onSubmit} className="w-full mt-4">
      <Title
        color="white"
        className="font-medium text-[20px] my-2 mt-4 flex flex-col"
      >
        Nome do Evento
      </Title>
      <Controller
        name="nome_event"
        control={control}
        render={({ field }) => (
          <Input {...field} placeholder="Insira o nome do seu evento" />
        )}
      />
      <Title
        color="white"
        className="font-medium text-[20px] my-2 mt-4 flex flex-col"
      >
        Símbolo do seu evento
      </Title>
      <Controller
        name="symbol_event"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            maxLength={6}
            placeholder="Insira 6 Letras para representar seu evento"
          />
        )}
      />
      <Title color="white" className="font-medium text-[20px] my-2">
        Fotos do evento
      </Title>
      <div className="flex gap-4 mb-4">
        <Controller
          name="foto_banner"
          control={control}
          render={({ field }) => (
            <InputImage
              {...field}
              label={"Subir banner"}
              onChange={setBanner}
            />
          )}
        />
        <Controller
          name="fotos_descritivas"
          control={control}
          render={({ field }) => (
            <InputImage
              {...field}
              label={"Subir fotos descritivas"}
              multiple={true}
              onChange={setFotos}
            />
          )}
        />
      </div>
      <Title
        color="white"
        className="font-medium text-[20px] my-2 mt-4 flex flex-col"
      >
        Descrição
        <span className="text-[rgba(255,255,255,.5)] font-normal text-[16px]">
          Coloque uma descrição relacionada ao seu evento
        </span>
      </Title>
      <Controller
        name="descricao"
        control={control}
        render={({ field }) => (
          <Textarea
            {...field}
            placeholder="Fale sobre seu evento"
            cols={30}
            rows={10}
          />
        )}
      />
      <Title color="white" className="font-medium text-[20px] my-2">
        Tempo do evento
      </Title>
      <div className="w-full grid grid-cols-2 grid-rows-2 gap-4">
        <Controller
          name="data_inicio"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Data de ínicio" />
          )}
        />

        <Controller
          name="data_encerramento"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Data de encerramento" />
          )}
        />

        <Controller
          name="horario_inicio"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Hórario de ínicio" />
          )}
        />

        <Controller
          name="horario_encerramento"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Hórario de encerramento" />
          )}
        />
      </div>

      <Title color="white" className="font-medium text-[20px] my-2 mt-4">
        Localização
      </Title>
      <div className="w-full grid grid-cols-2 grid-rows-2 gap-4">
        <Controller
          name="cep"
          control={control}
          render={({ field }) => <Input {...field} placeholder="CEP" />}
        />
        <Controller
          name="estado"
          control={control}
          render={({ field }) => <Input {...field} placeholder="Estado" />}
        />
        <Controller
          name="cidade"
          control={control}
          render={({ field }) => <Input {...field} placeholder="Cidade" />}
        />
        <Controller
          name="rua"
          control={control}
          render={({ field }) => <Input {...field} placeholder="Rua" />}
        />
      </div>
      <Controller
        name="complemento"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            placeholder="Número do complemento"
            className="mt-4"
          />
        )}
      />

      <Title
        color="white"
        className="font-medium text-[20px] my-2 mt-4 flex flex-col"
      >
        Meta
        <span className="text-[rgba(255,255,255,.5)] font-normal text-[16px]">
          Defina um valor desejado para realizar seu evento
        </span>
      </Title>
      <Controller
        name="meta"
        control={control}
        render={({ field }) => (
          <Input {...field} type="number" placeholder="R$"></Input>
        )}
      />

      <Button
        type="submit"
        className="bg-[#1E1D2C] w-full my-4 mt-8 rounded-lg text-white font-lato font-medium hover:bg-[#4C24D0]"
        /* onClick={() => setPart(2)} */
      >
        Continuar
      </Button>
      <Button className="bg-transparent w-full border border-[rgba(255,255,255,.3)] rounded-lg">
        <Link
          className="h-12 w-full text-white font-lato font-medium"
          to={"/perfil"}
        >
          Voltar
        </Link>
      </Button>
    </form>
  );
}
