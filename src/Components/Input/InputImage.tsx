import { Title } from "../Title";

export function InputImage() {
  return (
    <label className="h-[20rem] w-full border border-dashed border-[rgba(255,255,255,.3)] flex flex-col justify-center items-center gap-4 rounded-2xl">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.8523 24.1928V15.8967L10.0869 18.6621"
          stroke="white"
          strokeWidth="2.07402"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.8525 15.8967L15.6179 18.6621"
          stroke="white"
          strokeWidth="2.07402"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30.8275 14.5141V21.4275C30.8275 28.3409 28.0621 31.1063 21.1487 31.1063H12.8526C5.93919 31.1063 3.17383 28.3409 3.17383 21.4275V13.1314C3.17383 6.218 5.93919 3.45264 12.8526 3.45264H19.766"
          stroke="white"
          strokeWidth="2.07402"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30.8271 14.5141H25.2964C21.1483 14.5141 19.7656 13.1314 19.7656 8.98336V3.45264L30.8271 14.5141Z"
          stroke="white"
          strokeWidth="2.07402"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <Title className="font-medium text-lg text-[rgba(255,255,255,.7)]">
        Você pode subir arquivos PNG e JPEG
      </Title>
      <Title color="white" className="font-medium text-lg">
        Máximo de 100mb
      </Title>

      <div className="bg-[rgba(255,255,255,.01)] text-white font-lato font-medium text-lg h-12 w-1/2 border flex justify-center items-center border-[rgba(255,255,255,.3)] rounded-lg">
        Subir arquivo
      </div>

      <input
        id="file"
        name="file"
        type="file"
        accept="png"
        className="sr-only peer h-full w-full"
      />
    </label>
  );
}
