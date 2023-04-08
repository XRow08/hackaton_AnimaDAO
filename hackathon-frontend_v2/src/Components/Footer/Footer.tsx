import { Title } from "../Title";

export function Footer() {
  return (
    <section className="bg-[#181623] h-[20vh] w-full gap-4 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <Title color="white">© 2023 AnimaDAO.</Title>
        <Title color="white">All rights reserved.</Title>
      </div>
    </section>
  );
}
