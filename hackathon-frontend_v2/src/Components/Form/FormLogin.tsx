import { Controller } from "react-hook-form";
import { Button } from "../Button";
import { Input } from "../Input";
import { Alert } from "../Alert";

export function FormLogin({
  onSubmit,
  alert,
  type,
  message,
  control,
  errors,
}: any) {
  return (
    <form
      className="w-1/3 flex flex-col gap-4 bg-brand-primary drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] rounded-lg p-8"
      onSubmit={onSubmit}
    >
      {alert && <Alert type={type}>{message}</Alert>}
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input {...field} errors={errors} type="email" placeholder="E-mail" />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            errors={errors}
            type="password"
            placeholder="Password"
          />
        )}
      />
      <Button type="submit" className="w-full h-12">
        Login
      </Button>
    </form>
  );
}
