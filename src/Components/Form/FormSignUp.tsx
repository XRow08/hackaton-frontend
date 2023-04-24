import { Controller } from "react-hook-form";
import { Button } from "../Button";
import { Input, InputImage, Textarea } from "../Input";
import { Title } from "../Title";

export function FormSignUp({ onSubmit, control, addNetwork }: any) {
  return (
    <>
      <form
        className="w-full flex flex-col gap-2"
        onSubmit={onSubmit}
      >
        <div className="flex items-center gap-2">
          <Controller
            name="perfil"
            control={control}
            render={({ field }) => (
              <InputImage {...field} label="Foto de perfil" />
            )}
          />

          <Controller
            name="banner"
            control={control}
            render={({ field }) => (
              <InputImage {...field} label="Foto de banner" />
            )}
          />
        </div>

        <Title color="white" className="font-medium text-xl my-2 flex flex-col">
          Configurações de Perfil
        </Title>

        <Title color="white" className="font-medium text-lg flex flex-col mt-4">
          Nome do perfil
        </Title>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <Input {...field} placeholder="Name" />}
        />

        <Title color="white" className="font-medium text-lg flex flex-col mt-4">
          Biografia
        </Title>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <Textarea
              {...field}
              placeholder="Detalhe mais sobre sua empresa"
              rows={5}
            />
          )}
        />

        <Title color="white" className="font-medium text-lg flex flex-col mt-4">
          Email
        </Title>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input {...field} type="email" placeholder="Insira seu email" />
          )}
        />

        <Title color="white" className="font-medium text-lg flex flex-col mt-4">
          Senha
        </Title>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input {...field} type="password" placeholder="Insira sua senha" />
          )}
        />

        <Button type="submit" className="text-white text-base mt-6">
          Confirmar
        </Button>
      </form>
      <Button
        onClick={addNetwork}
        className="hover:bg-[#4C24D0] bg-[#4C24D0] w-full rounded-lg flex items-center justify-center px-4 mt-2 text-white font-lato font-medium "
      >
        Víncule uma wallet com sua conta
      </Button>
      <Button className="bg-transparent w-full border-2 mt-2 border-[rgba(255,255,255,.3)] text-white font-lato font-medium rounded-lg">
        Voltar
      </Button>
    </>
  );
}
