import { Controller } from "react-hook-form";
import { Button } from "../Button";
import { Input } from "../Input";

export function FormLogin({ onSubmit, control, addNetwork }: any) {
  return (
    <form
      className="w-full flex flex-col gap-4 bg-brand-primary drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] rounded-lg p-8"
      onSubmit={onSubmit}
    >
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input {...field} type="email" placeholder="E-mail" />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input {...field} type="password" placeholder="Password" />
        )}
      />

      <Button
        type="submit"
        className="w-full mt-12 text-white font-lato font-medium"
      >
        Login
      </Button>
      <Button
        onClick={addNetwork}
        className="hover:bg-[#4C24D0] bg-[#4C24D0] w-full rounded-lg flex items-center justify-between px-4 text-white font-lato font-medium"
      >
        Víncule uma wallet com sua conta
        <img src={"/metamask.png"} alt="metamask" className="w-6" />
      </Button>
    </form>
  );
}
