import { Lupa } from "../Icon/Lupa";

export function Search() {
  return (
    <label className="w-1/4 h-10 border rounded-3xl flex items-center px-4">
      <Lupa />
      <input
        type="text"
        placeholder="Pesquise sobre eventos, ingressos e empresas"
        className="bg-transparent outline-none w-full h-full px-2 text-white font-lato font-normal"
      />
    </label>
  );
}
