import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { InputImage, Input, Textarea, ToggleCheck } from "../Input";
import { Title } from "../Title";

type Props = {
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  control: any;
  setFile: React.FormEventHandler<HTMLFormElement> | undefined;
};

export function FormCreateTicket({ onSubmit, setFile, control }: Props) {
  return (
    <form onSubmit={onSubmit} className="w-full mt-2">
      <Title color="white" className="font-medium text-[20px] my-2 mt-8">
        Imagem do Ticket
      </Title>
      <Controller
        name="image_ticket"
        control={control}
        render={({ field }) => (
          <InputImage
            {...field}
            label="Enviar foto do Ticket"
            onChange={setFile}
          />
        )}
      />

      <Title
        color="white"
        className="font-medium text-[20px] my-2 mt-8 flex flex-col"
      >
        Nome do ticket
      </Title>
      <Controller
        name="name_ticket"
        control={control}
        render={({ field }) => (
          <Input {...field} type="text" placeholder="Meu Ticket 1"></Input>
        )}
      />

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
        name="descricao_ticket"
        control={control}
        render={({ field }) => (
          <Textarea
            {...field}
            placeholder="Fale sobre seu evento"
            rows={5}
          />
        )}
      />

      <Title
        color="white"
        className="font-medium text-[20px] my-2 mt-8 flex flex-col"
      >
        Total Supply
      </Title>
      <div className="w-full h-full gap-4">
        <Controller
          name="total_ticket"
          control={control}
          render={({ field }) => (
            <Input {...field} type="number" placeholder="5000"></Input>
          )}
        />
      </div>

      <Title
        color="white"
        className="font-medium text-[20px] my-2 mt-8 flex flex-col"
      >
        Preço
      </Title>
      <Controller
        name="preco_ticket"
        control={control}
        render={({ field }) => (
          <Input {...field} type="number" placeholder="R$"></Input>
        )}
      />

      <Title
        color="white"
        className="font-medium text-[20px] my-2 mt-8 flex flex-col"
      >
        Token é beneficiario?
      </Title>
      <Controller
        name="beneficent"
        control={control}
        render={({ field }) => <ToggleCheck {...field} />}
      />

      <Button
        type="submit"
        className="bg-[#1E1D2C] w-full my-4 mt-8 rounded-lg text-white font-lato font-medium hover:bg-[#4C24D0]"
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
